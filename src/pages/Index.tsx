import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import BrandingHero from "@/components/BrandingHero";
import AboutStatsSection from "@/components/AboutStatsSection";
import ModernServices from "@/components/ModernServices";
import InteractivePortfolio from "@/components/InteractivePortfolio";
import QuoteSection from "@/components/QuoteSection";
import RecognitionSection from "@/components/RecognitionSection";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <BrandingHero />
      <AboutStatsSection />
      <ModernServices />
      <InteractivePortfolio />
      <QuoteSection />
      <RecognitionSection />
      <ModernContact />
    </div>
  );
};

export default Index;
