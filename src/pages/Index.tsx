import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import BrandingHero from "@/components/BrandingHero";
import StatsSection from "@/components/StatsSection";
import ModernServices from "@/components/ModernServices";
import VideoSection from "@/components/VideoSection";
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
      <StatsSection />
      <ModernServices />
      <VideoSection />
      <InteractivePortfolio />
      <QuoteSection />
      <RecognitionSection />
      <ModernContact />
    </div>
  );
};

export default Index;
