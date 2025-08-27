import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import StatsSection from "@/components/StatsSection";
import ModernServices from "@/components/ModernServices";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <StatsSection />
      <ModernServices />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
      <ModernContact />
    </div>
  );
};

export default Index;
