"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito experiencia previa en IA?",
    a: "Para nada. Las clases están diseñadas para que puedas partir desde cero, pero si ya tienes experiencia con IA, igual vas a sacarle el jugo — y mucho. En cada grupo nos ha pasado que conviven personas que nunca han usado IA con otras que ya llevan un tiempo, y todos terminan mejorando su forma de aplicarla en el trabajo.",
  },
  {
    q: "¿Qué necesito llevar a las clases?",
    a: "Solo tu notebook (laptop) con conexión a internet. Nosotros te guiamos con todo lo demás durante las sesiones.",
  },
  {
    q: "¿Necesito licencias o suscripciones de IA?",
    a: "No. Trabajamos con versiones gratuitas y de prueba de las herramientas. Si ya tienes alguna suscripción, también la aprovechamos.",
  },
  {
    q: "¿Dónde se realizan las clases?",
    a: "En las oficinas de PC Factory (sponsor de Reyes IA) ubicadas en Vitacura. Te enviaremos la dirección exacta una vez confirmada tu inscripción.",
  },
  {
    q: "¿Cuánto cuesta el programa completo?",
    a: "$300.000 CLP por persona. Esto incluye las 3 sesiones de 2 horas cada una (6 horas totales), todo el material del curso y acceso al grupo de WhatsApp para seguimiento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Preguntas frecuentes
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base text-center mb-8 sm:mb-12">
          Respuestas a las dudas más comunes
        </p>
        
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base pr-4">{item.q}</span>
                <span className="text-zinc-500 text-xl flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-4 sm:px-6 pb-4 text-zinc-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
