"use client";

import { useState } from "react";
import LandingPopup from "./LandingPopup";

// URL del sitio principal (subdominio apunta a Netlify; evita "rechazó la conexión")
const SITIO_PRINCIPAL_URL = "https://main.reyesia.com";

export default function HomeWithPopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Sitio principal: debajo, siempre visible o tapado por el popup */}
      <iframe
        src={SITIO_PRINCIPAL_URL}
        className="absolute inset-0 w-full h-full border-0"
        title="Reyes IA - Sitio principal"
      />
      {/* Popup encima: al cerrar solo se oculta, el sitio principal queda visible */}
      {showPopup && <LandingPopup onClose={handleClose} />}
    </div>
  );
}
