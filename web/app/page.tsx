import GlowingOrbBackground from "@/components/glowing-orb-background";
import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navigation from "@/components/landing/Navigation";
import Setup from "@/components/landing/Setup";
import Separator from "@/components/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans overflow-hidden">
      <GlowingOrbBackground />

      <Navigation />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        <Hero />

        <Separator />

        <Setup />

        <Separator />

        <Features />

        <CTA />
      </main>

      <Separator />

      <Footer />
    </div>
  );
}
