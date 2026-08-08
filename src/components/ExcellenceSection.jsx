const ExcellenceSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-background">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
      <div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">
          Learning and growing together
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          DARJEELING PUBLIC SCHOOL – a name that needs no introduction in the field of quality education, has taken a giant leap towards excellence in even the remotest part of the country. DARJEELING PUBLIC SCHOOL – is a collective effort of a few visionaries, to offer better education facility in parts of the country where development needs a boost. Quality Education goes way beyond theoretical knowledge, with emphasis on values and skills that help young minds evolve into better individuals an this is our ultimate objective.
        </p>
        <ul className="space-y-sm mb-8">
          {[
            'Advanced Science & Math Labs',
            'Holistic Development Programs',
            'Digital Classroom Integration'
          ].map((item) => (
            <li key={item} className="flex items-center text-on-surface">
              <span className="material-symbols-outlined text-primary-container mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-[#111111] text-white px-6 py-3 rounded-lg font-label-lg text-label-lg hover:bg-gray-800 transition-colors">
          Learn More About Us
        </button>
      </div>
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A diverse group of middle school students engaged in a collaborative science experiment in a bright, modern laboratory setting, wearing neat school uniforms. Warm natural light illuminates the room."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-QIiQ-kr1rgws4UwVnTC2BDeyr3vtcquuv14MiCB7qelIKg84TrJWWxI9OLha31RKtLl-j_Bwjar99JJ4dUTh4OOPzEw0tYeAFP9zx1rabkxinmCdAqZaxkAr2rc12Kc-fKI1ezRaHz5WF5FJyGcxkB3bMSkEL6gjhlueEm4v6mDUvaQ8KJsNLNH4FFSivKGfakaY3S9huOEWvhCD_clRklzPJo081g9Mvf5CXzQBMsMW4KEWG9yAzg"
        />
      </div>
    </div>
  </section>
);

export default ExcellenceSection;
