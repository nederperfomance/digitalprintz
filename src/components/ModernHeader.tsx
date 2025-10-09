import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoDigitalPrintz from "@/assets/logo-digital-printz-header.png";

const ModernHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logoDigitalPrintz} 
              alt="Digital PrintZ" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/sobre-nos" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Sobre Nós  
            </Link>
            <a href="#produtos" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Nossos Produtos
            </a>
            <Link to="/fale-conosco" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Fale Conosco
            </Link>
          </div>

          <Button 
            asChild
            variant="default" 
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
          >
            <Link to="/fale-conosco">Contato</Link>
          </Button>

          <button className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default ModernHeader;