const NewsNoticesSection = ({ notices, news, openModal }) => (
  <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto grid gap-lg lg:grid-cols-2 items-stretch">
      <div className="flex flex-col gap-6 rounded-3xl border border-outline-variant bg-surface-bright p-6 h-full">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-headline-md text-headline-md text-on-background">School News</h2>
          <button
            onClick={() => openModal('newsModal')}
            className="text-primary-container font-label-md text-sm hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            VIEW ALL (<span>{news.length}</span>)
          </button>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-3xl shadow-md h-[300px] group">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Wide shot of a school sports day event. Students running on a track, colorful flags, large crowd of parents and teachers watching in the background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Fj4LUfyC1ugjUWsAxefN7s1xyFo1PyEVd5E0V7W8z9as05MJSc2QYoBNmNnXLgjwUKvgLmk0FftOkctMhgUrm0aZLRPP8t8vZi5XMVR6kiV4knYsSbwaO8c4CKr1nBDbzhl9EUuYuNUo4gN02JKkw0bC0pjBVcs-FcuKs3ohyHz_Qrl9Ulj10s-UAbvvCqrlP2SOPgoqzl--BMB-4JpYl8X1F4GBaThZSbB1jrgfkPk52iEPEL9zzw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/80 text-sm font-label-md mb-2">FEBRUARY 15, 2024</p>
              <h3 className="text-white font-headline-md text-headline-md">DJPS Pride - Ajay Kumar</h3>
              <p className="text-white/80 mt-1">IIT NDA Qualified 2025 Batch</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="w-10 h-10 border border-outline rounded flex items-center justify-center hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface">arrow_back</span>
            </button>
            <button className="w-10 h-10 border border-outline rounded flex items-center justify-center hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-3xl border border-outline-variant bg-surface-bright p-6 h-full">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-headline-md text-headline-md text-on-background">Notices & Updates</h2>
          <button
            onClick={() => openModal('noticeModal')}
            className="text-primary-container font-label-md text-sm hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            ALL NOTICES (<span>{notices.length}</span>)
          </button>
        </div>

        <div className="grid gap-4">
          {notices.map((notice) => (
            <button
              onClick={() => openModal('noticeModal')}
              key={notice.title}
              className="w-full text-left rounded-3xl border border-outline-variant bg-surface-bright p-5 text-left transition-shadow hover:shadow-md"
            >
              <p className="text-primary-container font-label-md text-sm mb-2">{notice.date}</p>
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold leading-snug">{notice.title}</h4>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">{notice.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewsNoticesSection;
