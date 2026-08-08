const FutureSection = () => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-background">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Shape Your Child's Future.</h2>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-sm">
      <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-center row-span-2">
        <h3 className="font-display-lg text-display-lg mb-4">98%</h3>
        <p className="font-body-lg text-body-lg">Parent satisfaction rate for child growth and academic progress.</p>
      </div>
      {[
        {
          alt: 'A smiling student actively participating in a classroom discussion, raising hand. Bright, modern classroom setting, encouraging learning environment.',
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHbh1Gb4PYefclfW75wtBw5UdN3Ia5_cN3aKfS3k7I4LAXvuf3yj041gKWloOidijRemRgy5rLKTRJXSg5qTesi8sw0Iz_u6B3qDqrYKc-48008YYshgHJ2zeIW-7yBxngQJfxsc--lM8sRvFYBarwfNd-n1VI8r-QtCcwowVA_7qKGguQNnnBXaAMa6xHUkqfCHoptWIyjyE3FUpjap0PDiCk_h4wKu9IB4WOLiByMN0zYBZexKMg-w'
        },
        {
          alt: 'Two students collaborating on an art project in a creative studio space. Colorful paints and materials scattered around, showcasing creative arts education.',
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuircc25Ik7lIU9_EwyPPNOWQWN25tABqCsMr_dFhZBVrlUASZjFHF1-hBhYDsJu4IfGnn22ipKTMn0ImuY3CrXqdDToLs0lGE6mX8VmCQUXPVc-kUNsvb7Vl_Hi61GiG8aGelHQLpEfpgKbTXxKPd70B8os3JGmem1yX0PTCi2nWD_I_zjg1t_pIMnNdOfdVJGNFtqB-mfTS3X-fm12G_z5Yz8wQfvb45MVskZPuvxHvmO-SbjRl6pQ'
        },
        {
          alt: 'A teacher assisting a young student with a tablet device in a digital learning lab. Technology integration in education, modern tools.',
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRKDaSokkMy9vXXRu92ZzPecEN-D0h4IdORnQ-iES3ViZwWjhx_O_GLUmu25jR2MOQ1vj3wVhw0jegWl_QZyORw6IDtGeSOzNzqwRNfl6D_AZimcw11HBm0jYBFQyY7x-Iz7fg-x9lOVSoOHJOp8z51NwQUHij7p9BGJ1v3u9DotuTU6XTcKQLsKzoK3IAQ6rKyL9sSxlf_xMQ63DlfJwo-Jjx3Av6yaRyqVKalEA_f5Fs2OYkVaMntw'
        },
        {
          alt: 'Students performing a play on a school stage with dramatic lighting. Extracurricular activities, confidence building through performing arts.',
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA3mJKpGZFvUwGK6pRuvg5ajLZ7Gw_xCUin8xtNH7qi8WHDcdjcWLhpfOwqpS7QO7FGNFE1KGCaj2a68UMPbL_A6LhgTjxHZ7j6IATOCNeWlBIMd39pFXG1KVOKMjTkyvpyL1jOnkno1YcwKT2obVnZTwwDyPUQrHDkmuRrpEyBjQ1RcAVQnyTi-s2FtLjmiJytCo3Rtehe-wUbNLFzz3GRDi5BugGBp0KyRmZzANS8fWDPCI0BBYdww'
        }
      ].map((item) => (
        <div key={item.src} className="h-64 rounded-xl overflow-hidden shadow-sm">
          <img className="w-full h-full object-cover" alt={item.alt} src={item.src} />
        </div>
      ))}
    </div>
  </section>
);

export default FutureSection;
