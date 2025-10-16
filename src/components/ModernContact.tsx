import { Button } from "@/components/ui/button";
import logoDigitalPrintzFooter from "@/assets/logo-digital-printz-footer.png";

const ModernContact = () => {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="animate-on-scroll">
            <h2 className="text-6xl font-light mb-8 leading-tight">
              Vamos criar algo
              <br />
              <span style={{ color: 'hsl(108 100% 35%)' }}>extraordinário</span>
              <span className="text-background">?</span>
            </h2>
            
            <p className="text-xl font-light text-background/70 mb-12 leading-relaxed">
              Entre em contato e descubra como podemos transformar 
              sua visão em realidade através do design e impressão.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">TELEFONE</h3>
                <p className="text-xl font-light">(11) 3658-5050</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">WHATSAPP</h3>
                <a 
                  href="https://wa.me/5511912380954" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-light hover:text-background/80 transition-colors"
                >
                  (11) 91238-0954
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">EMAIL</h3>
                <p className="text-xl font-light">contato@digitalprintz.com.br</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-background/60 tracking-widest mb-2">ENDEREÇO</h3>
                <p className="text-xl font-light">Av. Alberto J. Byington, 1460<br />Industrial Anhanguera<br />Osasco - SP, 06276-000</p>
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
                    className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-background/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-background/60 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Assunto"
                  className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-background/60 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea 
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full bg-transparent border-0 border-b border-background/30 pb-4 text-background placeholder-background/50 focus:border-background/60 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                style={{ backgroundColor: 'hsl(108 100% 35%)', color: 'hsl(0 0% 98%)' }}
                className="hover:opacity-90 px-8 py-3 font-medium transition-opacity"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-32 pt-16 border-t border-background/20">
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
      </div>
    </section>
  );
};

export default ModernContact;