import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ModernHeader from "@/components/ModernHeader";
import logoDigitalPrintzFooter from "@/assets/logo-digital-printz-footer.png";
import { Link } from "react-router-dom";

const Compliance = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Denúncia enviada com sucesso",
        description: "Sua comunicação foi recebida de forma anônima e sigilosa.",
      });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-background">
            DENÚNCIAS E COMPLIANCE
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Este é um canal anônimo para denúncias, reclamações e comunicações sigilosas com a Digital Printz.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm text-muted-foreground mb-4">
                Esta é uma comunicação anônima e sigilosa. *
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                className="w-full text-base"
                required
              />
            </div>

            <Button
              type="submit"
              className="bg-muted hover:bg-muted/80 text-foreground px-8 py-3 font-medium"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>

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
              <Link to="/compliance" className="hover:text-background transition-colors">
                Compliance
              </Link>
              <span className="hidden md:inline">|</span>
              <span>© 2025 Digital PrintZ. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Compliance;
