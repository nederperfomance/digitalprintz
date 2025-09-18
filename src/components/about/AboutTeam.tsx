import { Users, Heart, Lightbulb, Target } from "lucide-react";

const AboutTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Great Projects Begin
            </span>
            <br />
            with Great People
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of 70+ talented professionals combines craft, strategy, and precision. 
            From designers and technicians to finishing specialists, we work together bringing 
            expertise and personality to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Collaborative Spirit</h3>
                <p className="text-muted-foreground">
                  Collaboration drives our process, and quality is our signature. 
                  Every team member contributes their unique expertise to deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Creativity</h3>
                <p className="text-muted-foreground">
                  Our team constantly pushes boundaries, bringing fresh perspectives 
                  and innovative solutions to every challenge.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Precision & Excellence</h3>
                <p className="text-muted-foreground">
                  From concept to completion, every detail is meticulously crafted 
                  to exceed expectations and deliver outstanding results.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Team representation with geometric shapes */}
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg ${
                    index % 4 === 0 
                      ? 'bg-gradient-to-br from-primary/30 to-primary/10' 
                      : index % 4 === 1
                      ? 'bg-gradient-to-br from-accent/30 to-accent/10'
                      : index % 4 === 2
                      ? 'bg-gradient-to-br from-secondary/30 to-secondary/10'
                      : 'bg-gradient-to-br from-primary/20 to-accent/10'
                  } animate-pulse`}
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
            
            {/* Central highlight */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 text-center shadow-lg">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Professionals</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-primary">Collaboration drives our process, 
            and quality is our signature.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;