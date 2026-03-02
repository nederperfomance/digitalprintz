import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const recognitions = [
  {
    category: "Fernando Pini (ABIGRAF Nacional)",
    items: [
      "Vencedor Nacional – Melhor Livro Institucional Book Torre – Cyrela / AMAP (2023)",
      "Vencedor Nacional – Relatório Socioambiental Granado Pharmácias (2023)",
      "Vencedor Nacional – Kit Promocional Press Kit QSF – Venko (2024)",
      "Vencedor Nacional – Kit John Deere (2022)",
      "Vencedor Nacional – Cartão de Visita Digital Printz (2022)"
    ]
  },
  {
    category: "Prêmio Paulista Luiz Metzler (ABIGRAF-SP)",
    items: [
      "Vencedor Paulista – Book Youniverse Studio (2025)",
      "Vencedor Paulista – Display Duratex (2025)",
      "Vencedor Paulista – Caixa Mostruário Rodenstock (2024)",
      "Vencedor Paulista – Press Kit QSF (2024)"
    ]
  }
];

const awardImages = [
  "/images/premio-showcase-1.jpg",
  "/images/premio-showcase-2.jpg",
  "/images/premio-showcase-3.jpg",
  "/images/premio-showcase-4.jpg",
  "/images/premio-showcase-5.jpg",
  "/images/premio-showcase-6.jpg",
  "/images/premio-showcase-7.jpg",
  "/images/premio-showcase-8.jpg",
  "/images/premio-showcase-9.jpg",
  "/images/premio-showcase-10.jpg",
];

const RecognitionSection = () => {
  return (
    <section className="py-32 bg-card overflow-hidden">
      <div className="w-full px-8 lg:px-16 mb-20">
        {/* Header */}
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              RECONHECIMENTO & PREMIAÇÕES
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-7xl font-light text-foreground leading-tight">
                Nossa
                <span className="text-primary block">Excelência</span>
              </h2>
            </div>
            
            <div>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Reconhecidos pela qualidade e inovação em design, nossa trajetória 
                é marcada por prêmios e destaque no mercado gráfico brasileiro.
              </p>
            </div>
          </div>
        </div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
          {recognitions.map((recognition, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <div className="space-y-8">
                {/* Category Header */}
                <div className="pb-6 border-b border-border">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {recognition.category}
                  </h3>
                </div>

                {/* Recognition Items */}
                <div className="space-y-6">
                  {recognition.items.map((item, itemIndex) => {
                    // Format text to make "Vencedor Nacional" and "Vencedor Paulista" bold
                    const formattedItem = item
                      .replace(/(Vencedor Nacional)/g, '<strong>$1</strong>')
                      .replace(/(Vencedor Paulista)/g, '<strong>$1</strong>');
                    
                    return (
                      <div 
                        key={itemIndex}
                        className="group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p 
                            className="text-base font-normal text-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formattedItem }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel - Full Width */}
      <div className="w-full animate-on-scroll">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {awardImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-[400px] w-full">
                  <Card className="rounded-none border-none shadow-none h-full">
                    <CardContent className="flex h-full items-center justify-center p-0 overflow-hidden rounded-2xl mx-2 shadow-lg">
                      <img 
                        src={image} 
                        alt={`Premiação Digital Printz ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="w-full px-8 lg:px-16 mt-20">
        {/* Bottom Text + CTA */}
        <div className="text-center animate-on-scroll max-w-4xl mx-auto space-y-8">
          <p className="text-lg font-light text-muted-foreground leading-relaxed">
            Cada conquista reforça nosso compromisso com a excelência gráfica e a criatividade que movem a Digital Printz.
          </p>
          <Button asChild size="lg" className="rounded-full px-10">
            <Link to="/premiacoes">Veja todos nossos prêmios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;