const teamMembers = [
  {
    name: "Marina Silva",
    role: "Diretora Criativa",
    speciality: "Design Gráfico & Branding",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b367?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    experience: "12 anos"
  },
  {
    name: "Carlos Mendoza", 
    role: "Especialista em Impressão",
    speciality: "Tecnologia & Produção",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    experience: "15 anos"
  },
  {
    name: "Ana Costa",
    role: "Gerente de Projetos", 
    speciality: "Estratégia & Execução",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    experience: "8 anos"
  },
  {
    name: "Roberto Santos",
    role: "Designer Sênior",
    speciality: "Editorial & Packaging", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    experience: "10 anos"
  }
];

const TeamSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              CONHEÇA NOSSA EQUIPE
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-7xl font-light text-foreground leading-tight">
                Pessoas
                <span className="text-primary block">Extraordinárias</span>
              </h2>
            </div>
            
            <div>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Nossa equipe é formada por profissionais apaixonados pela arte 
                da impressão e design, cada um trazendo anos de experiência e 
                expertise em suas especialidades.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group animate-on-scroll cursor-pointer">
              <div className="relative mb-6 overflow-hidden">
                <div className="aspect-[3/4] bg-muted/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-background/95 p-4">
                    <span className="text-xs text-primary font-medium tracking-wide block mb-1">
                      {member.experience} de experiência
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {member.speciality}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
                
                <div className="flex items-center space-x-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                  <span className="text-xs font-medium tracking-wide">CONECTAR</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll">
          <div className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
            <span className="text-sm font-medium tracking-wide">TRABALHE CONOSCO</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;