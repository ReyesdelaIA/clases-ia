import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 bg-[#0A0A0F]/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Image
          src="/logoblanco.png"
          alt="Reyes I.A."
          width={132}
          height={36}
          className="h-8 sm:h-10 w-auto object-contain"
          priority
        />
        <a
          href="#inscripcion"
          className="hidden md:inline-block px-4 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
        >
          Inscríbete
        </a>
      </div>
    </header>
  );
}
