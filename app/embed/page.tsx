"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Program from "@/components/Program";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import SignupForm from "@/components/SignupForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function EmbedPage() {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (typeof window !== "undefined" && window.parent !== window) {
        window.parent.postMessage({ type: "closepopup" }, "*");
      }
    }, 300);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-300 bg-transparent ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-[150] flex items-center justify-center w-12 h-12 rounded-full bg-black/80 hover:bg-black border-2 border-white/40 transition-all"
        aria-label="Cerrar"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#0A0A0F] shadow-2xl overflow-hidden flex flex-col border border-white/10">
        <div className="overflow-y-auto flex-1">
          <Header />
          <div className="pt-14">
            <Hero />
            <ValueProps />
            <Program />
            <WhyUs />
            <Gallery />
            <About />
            <SignupForm />
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
