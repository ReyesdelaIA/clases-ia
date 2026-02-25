"use client";

import { useState } from "react";

const classes = [
  {
    num: 1,
    title: "Intro al mundo IA / Uso responsable",
    topics: [
      "IA en 2026: panorama actual y tendencias",
      "3 grandes verdades para un uso de IA responsable",
      "Fundamentos de prompts efectivos",
      "Análisis de principales LLMs / para diversas industrias y profesiones",
      "Investigación avanzada con IA",
      "Redacción de documentos profesionales",
      "Deep thinking y razonamiento con IA",
      "Regulaciones, confidencialidad, ética y sesgos",
    ],
  },
  {
    num: 2,
    title: "Herramientas de IA para muchos usos",
    topics: [
      "Recap y consolidación de aprendizajes",
      "Memoria contextual y dictado inteligente",
      "Generación de PPTs con IA",
      "Revisión de diversos LLMs para usos puntuales",
      "Análisis correcto y preciso de documentos extensos con IA",
      "Creación de dashboards y otros entornos",
      "Creación de páginas web / landing page",
      "Marketing con IA: imágenes, videos, canciones, logos, mailings, entre otros",
    ],
  },
  {
    num: 3,
    title: "Uso profundo de modelos de lenguaje",
    topics: [
      "Uso aplicado de NotebookLM: tu segundo cerebro",
      "Uso de tasks (tareas recurrentes en los LLMs)",
      "Uso de conectores: OpenAI + Gmail, Microsoft, Canva, Gemini + Drive, etc.",
      "Creación de agentes repetidores de tareas: Custom GPTs, Gems y Agentes Cop.",
      "Contexto profundo para desarrollos laborales: proyectos, cuadernos, entre otros",
      "Introducción a las automatizaciones (Make, Zapier, Google AI Studio Flows), entre otros",
      "Repaso final contenido aprendido",
    ],
  },
];

export default function Program() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Programa de clases
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          6 horas de aprendizaje intensivo repartido en 3 sesiones prácticas (1 por semana)
        </p>
        
        <div className="space-y-4">
          {classes.map((c) => (
            <div
              key={c.num}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpanded(expanded === c.num ? null : c.num)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                  <span 
                    className="text-xl sm:text-2xl font-bold gradient-text"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    Clase {c.num}
                  </span>
                  <span className="font-medium text-sm sm:text-base leading-snug">{c.title}</span>
                </div>
                <span className="text-zinc-500 text-2xl ml-3 sm:ml-4 flex-shrink-0 mt-0.5 sm:mt-0">
                  {expanded === c.num ? "−" : "+"}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded === c.num ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-2 text-zinc-400 text-sm sm:text-base">
                  {c.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
