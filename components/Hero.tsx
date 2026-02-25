"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("inscripcion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[68vh] sm:min-h-[64vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-2 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#12121A] to-[#0A0A0F]" />
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-[100px] md:blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-violet-500/15 rounded-full blur-[100px] md:blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-[22rem] sm:max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-3 sm:px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-xs sm:text-sm text-amber-400 mb-6 sm:mb-8 animate-fade-in">
          🔥 Cupos limitados — Marzo 2026
        </span>
        
        {/* Headline */}
        <h1 
          className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] sm:leading-tight mb-5 sm:mb-6 animate-fade-in-delay-1"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Aprende IA haciendo,{" "}
          <span className="gradient-text">
            no mirando
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-xl leading-relaxed text-zinc-400 max-w-[21rem] sm:max-w-2xl mx-auto mb-4 sm:mb-5 animate-fade-in-delay-2">
          3 clases presenciales intensivas en Santiago, con metodología Hands-On (aprenderás haciendo). Grupos personalizados. Vas a salir usando IA para tu día a día laboral.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600 rounded-xl font-semibold text-sm sm:text-lg text-white glow-button animate-pulse-glow animate-fade-in-delay-3 cursor-pointer"
        >
          Quiero participar en las clases de marzo →
        </button>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
