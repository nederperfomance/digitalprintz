import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Instagram, Globe } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="geometric-diamond w-32 h-32 top-20 right-20 opacity-20"></div>
        <div className="geometric-diamond w-24 h-24 bottom-20 left-20 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
            Ready to Transform Your Brand 
            <br />
            with Print Excellence?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in delay-200">
            Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-400">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              Get in Touch
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              View Our Portfolio
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a 
              href="tel:+5511365850550" 
              className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm opacity-80">Phone</div>
                <div className="font-semibold">+55 11 3658-5050</div>
              </div>
            </a>

            <a 
              href="https://instagram.com/digitalprintz.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm opacity-80">Instagram</div>
                <div className="font-semibold">@digitalprintz.br</div>
              </div>
            </a>

            <a 
              href="https://digitalprintz.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Globe className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm opacity-80">Website</div>
                <div className="font-semibold">digitalprintz.com.br</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

export default AboutCTA;