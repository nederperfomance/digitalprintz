import backgroundImg from '@/assets/background-section.png';

const BrandingHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImg}')`
        }}
      >
        <div className="absolute inset-0 bg-foreground/60"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-background animate-on-scroll">
          <h2 className="text-8xl font-light mb-8 tracking-tight">
            Uma gráfica não convencional, de criação sem barreiras
          </h2>
          <p className="text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
            Criamos projetos marcantes que conectam marcas aos seus públicos, oferecendo inovação, tecnologia e resultados aos nossos clientes. Nosso propósito não é apenas executar suas demandas, mas ouvir, analisar e entregar o que você espera com qualidade excepcional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandingHero;