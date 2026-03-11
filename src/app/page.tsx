import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ClientLogos from "@/components/sections/ClientLogos";
import Portfolio from "@/components/sections/Portfolio";
import Beneficios from "@/components/sections/Beneficios";
import QueEs from "@/components/sections/QueEs";
import Proceso from "@/components/sections/Proceso";
import Tarifas from "@/components/sections/Tarifas";
import FAQ from "@/components/sections/FAQ";
import Ubicacion from "@/components/sections/Ubicacion";
import VideoFinal from "@/components/sections/VideoFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <Portfolio desktopSlideshow={true} openVideosInModal={true} />
        <Beneficios />
        <QueEs />
        <Proceso />
        <Tarifas />
        <FAQ />
        <Ubicacion />
        <VideoFinal />
      </main>
      <Footer />
    </>
  );
}
