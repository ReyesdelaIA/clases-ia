const items = [
  {
    icon: "👥",
    title: "Grupos reducidos",
    desc: "Máximo 12 personas por sesión para atención personalizada",
  },
  {
    icon: "🛠",
    title: "Práctica aplicada",
    desc: "Metodología hands-on: aprendes haciendo, no solo mirando",
  },
  {
    icon: "💬",
    title: "Feedback directo",
    desc: "Resolvemos tus dudas en tiempo real durante cada clase",
  },
  {
    icon: "🤝",
    title: "Networking",
    desc: "Conecta con otros profesionales interesados en IA (grupo WhatsApp activo)",
  },
  {
    icon: "📚",
    title: "Material incluido",
    desc: "Acceso a recursos, presentaciones vistas, guías y materiales del curso",
  },
  {
    icon: "✨",
    title: "Para todos los niveles",
    desc: "Tanto si partes desde cero como si ya usas IA y quieres profundizar",
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          ¿Por qué estas clases?
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Una experiencia de aprendizaje diseñada para profesionales que quieren resultados reales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 group">
              <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div>
                <h3 
                  className="font-semibold mb-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
