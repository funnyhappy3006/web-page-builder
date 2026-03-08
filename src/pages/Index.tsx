import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";
import StatsSection from "@/components/StatsSection";
import ProposalSection from "@/components/ProposalSection";
import FooterSection from "@/components/FooterSection";
import ThemeToggle from "@/components/ThemeToggle";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <main className="bg-background">
      <ThemeToggle />
      <MusicPlayer />
      <HeroSection />
      <QuotesSection />
      <StatsSection />
      <ProposalSection />
      <FooterSection />
    </main>
  );
};

export default Index;
