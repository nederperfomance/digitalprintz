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
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6">
            CANAL DE <span className="text-background">COMPLIANCE</span>
          </h1>
          <p className="text-lg md:text-xl text-background/90 font-light">
            Promovendo um ambiente ético, íntegro, justo e saudável
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-8 lg:px-16 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            A <strong>DIGITAL PRINTZ</strong> conta com a sua colaboração na promoção de um ambiente ético, íntegro, justo e saudável. 
            Sendo assim, caso presencie ou suspeite de alguma violação às normas do Código de Conduta Empresarial, converse com o 
            seu Líder ou com o responsável pela área de Compliance.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="px-8 lg:px-16 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Canal de Denúncia
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Disponibilizamos o nosso Canal de Denúncia, acessível a todos os nossos colaboradores, terceiros, fornecedores, 
            prestadores de serviços, clientes e público externo, através dos seguintes meios:
          </p>
          
          <div className="bg-background border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-lg">
                  <strong>E-mail:</strong>{" "}
                  <a 
                    href="mailto:compliance@digitalprintz.com.br" 
                    className="text-primary hover:underline font-medium"
                  >
                    compliance@digitalprintz.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p className="text-base text-foreground/70 leading-relaxed italic mb-6">
            O Canal de Denúncia possui acesso restrito para a tratativa dos relatos de forma sigilosa, segura, e, se desejada, anônima. 
            As informações registradas no canal de denúncia serão recebidas por uma empresa independente e especializada, assegurando 
            sigilo absoluto e o tratamento adequado de cada situação.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-8 lg:px-16 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Formulário de Denúncia
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            Utilize o formulário abaixo para registrar sua denúncia de forma anônima e sigilosa.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Descreva a situação que deseja reportar *
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={12}
                className="w-full text-base"
                placeholder="Descreva detalhadamente a situação, incluindo datas, locais e pessoas envolvidas, se possível."
                required
              />
              <p className="text-xs text-muted-foreground mt-2">
                Esta comunicação será tratada de forma confidencial e anônima.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="px-12"
            >
              Enviar Denúncia
            </Button>
          </form>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="px-8 lg:px-16 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-background border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Política Contra Retaliação
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              A <strong>DIGITAL PRINTZ</strong> proíbe rigorosamente qualquer represália ou retaliação contra o denunciante ou 
              qualquer pessoa externa que relate uma conduta que viole as normas deste Código ao fazer uma denúncia de boa-fé 
              ou cooperando com as investigações da empresa.
            </p>
          </div>

          <div className="bg-background border-l-4 border-destructive p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Aviso Legal
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Reiteramos que a violação de qualquer conduta ou prática contida nesse Código, inclusive aquela inverídica, 
              direcionada para prejudicar inocente, estará sujeita à aplicação das leis vigentes no Brasil.
            </p>
          </div>
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
              <Link to="/compliance" className="hover:opacity-80 transition-opacity text-base font-bold text-primary">
                Denúncias e Compliance
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
