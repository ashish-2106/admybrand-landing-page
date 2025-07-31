import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { GlowOrbs } from "@/components/ui/floating-element";

export default function Home() {
  return (
     <div className="relative overflow-hidden">
      <GlowOrbs />
      <Navbar />
      <main className="min-h-screen bg-gradient-hero">
        <Hero />
        <div id="features" >
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
   
  );
}
