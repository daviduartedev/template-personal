import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Method from "@/components/Method";
import Plans from "@/components/Plans";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Method />
      <Testimonial />
      <Plans />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
