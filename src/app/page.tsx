import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMimos from "@/components/WhyMimos";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1 pb-16 md:pb-0">
        <Hero />
        <Services />
        <WhyMimos />
        <Gallery />
        <Reviews />
        <Process />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
