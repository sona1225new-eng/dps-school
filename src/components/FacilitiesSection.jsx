const FacilitiesSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
      <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A focused high school student studying on a modern laptop in a well-lit, contemporary school library. Bookshelves are visible in the blurred background. Professional, high-quality educational setting."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lcrfXdMBRw5HIRvuxUls0dlIdcG6ETQs9_Ra6aDO_-MvEqrxu1EX4bxTTDTXkCeAHdZZjo8rJe_RRvM34GiWGdbmOHfhL_YDKtgHuLdfxu3hnZRmq6vUjccSfJKf_xLHJ4NBtIxDzFGPgNCXeUy8TkZng5x_CrKY0VUB1EYD5TLoMIOLiQD8JIGzIOc6xAAheGW81Gp_lh_ErEFb86fXAoXWt0CiuU4GbvlmxHdx0_7X0UiUcP87Lg"
        />
      </div>
      <div className="order-1 lg:order-2 pl-0 lg:pl-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">DJPS AT A GLANCE</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          The School aims at providing total solutions to its students under one roof. It is a place where the social, emotional, academic & spiritual needs of its students are satisfied with almost care.
        </p>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {[
            {
              title: 'Quality Library',
              description: 'The school library is open to all bonafide students of the school. All classes are provided with at least one library period per week.'
            },
            {
              title: 'Games & Sports',
              description: 'Besides nurturing their atheletic talents,this module inculcates a healthy competition and team work in students.'
            },
            {
              title: 'Science Labs',
              description: 'Highly Updated science labs to make our student gain skill by doing science experiements to learn in a better way.'
            },
            {
              title: 'Residential Facilities',
              description: 'The residential units of DJPS ensure proper care of its students... based on the principle of ‘HOME AWAY FROM HOME’.'
            },
            {
              title: 'School Transport',
              description: 'Student can avail the school transport subject to the availability of seats.'
            },
            {
              title: 'School Clinic',
              description: 'The school clinic is looked after by a qualified doctor. Medical check up of students is done and record is maintained.'
            }
          ].map((item) => (
            <div key={item.title} className="p-4 bg-surface-container-low rounded-lg border border-outline-variant">
              <h4 className="font-label-lg text-label-lg text-on-surface mb-1">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
