const EducationSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
      <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="An expansive view of a modern school building exterior with a large green lawn in front. Students are walking on pathways. Clear blue sky, impressive architectural design."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHoc6PX3Nh5jGvl3f9RHKDXdomW2YII6mPUxZkLYFP82JsuS1Wi1qK8VCnoN4XoKD-sTFz-otlHutrwk91ZRWPXOzHCsCxL49FjC-aYuKImH9U0bmuvpl-o0ib4oUK6DbnSHAlaKLwXGHNLIDLhJIuN58pY2hOCwPmU8pA_wCpEp5ToKcJ8ebdgJflc6oClSbn1qIUX0P1YTNMaZsAMgGnYyLzhW0qKqB_BEaPFrQva2HmyWdN7TU5Uw"
        />
      </div>
      <div className="order-1 lg:order-2 pl-0 lg:pl-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">Education with Purpose</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          We believe in nurturing the unique talents of every student. Our curriculum is designed to meet modern educational standards while maintaining our commitment to character building and community service.
        </p>
        <a className="inline-flex items-center text-primary-container font-label-lg text-label-lg hover:text-primary transition-colors" href="#">
          Our Mission and Vision <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
);

export default EducationSection;
