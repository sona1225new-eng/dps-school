const AchieversSection = () => {
  const achievers = [
    {
      name: 'Anjali Sharma',
      title: 'Top Academic Performer',
      description: 'Secured the highest marks in CBSE Class 10 with a perfect blend of science and humanities excellence.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=600&q=80',
    },
    {
      name: 'Rohan Singh',
      title: 'Sports Captain',
      description: 'Led the school to victory in inter-school athletics and inspired the team with outstanding leadership.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=600&q=80',
    },
    {
      name: 'Priya Kumari',
      title: 'Creative Arts Scholar',
      description: 'Awarded the state-level painting competition for her powerful visual storytelling and bold use of color.',
      image: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=600&h=600&q=80',
    },
    {
      name: 'Aditya Verma',
      title: 'Technology Innovator',
      description: 'Developed a mobile app to support peer tutoring and won the national young tech innovators award.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80',
    },
  ];

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mx-auto max-w-2xl space-y-4">
          <p className="text-primary-container text-sm font-label-md uppercase tracking-[0.28em]">
            Celebrating our leaders
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
            Our Achievers
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Meet the students whose dedication, talent and leadership are setting new standards of excellence at Darjeeling Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {achievers.map((achiever) => (
            <article
              key={achiever.name}
              className="overflow-hidden rounded-[32px] border border-outline-variant bg-surface-bright shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative w-full h-[300px] overflow-hidden bg-zinc-950">
                <img
                  className="w-full h-full object-cover"
                  src={achiever.image}
                  alt={`${achiever.name} achiever photo`}
                />
              </div>
              <div className="p-6">
                <p className="text-primary-container text-sm font-semibold uppercase tracking-[0.22em] mb-3">
                  {achiever.title}
                </p>
                <h3 className="text-white text-2xl font-semibold leading-tight mb-3">
                  {achiever.name}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {achiever.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchieversSection;
