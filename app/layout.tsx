import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clases de IA Presenciales en Santiago | Reyes I.A.",
  description: "Aprende inteligencia artificial haciendo, no mirando. 3 sesiones presenciales intensivas en Vitacura, Santiago. Grupos reducidos de máximo 10 personas, metodología 100% hands-on. $300.000 CLP programa completo.",
  keywords: ["clases IA", "inteligencia artificial", "Santiago", "Chile", "curso IA", "ChatGPT", "capacitación"],
  authors: [{ name: "Felipe Reyes", url: "https://reyesia.com" }],
  openGraph: {
    title: "Clases de IA Presenciales | Reyes I.A.",
    description: "3 clases intensivas en Santiago. Aprende IA haciendo, no mirando. Grupos de máximo 10 personas.",
    url: "https://reyesia.com",
    siteName: "Reyes I.A.",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de IA Presenciales | Reyes I.A.",
    description: "3 clases intensivas en Santiago. Aprende IA haciendo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
