const AboutStatsSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="w-full px-8 lg:px-16 max-w-7xl mx-auto">
        {/* About Text */}
        <div className="max-w-4xl mb-24 animate-on-scroll">
          <p className="text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
            Digital Printz® é uma gráfica digital premiada com sede no Brasil, 
            fundada em 2018, especializada em branding, design editorial, 
            packaging e impressão de alta qualidade. Com mais de uma década 
            de experiência combinada da equipe, a empresa oferece soluções 
            inovadoras e impactantes sob medida para uma ampla gama de 
            indústrias, incluindo corporativo, varejo e lifestyle.{" "}
            <span className="text-primary cursor-pointer hover:text-primary/80 transition-colors">
              Veja nosso trabalho ›
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Stat 1 */}
          <div className="animate-on-scroll">
            <div className="border-b border-border pb-8 mb-8">
              <h3 className="text-8xl lg:text-9xl font-light text-foreground mb-0 leading-none">
                150<span className="text-primary">+</span>
              </h3>
            </div>
            <p className="text-lg font-light text-foreground leading-relaxed">
              projetos de sucesso em 
              branding, design gráfico 
              e impressão digital de 
              alta qualidade
            </p>
          </div>

          {/* Stat 2 */}
          <div className="animate-on-scroll">
            <div className="border-b border-border pb-8 mb-8">
              <h3 className="text-8xl lg:text-9xl font-light text-foreground mb-0 leading-none">
                6
              </h3>
            </div>
            <p className="text-lg font-light text-foreground leading-relaxed">
              anos no mercado 
              aprimorando produtos 
              de design e impressão 
              para nossos clientes
            </p>
          </div>

          {/* Stat 3 */}
          <div className="animate-on-scroll">
            <div className="border-b border-border pb-8 mb-8">
              <h3 className="text-8xl lg:text-9xl font-light text-foreground mb-0 leading-none">
                9<span className="text-primary">.</span>7
              </h3>
            </div>
            <p className="text-lg font-light text-foreground leading-relaxed">
              nota média NPS* que 
              recebemos de nossos 
              clientes satisfeitos
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end mt-16 animate-on-scroll">
          <div className="bg-foreground text-background px-8 py-4 cursor-pointer hover:bg-foreground/90 transition-colors group">
            <span className="text-lg font-medium">Novo Projeto?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;