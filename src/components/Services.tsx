import { Card, CardContent } from "@/components/ui/card";
import { Printer, Palette, Package, Zap } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Impressão Digital",
    description: "Alta qualidade em todos os tipos de materiais com tecnologia de ponta."
  },
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Criação visual inovadora que comunica sua marca de forma única."
  },
  {
    icon: Package,
    title: "Encadernação",
    description: "Acabamentos perfeitos para seus projetos editoriais e corporativos."
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Prazos otimizados sem comprometer a qualidade do resultado final."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em impressão e design para todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card hover:bg-primary/5">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;