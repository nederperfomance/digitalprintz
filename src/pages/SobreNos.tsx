import ModernHeader from "@/components/ModernHeader";
import AboutHero from "@/components/about/AboutHero";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutAwards from "@/components/about/AboutAwards";
import AboutTeam from "@/components/about/AboutTeam";
import AboutFacilities from "@/components/about/AboutFacilities";
import AboutClients from "@/components/about/AboutClients";
import AboutServices from "@/components/about/AboutServices";
import AboutCTA from "@/components/about/AboutCTA";

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <main>
        <AboutHero />
        <AboutManifesto />
        <AboutAwards />
        <AboutTeam />
        <AboutFacilities />
        <AboutClients />
        <AboutServices />
        <AboutCTA />
      </main>
    </div>
  );
};

export default SobreNos;