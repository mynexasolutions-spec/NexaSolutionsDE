"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";

export default function AutoContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If user is on the contact page, don't show the popup
    if (pathname === "/contact") return;

    // Check if already displayed in this session
    const hasShown =
      typeof window !== "undefined"
        ? sessionStorage.getItem("nexa_auto_contact_shown")
        : null;
    if (hasShown) return;

    // Trigger popup 30 seconds after site loads
    const timer = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/contact"
      ) {
        setIsOpen(true);
        sessionStorage.setItem("nexa_auto_contact_shown", "true");
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("nexa_auto_contact_shown", "true");
    }
  };

  return <ContactModal isOpen={isOpen} onClose={handleClose} />;
}
