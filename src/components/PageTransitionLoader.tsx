"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PageLoader from "./PageLoader";

const MIN_LOAD_TIME = 1200; // Anti-flicker: 1.2s minimum display
const SAFETY_TIMEOUT = 5000; // Auto-dismiss after 5s if navigation hangs

function TransitionLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const completeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNavigatingRef = useRef(false);

  // Clear all pending timeouts
  const clearTimers = () => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
    if (completeTimeoutRef.current) {
      clearTimeout(completeTimeoutRef.current);
      completeTimeoutRef.current = null;
    }
  };

  const startTransition = () => {
    clearTimers();
    isNavigatingRef.current = true;
    startTimeRef.current = Date.now();
    setIsFadingOut(false);
    setIsLoading(true);

    // Safety fallback: auto-dismiss if route doesn't finish within 5s
    safetyTimeoutRef.current = setTimeout(() => {
      stopTransition();
    }, SAFETY_TIMEOUT);
  };

  const stopTransition = () => {
    setIsFadingOut(true);
    completeTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsFadingOut(false);
      isNavigatingRef.current = false;
      startTimeRef.current = null;
    }, 250); // 250ms smooth fade-out duration
  };

  // Route change detector
  useEffect(() => {
    if (isNavigatingRef.current || isLoading) {
      const elapsed = startTimeRef.current ? Date.now() - startTimeRef.current : MIN_LOAD_TIME;
      const remaining = Math.max(0, MIN_LOAD_TIME - elapsed);

      completeTimeoutRef.current = setTimeout(() => {
        stopTransition();
      }, remaining);
    }

    return () => {
      if (completeTimeoutRef.current) {
        clearTimeout(completeTimeoutRef.current);
      }
    };
  }, [pathname, searchParams]);

  // Intercept all internal <a> tag clicks globally
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignore if event was already handled/prevented
      if (e.defaultPrevented) return;

      // Ignore if not a primary left click
      if (e.button !== 0) return;

      // Ignore modifier keys (Cmd, Ctrl, Shift, Alt)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      // Ignore links opening in new tab or with download attribute
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore empty hashes, javascript, tel, or mailto links
      if (
        href === "#" ||
        href.startsWith("#") ||
        href.startsWith("javascript:") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Ignore external domains
        if (targetUrl.origin !== currentUrl.origin) return;

        // Ignore same page anchor navigation (e.g. /#services or /projects#preview)
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search
        ) {
          return;
        }

        // Trigger branded route transition
        startTransition();
      } catch {
        // Fallback for non-standard URLs
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
      clearTimers();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className={`fixed inset-x-0 bottom-0 top-[76px] sm:top-[86px] md:top-[92px] z-40 bg-white/95 backdrop-blur-[8px] flex items-center justify-center overflow-hidden transition-opacity duration-250 ease-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 animate-fade-in"
      }`}
    >
      {/* Top micro-accent progress line directly below the fixed header */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent shadow-[0_0_12px_#EA580C] animate-pulse"
      />

      {/* Branded Orbit Page Loader */}
      <PageLoader fullScreen={false} />
    </div>
  );
}

export default function PageTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <TransitionLoaderContent />
    </Suspense>
  );
}
