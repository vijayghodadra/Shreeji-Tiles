import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CarouselSection from "@/components/CarouselSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Categories from "@/components/Categories";
import TileGrid from "@/components/TileGrid";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <TileGrid />
        <WhyChoose />
        <Stats />
        <CarouselSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
