"use client";

import LandingPopup from "./LandingPopup";

// Al cerrar el popup, redirigir al sitio principal (main.reyesia.com = Netlify)
const SITIO_PRINCIPAL_URL = "https://main.reyesia.com";

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
