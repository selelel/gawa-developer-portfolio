import type { Metadata } from "next";
import ContactPageShell from "../_components/ContactPageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with Gawa Developer. Submit a free inquiry and we'll respond within 24 hours to schedule your strategy call.",
  alternates: {
    canonical: "https://gawadeveloper.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageShell />;
}
