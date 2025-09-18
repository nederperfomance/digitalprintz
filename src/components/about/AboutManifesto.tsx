const AboutManifesto = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Somos a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Printz
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma gráfica de excelência e abordagem não convencional.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Queremos oferecer inovação, tecnologia e resultados sem limitações 
              aos nossos clientes. Nosso propósito não é apenas executar suas demandas, mas 
              ouvir, analisar e entregar o que você espera com qualidade excepcional.
            </p>
          </div>
          
          <div className="relative">
            {/* Print-inspired graphics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg animate-pulse"></div>
                <div className="h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-lg"></div>
                <div className="h-20 bg-gradient-to-br from-secondary/30 to-secondary/5 rounded-lg animate-pulse delay-500"></div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="h-28 bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg"></div>
                <div className="h-36 bg-gradient-to-br from-accent/30 to-primary/5 rounded-lg animate-pulse delay-300"></div>
                <div className="h-24 bg-gradient-to-br from-primary/25 to-transparent rounded-lg"></div>
              </div>
              <div className="space-y-4 pt-3">
                <div className="h-32 bg-gradient-to-br from-secondary/25 to-primary/10 rounded-lg animate-pulse delay-700"></div>
                <div className="h-20 bg-gradient-to-br from-primary/30 to-accent/5 rounded-lg"></div>
                <div className="h-28 bg-gradient-to-br from-accent/20 to-transparent rounded-lg animate-pulse delay-200"></div>
              </div>
            </div>
            
            {/* Geometric patterns */}
            <div className="absolute -top-8 -right-8 w-20 h-20 border-4 border-primary/20 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;