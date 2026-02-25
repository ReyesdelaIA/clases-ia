"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import Program from "./Program";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import About from "./About";
import SignupForm from "./SignupForm";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function LandingPopup({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Backdrop oscuro */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />

      {/* Botón X fuera del popup: esquina superior derecha de la pantalla, siempre visible */}
      <button
        onClick={handleClose}
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[150] flex items-center justify-center w-12 h-12 rounded-full bg-black/80 hover:bg-black border-2 border-white/40 hover:border-white/70 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
        aria-label="Cerrar y ver sitio principal"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Popup: caja más pequeña que la pantalla, estilo modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl sm:rounded-3xl bg-[#0A0A0F] shadow-2xl overflow-hidden flex flex-col border border-white/10 animate-fade-in">
        {/* Contenido scrolleable */}
        <div className="overflow-y-auto overscroll-contain flex-1 min-h-0">
          <Header />
          <div className="relative pt-14">
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

      {/* Hint móvil */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[110] sm:hidden pointer-events-none">
        <span className="text-xs text-zinc-400">Toca fuera o X para cerrar</span>
      </div>
    </div>
  );
}
