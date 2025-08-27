import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos criar juntos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Faça seu orçamento
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Seu nome" />
                <Input placeholder="Seu e-mail" type="email" />
              </div>
              
              <Input placeholder="Assunto" />
              
              <Textarea 
                placeholder="Descreva seu projeto..."
                rows={6}
              />
              
              <Button size="lg" className="w-full md:w-auto">
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Informações de contato
            </h3>
            
            <div className="space-y-6">
              <Card className="border-0 bg-card hover:bg-primary/5 transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 9999-9999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card hover:bg-primary/5 transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">contato@digitalprintz.com.br</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card hover:bg-primary/5 transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">São Paulo, SP</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;