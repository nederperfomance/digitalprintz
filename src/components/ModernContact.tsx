import { Button } from "@/components/ui/button";
import logoDigitalPrintzWhite from "@/assets/logo-digital-printz-white.png";

const ModernContact = () => {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="animate-on-scroll">
            <h2 className="text-6xl font-light mb-8 leading-tight">
              Vamos criar algo
              <br />
              <span className="text-primary">extraordinário</span>
              <span className="text-background">?</span>
            </h2>
            
            <p className="text-xl font-light text-background/70 mb-12 leading-relaxed">
              Entre em contato e descubra como podemos transformar 
              sua visão em realidade através do design e impressão.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">TELEFONE</h3>
                <p className="text-xl font-light">(11) 99999-9999</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">EMAIL</h3>
                <p className="text-xl font-light">contato@digitalprintz.com.br</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">LOCALIZAÇÃO</h3>
                <p className="text-xl font-light">São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nome"
                    className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Assunto"
                  className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea 
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-medium"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-32 pt-16 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src={logoDigitalPrintzWhite} 
              alt="Digital Printz" 
              className="h-16 w-auto mb-4 md:mb-0"
            />
            
            <div className="text-sm font-light text-background/60">
              © 2024 Digital Printz. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;