const FooterSection = ({ noticeCount, newsCount, openModal }) => (
  <footer className="bg-inverse-surface dark:bg-on-background text-primary-fixed dark:text-primary-fixed-dim font-body-md text-body-md full-width flat no shadows">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
      <div>
        <h3 className="font-headline-md text-2xl font-bold text-inverse-on-surface mb-6">DPS</h3>
        <p className="mb-2 text-tertiary-fixed">Madhepura, Bihar - 852113</p>
        <p className="mb-2 text-tertiary-fixed">+91 94725 33451</p>
        <p className="text-tertiary-fixed">info@dpsmadhepura.edu.in</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-label-lg text-sm font-semibold text-inverse-on-surface mb-4">School Info</h4>
          <ul className="space-y-2">
            {[
              { name: 'About Us', href: '/about.html' },
              { name: 'Academics', href: '/academics.html' },
              { name: 'Admissions', href: '/admission.html' }
            ].map((item) => (
              <li key={item.name}>
                <a className="text-tertiary-fixed hover:text-primary-fixed-dim transition-opacity hover:opacity-80" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-sm font-semibold text-inverse-on-surface mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button type="button" onClick={() => openModal('newsModal')} className="text-tertiary-fixed hover:text-primary-fixed-dim transition-opacity hover:opacity-80">
                News ({newsCount})
              </button>
            </li>
            <li>
              <button type="button" onClick={() => openModal('noticeModal')} className="text-tertiary-fixed hover:text-primary-fixed-dim transition-opacity hover:opacity-80">
                Notices ({noticeCount})
              </button>
            </li>
            <li>
              <a className="text-tertiary-fixed hover:text-primary-fixed-dim transition-opacity hover:opacity-80" href="/contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <select
          onChange={(e) => {
            if (e.target.value) window.location.href = e.target.value;
          }}
          className="bg-transparent border border-outline text-inverse-on-surface rounded p-2 mb-6 w-full max-w-xs focus:border-primary focus:ring-0"
        >
          <option value="" className="bg-zinc-900 text-white">Important Links</option>
          <option value="/academics.html" className="bg-zinc-900 text-white">CBSE Mandate</option>
          <option value="/admission.html" className="bg-zinc-900 text-white">Student Portal</option>
        </select>
        <div className="flex gap-4">
          {['FB', 'IG', 'X', 'YT'].map((item) => (
            <a
              key={item}
              className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-inverse-on-surface hover:bg-primary-container hover:border-primary-container transition-all"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-outline/30 px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center text-sm text-tertiary-fixed max-w-7xl mx-auto">
      <p>© 2024 Darjeeling Public School. All rights reserved.</p>
      <p className="mt-2 md:mt-0">CBSE AFFILIATION NO: XXXXXX</p>
    </div>
  </footer>
);

export default FooterSection;
