import { permanentRedirect } from "next/navigation";

export default function AgbPage() {
  permanentRedirect("/terms-of-service");
}
