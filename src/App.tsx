import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AnalogySection from "@/components/AnalogySection";
import HowSection from "@/components/HowSection";
import ScoreSection from "@/components/ScoreSection";
import AudienceSection from "@/components/AudienceSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
        <PainSection />
        <AnalogySection />
        <HowSection />
        <ScoreSection />
        <AudienceSection />
        <TrustSection />
        <CTASection onOpenModal={openModal} />
      </main>
      <Footer />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
