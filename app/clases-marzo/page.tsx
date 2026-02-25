import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Program from "@/components/Program";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import SignupForm from "@/components/SignupForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ClasesMarzoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <Program />
      <WhyUs />
      <Gallery />
      <About />
      <SignupForm />
      <FAQ />
      <Footer />
    </main>
  );
}
