const BrandingHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-foreground/60"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-background animate-on-scroll">
          <h2 className="text-8xl font-light mb-8 tracking-tight">
            Branding & Design
          </h2>
          <p className="text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
            Criamos identidades visuais marcantes que conectam marcas aos seus públicos
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandingHero;