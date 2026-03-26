import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import QueEs from "@/components/sections/QueEs";
import Beneficios from "@/components/sections/Beneficios";
import Proceso from "@/components/sections/Proceso";
import VirtualTour from "@/components/sections/VirtualTour";
import Comparativa from "@/components/sections/Comparativa";
import Tarifas from "@/components/sections/Tarifas";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <QueEs />
        <Beneficios />
        <Comparativa />
        <VirtualTour />
        <Proceso />
        <Tarifas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
