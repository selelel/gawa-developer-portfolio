import type { Metadata } from "next";
import ContactInfoPanel from "../_components/ContactInfoPanel";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with Gawa Developer. Submit a free inquiry and we'll respond within 24 hours to schedule your strategy call.",
  alternates: {
    canonical: "https://gawadeveloper.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row lg:items-start">
      {/* Animated left panel (client component) */}
      <ContactInfoPanel />

      {/* Right: White form panel */}
      <main className="flex-1 bg-bg-canvas px-5 py-12 sm:px-8 lg:px-14 lg:pb-24 lg:pt-28">
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Project Inquiry
            </p>
            <h2 className="text-2xl font-black tracking-tight text-brand-dark">
              Tell us about your project
            </h2>
            <p className="text-sm text-text-secondary">
              Fields marked{" "}
              <span className="font-semibold text-brand-primary">*</span> are
              required.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </div>
  );
}
