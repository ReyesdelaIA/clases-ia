import Image from "next/image";

const stats = [
  { number: "+160", label: "Empresas capacitadas" },
  { number: "+3.000", label: "Personas capacitadas" },
  { number: "+8", label: "Expositor summits" },
];

const companyLogos = [
  { src: "/Copec ORIGINAL.png", alt: "Copec", width: 80 },
  { src: "/enel ORIGINAL.png", alt: "Enel", width: 70 },
  { src: "/logo falabella.png", alt: "Falabella", width: 90 },
  { src: "/logo-Coca-Cola-Embonor ia.png", alt: "Coca-Cola", width: 80 },
  { src: "/CLARO logo rojo.png", alt: "Claro", width: 70 },
  { src: "/LARRAIN logo.png", alt: "Larraín", width: 80 },
];

const highlights = [
  "+10 años cofundando empresas tech",
  "Profesor universitario de Inteligencia Artificial",
  "Mentor de startups y consultor en adopción de IA",
];

export default function About() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          ¿Quién soy?
        </h2>
        
        <div className="glass-card rounded-3xl p-5 sm:p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Foto - Columna izquierda */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-start gap-4">
              <div className="w-full max-w-[260px] sm:max-w-[280px] aspect-square rounded-2xl overflow-hidden border-2 border-zinc-700/50 relative flex-shrink-0">
                <Image
                  src="/icon.jpg"
                  alt="Felipe Reyes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 280px"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 w-full max-w-[280px]">
                <a
                  href="https://instagram.com/reyesdelaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-pink-400 hover:border-pink-400 transition-colors text-sm w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @reyesdelaia
                </a>
                <span className="text-xs text-zinc-500">✓ 11.9K+ seguidores</span>
              </div>
            </div>
            
            {/* Bio - Columna central */}
            <div className="lg:col-span-5">
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                Felipe Reyes es emprendedor tecnológico y referente en uso de Inteligencia Artificial aplicada. 
                Cofundador de LAP Global, Reyes IA y Linkka AI, combina su experiencia como profesor universitario 
                de IA con su pasión por democratizar esta tecnología. Ha capacitado a más de 3.000 personas y 
                asesorado a más de 160 empresas líderes en la implementación de soluciones de IA. Además, es 
                mentor de startups tecnológicas y conduce espacios dedicados a IA en medios, como los programas 
                &quot;Lo hice con IA&quot; (Vodcast) y &quot;Clave Morse&quot; en Radio La Clave (92.9).
              </p>
              
              <ul className="space-y-2">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-blue-400">•</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Stats y Logos - Columna derecha */}
            <div className="lg:col-span-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-5 sm:mb-6">
                {stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="bg-zinc-800/50 rounded-xl p-2.5 sm:p-3 text-center border border-zinc-700/30"
                  >
                    <span 
                      className="block text-base md:text-lg font-bold gradient-text"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {stat.number}
                    </span>
                    <span className="block text-zinc-400 text-[10px] leading-none mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Company logos */}
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30">
                <p className="text-xs text-zinc-500 mb-4 text-center">Empresas que han confiado:</p>
                <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                  {companyLogos.map((logo, i) => (
                    <div key={i} className="relative h-8 w-full flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={32}
                        className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    +150 empresas más
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
