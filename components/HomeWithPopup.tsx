"use client";

import LandingPopup from "./LandingPopup";

// Redirigir al sitio principal (Netlify). main.reyesia.com tiene error SSL por ahora
const SITIO_PRINCIPAL_URL = "https://elaborate-kringle-066cad.netlify.app";

export default function HomeWithPopup() {
  const handleClose = () => {
    window.location.href = SITIO_PRINCIPAL_URL;
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0F]">
      <LandingPopup onClose={handleClose} />
    </div>
  );
}
