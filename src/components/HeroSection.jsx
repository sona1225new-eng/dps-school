const HeroSection = ({ heroSlides, currentSlide }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((src, index) => (
          <div
            key={src}
            className={`hero-slide absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center">
        <p className="text-primary-container font-label-lg text-label-lg uppercase tracking-widest mb-4">
          Nurturing Excellence Since 2004
        </p>
        <h1 className="text-white font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mb-8 leading-tight">
          Welcome to Darjeeling Public School, Madhepura
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/admission.html"
            className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Admission Open
          </a>
          <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
            Explore Campus
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
