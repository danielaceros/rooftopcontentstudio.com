import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QueEs from "@/components/sections/QueEs";
import Beneficios from "@/components/sections/Beneficios";
import Proceso from "@/components/sections/Proceso";
import Tarifas from "@/components/sections/Tarifas";
import Ubicacion from "@/components/sections/Ubicacion";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <Beneficios />
        <Proceso />
        <Tarifas />
        <Ubicacion />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
