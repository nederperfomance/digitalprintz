import ModernHeader from "@/components/ModernHeader";
import AboutHero from "@/components/about/AboutHero";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutAwards from "@/components/about/AboutAwards";
import AboutTeam from "@/components/about/AboutTeam";
import AboutFacilities from "@/components/about/AboutFacilities";
import AboutClients from "@/components/about/AboutClients";
import AboutServices from "@/components/about/AboutServices";
import AboutCTA from "@/components/about/AboutCTA";
import logoDigitalPrintzFooter from "@/assets/logo-digital-printz-footer.png";

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
      
      {/* Footer */}
      <footer className="px-8 lg:px-16 py-16 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img 
              src={logoDigitalPrintzFooter} 
              alt="Digital PrintZ" 
              className="h-16 w-auto"
            />
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light text-background/60">
              <a href="/compliance" className="hover:text-background transition-colors">
                Compliance
              </a>
              <span className="hidden md:inline">|</span>
              <span>© 2025 Digital PrintZ. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SobreNos;