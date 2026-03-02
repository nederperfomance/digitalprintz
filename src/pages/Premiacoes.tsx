import { useEffect } from "react";
import { Link } from "react-router-dom";
import ModernHeader from "@/components/ModernHeader";
import { Button } from "@/components/ui/button";
import logoDigitalPrintzFooter from "@/assets/logo-digital-printz-footer.png";

const awards = [
  {
    image: "/images/premio-granado.jpg",
    name: "Relatório Socioambiental Granado 2022",
    prize: "31º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "Granado",
    description: "Relatório institucional com estrutura vazada especial, faca personalizada e combinação de camadas impressas com alta fidelidade cromática e acabamento premium.",
  },
  {
    image: "/images/premio-john-deere.jpg",
    name: "Kit John Deere",
    prize: "30º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "John Deere",
    description: "Kit promocional com caixa rígida estruturada, impressão com efeito luminoso e controle técnico de preto profundo.",
  },
  {
    image: "/images/premio-mandarin.jpg",
    name: "Mandarin The Legend",
    prize: "31º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "",
    description: "Livro caixa premium com acabamento fosco sofisticado, hot stamping metálico e estrutura rígida de alto padrão.",
  },
  {
    image: "/images/premio-book-f1.jpg",
    name: "Book F1 São Paulo 2022",
    prize: "5º Prêmio Paulista de Excelência Gráfica 2024",
    client: "Fórmula 1 – Grande Prêmio de São Paulo",
    description: "Livro comemorativo com aplicação de hot stamping metálico, relevos precisos e acabamento editorial de luxo.",
  },
  {
    image: "/images/premio-farm-rio.jpg",
    name: "Sacola Seeding Farm Rio",
    prize: "5º Prêmio Paulista de Excelência Gráfica 2024",
    client: "Farm Rio",
    description: "Sacola promocional com impressão artística de alta saturação, reforço estrutural e acabamento premium.",
  },
  {
    image: "/images/premio-listerine.jpg",
    name: "Listerine – Caixa Influenciadores",
    prize: "5º Prêmio Paulista de Excelência Gráfica 2024",
    client: "HH Global Brasil",
    description: "Embalagem semirrígida com efeitos gráficos especiais, estrutura diferenciada com elástico integrado ao design.",
  },
  {
    image: "/images/premio-rodenstock.jpg",
    name: "Caixa Mostruário Rodenstock",
    prize: "5º Prêmio Paulista de Excelência Gráfica 2024",
    client: "Rodenstock",
    description: "Caixa display vertical com acabamento clean, aplicação de verniz seletivo e construção estruturada.",
  },
  {
    image: "/images/premio-qsf.jpg",
    name: "Manual do Ano 2020 – QSF",
    prize: "30º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "QSF Bebidas Ltda",
    description: "Livro caixa com hot stamping verde, verniz localizado e composição gráfica geométrica de alto impacto.",
  },
  {
    image: "/images/premio-press-kit-qsf.jpg",
    name: "Press Kit QSF",
    prize: "5º Prêmio Paulista de Excelência Gráfica 2024 e 32º Prêmio Fernando Pini",
    client: "QSF",
    description: "Kit promocional criativo com arte urbana vibrante, caixa estruturada com acabamento diferenciado e identidade visual marcante.",
  },
  {
    image: "/images/premio-duratex.jpg",
    name: "Display Duratex",
    prize: "6º Prêmio Paulista de Excelência Gráfica Luiz Metzler 2025",
    client: "Duratex",
    description: "Display mostruário com maleta estruturada em formato diferenciado, efeitos gráficos especiais e acabamento premium.",
  },
  {
    image: "/images/premio-havaianas.jpg",
    name: "Book Havaianas 60 Anos",
    prize: "31º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "Alpargatas S.A.",
    description: "Livro comemorativo com capa texturizada, impressão vibrante de alta saturação e acabamento editorial premium.",
  },
  {
    image: "/images/premio-axe-amor-amem.jpg",
    name: "Livro Axé Amor Amém",
    prize: "32º Prêmio Brasileiro de Excelência Gráfica Fernando Pini",
    client: "Editora Afluente",
    description: "Livro com formato especial, impressão em alta saturação cromática, acabamento artístico e encadernação diferenciada.",
  },
];

const Premiacoes = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 overflow-hidden bg-foreground">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Green accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

        <div className="relative w-full px-8 lg:px-16">
          <div className="max-w-5xl">
            <div className="flex items-center space-x-4 mb-8 animate-on-scroll">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm font-light text-background/50 tracking-widest uppercase">
                Premiações
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-background leading-[0.95] mb-8 animate-on-scroll">
              Reconhecimento que
              <span className="text-primary block">imprime excelência</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-background/60 leading-relaxed max-w-3xl animate-on-scroll">
              A Digital Printz é reconhecida nacionalmente pelos principais prêmios da indústria gráfica brasileira, destacando projetos de alta complexidade técnica, acabamento premium e inovação estrutural.
            </p>

          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-32 bg-background">
        <div className="w-full px-8 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="animate-on-scroll group bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {award.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-primary">
                      {award.prize}
                    </span>
                  </div>
                  {award.client && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Cliente:</span> {award.client}
                    </p>
                  )}
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Collage */}
      <section className="bg-background">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/images/colagem-1.jpg", alt: "Livro Caixa QSF com troféu Fernando Pini" },
            { src: "/images/colagem-2.jpg", alt: "Sacola Seeding Farm Rio com troféu Paulista" },
            { src: "/images/colagem-3.jpg", alt: "Cartão de Visita Digital Printz com troféu Pini" },
            { src: "/images/colagem-4.jpg", alt: "Troféu 6º Prêmio Paulista Luiz Metzler 2025" },
          ].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-foreground">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm font-light text-background/50 tracking-widest uppercase">
                Autoridade
              </span>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-light text-background leading-tight mb-8">
              Excelência reconhecida
              <span className="text-primary block">pela indústria</span>
            </h2>

            <p className="text-lg font-light text-background/60 leading-relaxed mb-12 max-w-2xl mx-auto">
              Cada prêmio conquistado reforça nosso compromisso com inovação, precisão técnica e acabamento superior. Na Digital Printz, cada projeto é desenvolvido com padrão de excelência gráfica reconhecido nacionalmente.
            </p>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 text-base">
              <Link to="/fale-conosco">Solicitar um projeto premiado</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-16 py-16 bg-foreground border-t border-background/10 text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img
              src={logoDigitalPrintzFooter}
              alt="Digital PrintZ"
              className="h-16 w-auto"
            />
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light text-background/60">
              <a href="/compliance" className="hover:opacity-80 transition-opacity text-base font-bold text-primary">
                Denúncias e Compliance
              </a>
              <span className="hidden md:inline">|</span>
              <span>© 2025 Digital PrintZ. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Premiacoes;
