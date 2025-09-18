import { Button } from "@/components/ui/button";

const ModernHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-light tracking-tight">
              <span className="text-foreground">DIGITAL</span>
              <span className="text-primary">.</span>
              <span className="text-foreground">PRINTZ</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#sobre" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Sobre Nós  
            </a>
            <a href="#produtos" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Nossos Produtos
            </a>
            <a href="#contato" className="text-sm font-light text-foreground hover:text-primary transition-colors">
              Fale Conosco
            </a>
          </div>

          <Button 
            variant="default" 
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
          >
            Contato
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