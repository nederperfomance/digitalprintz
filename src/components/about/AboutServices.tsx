import { 
  Palette, 
  Printer, 
  Maximize, 
  BookOpen, 
  Sparkles,
  CheckCircle 
} from "lucide-react";

const AboutServices = () => {
  const services = [
    {
      icon: Palette,
      title: "Pré-Impressão",
      description: "Tratamento de imagem, consultoria gráfica, mock-ups",
      features: ["Tratamento profissional de imagens", "Consultoria em design gráfico", "Mock-ups 3D e protótipos"]
    },
    {
      icon: Printer,
      title: "Impressão Digital e Offset",
      description: "Qualidade superior para projetos de qualquer complexidade",
      features: ["Impressão digital de alta resolução", "Produção offset em larga escala", "Garantia de precisão de cores"]
    },
    {
      icon: Maximize,
      title: "Grande Formato",
      description: "Gigantografias, displays, sinalização",
      features: ["Soluções de publicidade externa", "Displays e banners internos", "Sistemas de sinalização customizada"]
    },
    {
      icon: BookOpen,
      title: "Materiais",
      description: "Livros, embalagens, press kits, cartões de visita e muito mais",
      features: ["Produção customizada de livros", "Soluções premium de embalagem", "Materiais corporativos"]
    },
    {
      icon: Sparkles,
      title: "Acabamento",
      description: "Substratos premium e técnicas especializadas de acabamento",
      features: ["Opções de substrato luxuoso", "Acabamento com efeitos especiais", "Corte personalizado"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seu Parceiro Completo
            </span>
            <br />
            em Impressão
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Do conceito à conclusão, oferecemos soluções completas de impressão 
            que cobrem todos os aspectos das necessidades do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card/50 hover:bg-card/80 border border-border/20 hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="bg-primary/10 group-hover:bg-primary/20 p-4 rounded-xl inline-block transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Process flow */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nosso Processo Integrado
            </h3>
            <p className="text-muted-foreground">
              Da consulta inicial à entrega final, garantimos que cada etapa supere as expectativas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultoria", desc: "Entendendo sua visão" },
              { step: "02", title: "Design", desc: "Criando a solução perfeita" },
              { step: "03", title: "Produção", desc: "Fabricação de precisão" },
              { step: "04", title: "Controle de Qualidade", desc: "Garantindo excelência" },
              { step: "05", title: "Entrega", desc: "Conclusão no prazo" }
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;