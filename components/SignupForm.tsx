"use client";

import { useState, FormEvent } from "react";

const countries = [
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+51", flag: "🇵🇪", name: "Perú" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+34", flag: "🇪🇸", name: "España" },
];

export default function SignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  function formatAiLevel(value: FormDataEntryValue | null) {
    const map: Record<string, string> = {
      nivel_0: "Nivel cero (nunca la he ocupado)",
      nivel_1: "Nivel 1 (la he ocupado un par de veces de manera ocasional)",
      nivel_2: "Nivel 2 (la ocupo bastante)",
    };

    if (!value) return "No informado";
    return map[String(value)] ?? String(value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    try {
      if (formspreeId) {
        // Formspree: usar FormData (formato recomendado)
        formData.set("phone", `${selectedCountry.code} ${formData.get("phone") ?? ""}`);
        formData.append("_subject", `Nueva inscripción Reyes IA - ${formData.get("name")}`);
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          const msg = data?.errors?.map((e: { message?: string }) => e.message).join(", ") || "No se pudo enviar.";
          throw new Error(msg);
        }
      } else {
        const payload = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          countryCode: selectedCountry.code,
          work: formData.get("work"),
          aiLevel: formatAiLevel(formData.get("ai_level")),
        };
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("No se pudo enviar la inscripción.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "Hubo un error al enviar. Por favor intenta de nuevo."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="inscripcion" className="py-16 md:py-20 px-6">
        <div className="max-w-xl mx-auto glass-card rounded-3xl p-8 md:p-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 
            className="text-2xl font-bold text-green-400 mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            ¡Listo!
          </h3>
          
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Te contactaremos en menos de 24 horas para confirmar tu inscripción. 
            Una vez confirmado, te agregaremos a un grupo de WhatsApp donde coordinaremos 
            entre todos el día y horario exacto que más le acomode al grupo.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Te contactaremos por WhatsApp
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscripcion" className="py-14 md:py-20 px-4 sm:px-6 relative">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 gradient-border">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Quiero participar en las clases de marzo
          </h2>
          <p className="text-zinc-400 text-center text-sm md:text-base mb-6 sm:mb-8">
            Si ya estás seguro de participar, completa la info de abajo. 
            Te agregaremos al grupo de WhatsApp para coordinar entre todo el grupo las fechas finales en marzo!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre completo <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-zinc-600"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-zinc-600"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Teléfono / WhatsApp <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const country = countries.find(c => c.code === e.target.value);
                    if (country) setSelectedCountry(country);
                  }}
                  className="w-full sm:w-auto px-3 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-base cursor-pointer"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-zinc-600"
                  placeholder="9 1234 5678"
                />
              </div>
              <input type="hidden" name="country_code" value={selectedCountry.code} />
            </div>
            
            <div>
              <label htmlFor="work" className="block text-sm font-medium mb-2">
                ¿En qué trabajas? <span className="text-zinc-500">(opcional)</span>
              </label>
              <textarea
                id="work"
                name="work"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-zinc-600"
                placeholder="Cuéntanos brevemente a qué te dedicas..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3">
                Nivel actual de uso de IA <span className="text-zinc-500">(opcional)</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-700/50 cursor-pointer hover:border-zinc-600 transition-colors">
                  <input
                    type="radio"
                    name="ai_level"
                    value="nivel_0"
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-sm text-zinc-300">Nivel cero (nunca la he ocupado)</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-700/50 cursor-pointer hover:border-zinc-600 transition-colors">
                  <input
                    type="radio"
                    name="ai_level"
                    value="nivel_1"
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-sm text-zinc-300">Nivel 1 (la he ocupado un par de veces de manera ocasional)</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-700/50 cursor-pointer hover:border-zinc-600 transition-colors">
                  <input
                    type="radio"
                    name="ai_level"
                    value="nivel_2"
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-sm text-zinc-300">Nivel 2 (la ocupo bastante)</span>
                </label>
              </div>
            </div>
            
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {errorMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600 font-semibold text-lg glow-button disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Reservar mi cupo →"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
