import { Building2, Leaf, Recycle, Droplets, TreePine } from "lucide-react";

const AboutFacilities = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Excellence,
            </span>
            <br />
            Designed for Tomorrow
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Facilities */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">World-Class Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Our <span className="font-semibold text-primary">23,000m² site</span> houses 
                  a <span className="font-semibold text-primary">2,000m² production floor</span> equipped 
                  with cutting-edge technology.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">HP Indigo Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">AGFA Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Mimaki Equipment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Summa Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Canon Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facility visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 h-80">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="space-y-4">
                  <div className="h-12 bg-card/50 rounded-lg"></div>
                  <div className="h-20 bg-card/70 rounded-lg"></div>
                  <div className="h-16 bg-card/60 rounded-lg"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-16 bg-card/60 rounded-lg"></div>
                  <div className="h-24 bg-card/80 rounded-lg"></div>
                  <div className="h-12 bg-card/50 rounded-lg"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-20 bg-card/70 rounded-lg"></div>
                  <div className="h-14 bg-card/60 rounded-lg"></div>
                  <div className="h-18 bg-card/75 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-primary/20 rounded-full p-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-gradient-to-r from-green-50 to-primary/5 dark:from-green-950/20 dark:to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">Environmental Responsibility</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We take environmental responsibility seriously, ensuring our environmental impact 
              matches our quality standards through comprehensive sustainability initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-950/30 p-4 rounded-xl mb-4 inline-block">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Certified Paper Sources</h4>
              <p className="text-sm text-muted-foreground">Sustainable forestry practices</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-950/30 p-4 rounded-xl mb-4 inline-block">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Water Reuse Systems</h4>
              <p className="text-sm text-muted-foreground">Efficient water management</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-950/30 p-4 rounded-xl mb-4 inline-block">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Atlantic Forest Reforestation</h4>
              <p className="text-sm text-muted-foreground">Ecosystem restoration</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-xl mb-4 inline-block">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Waste Management</h4>
              <p className="text-sm text-muted-foreground">Comprehensive recycling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;