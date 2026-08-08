const DirectorSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-background">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
      <div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">Message from Director</h2>
        <blockquote className="border-l-4 border-primary-container pl-4 italic text-on-surface-variant font-body-lg text-body-lg mb-6">
          “WE DO NOT PROMISE THE MOON, WE SHOW THE WAY” It gives us immense pleasure and a sense of pride to be a part of the noble mission of imparting quality education to children from all sections of society without prejudice and without discrimination of any Kind.
        </blockquote>
        <p className="font-label-lg text-label-lg text-on-surface font-bold">Kishor Kumar</p>
        <p className="text-sm text-on-surface-variant">(Managing Director)</p>
      </div>
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Students participating in an outdoor physical education class on a lush green campus field. Energetic atmosphere, bright sunny day, showcasing modern sports facilities."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTQOqcD1G_rn_0Xf_46HYFkcmb7vT3aa5h027DIM284GJWhn9_nN4cvi_HeBvty4ifgmTCqZy6v-tJIVbQTnNmPpg-Jy0G0OZnzR9stLB3-kloWJGjf4zYhDj1O-wZXlX1dAzYelqkVJigsG9iHT5gdNlGJgcW_aQISntFUWKFjhpZNc9bOI9FaEh87c6TqOVEUony5SZqA_Mt-wW0xFHGo6_olUiSHeIbiCFche7kd6jFadGffX2mw"
        />
      </div>
    </div>
  </section>
);

export default DirectorSection;
