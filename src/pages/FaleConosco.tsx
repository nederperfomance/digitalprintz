import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ModernHeader from "@/components/ModernHeader";
import logoDigitalPrintzFooter from "@/assets/logo-digital-printz-footer.png";

const FaleConosco = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();

  const services = [
    "Impressão Digital",
    "Design Gráfico", 
    "Branding",
    "Embalagens",
    "Material Promocional",
    "Comunicação Visual",
    "Outros"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6">
            Vamos começar um
            <br />
            <span className="text-primary font-medium">novo projeto</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Se você não encontrar o serviço que precisa, escreva para nós e 
            encontraremos uma solução juntos.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome*"
                  className="border-0 border-b border-border bg-transparent rounded-none pb-4 text-lg focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail*"
                  className="border-0 border-b border-border bg-transparent rounded-none pb-4 text-lg focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Telefone"
                className="border-0 border-b border-border bg-transparent rounded-none pb-4 text-lg focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>

            {/* Services Interest */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-foreground">
                Estou interessado em...
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedServices.includes(service)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <Textarea
                placeholder="Conte-nos sobre seu projeto..."
                rows={4}
                className="border-0 border-b border-border bg-transparent rounded-none pb-4 text-lg focus-visible:ring-0 focus-visible:border-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-full transform rotate-45 hover:rotate-0 transition-all duration-300"
              >
                <span className="transform -rotate-45">Enviar</span>
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-8 lg:px-16 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-sm bg-background">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground">(11) 3658-5050</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-sm bg-background">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground">contato@digitalprintz.com.br</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-sm bg-background">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Av. Alberto J. Byington, 1460
                <br />
                Industrial Anhanguera
                <br />
                Osasco - SP, 06276-000
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 lg:px-16 py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Transforme sua visão em
            <br />
            <span className="text-primary">realidade</span>
          </h2>
          
          <p className="text-xl font-light text-background/70 mb-8">
            Entre em contato hoje mesmo e descubra como podemos ajudar
            seu negócio a se destacar no mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-background text-background hover:bg-background hover:text-foreground px-8 py-3"
            >
              Ligar agora: (11) 3658-5050
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Enviar WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-16 py-16 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src={logoDigitalPrintzFooter} 
              alt="Digital PrintZ" 
              className="h-16 w-auto mb-4 md:mb-0"
            />
            
            <div className="text-sm font-light text-background/60">
              © 2025 Digital PrintZ. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaleConosco;