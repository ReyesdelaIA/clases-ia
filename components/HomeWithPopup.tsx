"use client";

import { useState, useEffect } from "react";
import LandingPopup from "./LandingPopup";

// Al cerrar el popup se redirige aquí. Cuando reyesia.com apunte a Netlify, funcionará directamente.
// Mientras tanto (reyesia.com en Vercel), si ya cerraron una vez, redirigimos a Netlify para evitar loop.
const SITIO_PRINCIPAL_URL = "https://reyesia.com";
const SITIO_NETLIFY_FALLBACK = "https://elaborate-kringle-066cad.netlify.app";

export default function HomeWithPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Si cerraron el popup y volvieron (p. ej. reyesia.com aún en Vercel), ir al sitio real
    if (typeof window !== "undefined" && sessionStorage.getItem("landingPopupClosed")) {
      sessionStorage.removeItem("landingPopupClosed");
      window.location.href = SITIO_NETLIFY_FALLBACK;
      return;
    }
    setShowPopup(true);
    setChecked(true);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("landingPopupClosed", "1");
    window.location.href = SITIO_PRINCIPAL_URL;
  };

  if (!checked) return null;

  return (
    <div className="relative w-full min-h-screen">
      {showPopup && <LandingPopup onClose={handleClose} />}
    </div>
  );
}
