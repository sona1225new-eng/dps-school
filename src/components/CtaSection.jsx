const CtaSection = () => (
  <section className="relative py-xl px-margin-mobile md:px-margin-desktop bg-[#111111] overflow-hidden text-center">
    <div className="absolute inset-0 opacity-30">
      <img
        className="w-full h-full object-cover"
        alt="A grand, traditional school library with high ceilings, tall wooden bookshelves filled with books, and students reading quietly at large wooden tables. Warm, studious atmosphere."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNNx3B1WYm4K4BO5MD-sEIKzhBsAzQoQjExE7YFXoSybXMoERXCVPWhaqzbP4qLB3cxjNSGnYaVfpbsP8I3BUR2_wlmSMQ_4s31ZO89HAzGxT5_2YMSN8FZdm5A9XJopIQ616juC2O49ssz8dKqueeS5Qq1WivIixCFE6Qym3Yjz6wDlmFxLmlAYJCatOwoNhvrlv7b2BNDvSbRJnGk_rdKt_qF2T_a3fcrJU1QtvfpbJDriKIZy36fA"
      />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="font-display-lg text-headline-xl md:text-display-lg text-white mb-8">
        Join the legacy of excellence at Darjeeling Public School, Madhepura.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary transition-colors">
          ENQUIRE NOW
        </button>
        <button className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary transition-colors">
          DOWNLOAD PROSPECTUS
        </button>
        <button className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary transition-colors">
          ADMISSION FORM
        </button>
      </div>
    </div>
  </section>
);

export default CtaSection;
