import { permanentRedirect } from "next/navigation";

export default function DatenschutzPage() {
  permanentRedirect("/privacy-policy");
}
