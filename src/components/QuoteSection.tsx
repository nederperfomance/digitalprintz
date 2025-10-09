const QuoteSection = () => {
  return <section className="min-h-screen bg-background flex items-center justify-center py-32">
      <div className="w-full px-8 lg:px-16 max-w-7xl">
        <div className="text-center animate-on-scroll">
          {/* Quote Marks */}
          <div className="mb-12">
            <svg className="w-16 h-16 lg:w-24 lg:h-24 text-primary/20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>

          {/* Main Quote */}
          <div className="space-y-8">
            <h2 className="text-giant text-foreground">
              Cada projeto é uma
              <br />
              <span className="text-primary">obra de arte</span>
              <br />
              que conta sua história
            </h2>
            
            <p className="text-xl lg:text-2xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Na Digital PrintZ, transformamos ideias em realidade através do design 
              e da impressão de alta qualidade, criando experiências visuais que 
              conectam marcas aos seus públicos.
            </p>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>;
};
export default QuoteSection;