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
      title: "Pre-Press",
      description: "Image treatment, graphic consulting, mock-ups",
      features: ["Professional image treatment", "Graphic design consulting", "3D mock-ups and prototypes"]
    },
    {
      icon: Printer,
      title: "Digital & Offset Printing",
      description: "Superior quality for projects of any complexity",
      features: ["High-resolution digital printing", "Large-scale offset production", "Color accuracy guarantee"]
    },
    {
      icon: Maximize,
      title: "Large Format",
      description: "Gigantographies, displays, signage",
      features: ["Outdoor advertising solutions", "Indoor displays and banners", "Custom signage systems"]
    },
    {
      icon: BookOpen,
      title: "Materials",
      description: "Books, packaging, press kits, business cards, and more",
      features: ["Custom book production", "Premium packaging solutions", "Corporate materials"]
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Premium substrates and specialized finishing techniques",
      features: ["Luxury substrate options", "Special effects finishing", "Custom die-cutting"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Complete
            </span>
            <br />
            Print Partner
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive print solutions 
            that cover every aspect of your project needs.
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
              Our Seamless Process
            </h3>
            <p className="text-muted-foreground">
              From initial consultation to final delivery, we ensure every step exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision" },
              { step: "02", title: "Design", desc: "Creating the perfect solution" },
              { step: "03", title: "Production", desc: "Precision manufacturing" },
              { step: "04", title: "Quality Control", desc: "Ensuring excellence" },
              { step: "05", title: "Delivery", desc: "On-time completion" }
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