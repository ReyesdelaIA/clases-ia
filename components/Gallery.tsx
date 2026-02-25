import Image from "next/image";

const photos = [
  { src: "/handson01.png", alt: "Clases presenciales de IA" },
  { src: "/handson02.jpeg", alt: "Clase de IA en acción" },
  { src: "/handson03.jpg", alt: "Participantes en clase de IA" },
  { src: "/handson04.jpg", alt: "Sesión práctica de IA" },
];

export default function Gallery() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 
          className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Así se viven nuestras clases
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Un ambiente profesional y colaborativo para tu aprendizaje
        </p>
        
        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <div 
              key={i}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700/30 group relative"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
