import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import StatsSection from "@/components/StatsSection";
import ModernServices from "@/components/ModernServices";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <StatsSection />
      <ModernServices />
      <ModernContact />
    </div>
  );
};

export default Index;
