import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Portfolio from "@/components/sections/Portfolio";
import Beneficios from "@/components/sections/Beneficios";
import Proceso from "@/components/sections/Proceso";
import QueEs from "@/components/sections/QueEs";
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
        <Beneficios />
        <VirtualTour />
        <Comparativa />
        <Portfolio desktopSlideshow={true} openVideosInModal={true} />
        <Proceso />
        <Tarifas />
        <QueEs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
