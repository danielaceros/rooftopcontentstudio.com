import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Portfolio from "@/components/sections/Portfolio";
import Beneficios from "@/components/sections/Beneficios";
import Proceso from "@/components/sections/Proceso";
import QueEs from "@/components/sections/QueEs";
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
        <Portfolio desktopSlideshow={true} openVideosInModal={true} />
        <Beneficios />
        <Proceso />
        <QueEs />
        <Comparativa />
        <Tarifas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
