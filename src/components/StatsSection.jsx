const StatsSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest -mt-20 relative z-30 max-w-7xl mx-auto rounded-t-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {[
        { value: 'Top 5', title: 'Best CBSE Schools', subtitle: 'in Madhepura District' },
        { value: '100%', title: 'Success Rate', subtitle: 'Board Examination' },
        { value: 'A+', title: 'Quality Rating', subtitle: 'Infrastructure' },
        { value: '25:1', title: 'Student-Teacher', subtitle: 'Optimal Ratio' }
      ].map((stat) => (
        <div key={stat.value} className="p-6 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-headline-xl text-headline-xl text-primary-container mb-2">{stat.value}</h3>
          <p className="font-label-lg text-label-lg text-on-surface mb-1">{stat.title}</p>
          <p className="text-sm text-on-surface-variant">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
