const props = [
  {
    icon: "📍",
    title: "Presencial en Santiago",
    desc: "Oficina en Vitacura",
  },
  {
    icon: "⏱",
    title: "3 sesiones × 2 horas",
    desc: "Intensivo y enfocado",
  },
  {
    icon: "👥",
    title: "Máximo 12 personas",
    desc: "Atención personalizada",
  },
  {
    icon: "💰",
    title: "$300.000 CLP",
    desc: "Programa completo",
  },
];

export default function ValueProps() {
  return (
    <section className="pt-0 pb-8 md:pt-0 md:pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {props.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-5 sm:p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
