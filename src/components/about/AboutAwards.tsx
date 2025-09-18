import { Trophy, Award, Star } from "lucide-react";

const AboutAwards = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Trophy className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute -top-2 -right-2">
                <Star className="h-6 w-6 text-accent animate-spin-slow" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proven Excellence 
            </span>
            <br />
            from Day One
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/20 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <span className="text-lg font-semibold text-primary">Fernando Pini Graphic Excellence Award</span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              In our very first participation in the Fernando Pini Graphic Excellence Award, 
              we conquered <span className="font-bold text-primary">first place in 3 categories</span> – 
              proof that innovation and excellence walk hand in hand from the start.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue evolving, shaping the future of printed communication 
              while keeping creativity at the heart of everything we do.
            </p>
          </div>
          
          {/* Stats display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1st</div>
              <div className="text-sm text-muted-foreground">First Participation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Excellence Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAwards;