import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AnalogySection from "@/components/AnalogySection";
import HowSection from "@/components/HowSection";
import ScoreSection from "@/components/ScoreSection";
import AudienceSection from "@/components/AudienceSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <AnalogySection />
        <HowSection />
        <ScoreSection />
        <AudienceSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
