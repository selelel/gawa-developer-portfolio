"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import ContactInfoPanel from "./ContactInfoPanel";
import ContactForm from "./ContactForm";

export type StepDirection = "forward" | "back";

export default function ContactPageShell() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<StepDirection>("forward");

  const goNext = () => {
    setDirection("forward");
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 1));
  };

  return (
    <div className="flex min-h-svh flex-col lg:flex-row lg:items-start">
      {/* ── Back button ── */}
      <div className="fixed left-4 top-4 z-50 sm:left-6 sm:top-6">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="home-link"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-brand-dark/80 px-4 py-2 text-[13px] font-medium text-white/70 backdrop-blur-md transition-all hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden>
                  <path d="M10 3L5 8l5 5" />
                </svg>
                Gawa Solutions
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="back-btn"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={goBack}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-brand-dark/80 px-4 py-2 text-[13px] font-medium text-white/70 backdrop-blur-md transition-all hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden>
                  <path d="M10 3L5 8l5 5" />
                </svg>
                Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Left info panel ── */}
      <ContactInfoPanel step={step} />

      {/* ── Right form panel ── */}
      <main
        className="flex-1 bg-bg-canvas px-5 py-14 sm:px-8 lg:px-14 lg:pb-24 lg:pt-20"
        id="main-content"
      >
        <div className="mx-auto w-full max-w-xl">
          <ContactForm
            step={step}
            direction={direction}
            onNext={goNext}
            onBack={goBack}
          />
        </div>
      </main>
    </div>
  );
}
