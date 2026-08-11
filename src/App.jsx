
import { useEffect, useMemo, useState } from 'react';

import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ExcellenceSection from './components/ExcellenceSection';
import FacilitiesSection from './components/FacilitiesSection';
import DirectorSection from './components/DirectorSection';
import EducationSection from './components/EducationSection';
import FutureSection from './components/FutureSection';
import NewsNoticesSection from './components/NewsNoticesSection';
import AchieversSection from './components/AchieversSection';
import CtaSection from './components/CtaSection';
import FooterSection from './components/FooterSection';
import Modal from './components/Modal';

const noticeData = [
  {
    title: 'Term-II Exam routine',
    date: '2024-03-10',
    description: 'Routine for Term-II exam 23-24',
  },
  {
    title: 'Republic Day Invitation',
    date: '2024-01-20',
    description: 'Invitation for Republic Day & Saraswati Puja',
  },
  {
    title: 'Formative Assessment II',
    date: '2023-12-05',
    description: 'Time Table for Formative Assessment II',
  },
];

const newsData = [
  {
    title: 'DJPS Pride - Ajay Kumar',
    date: '2024-02-15',
    description: 'IIT NDA Qualified 2025 Batch',
  },
  {
    title: 'Alumni Success - Pooja Kumari',
    date: '2024-01-10',
    description: 'AIIMS Bhopal Batch 2019',
  },
];

function App() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState('');

  const notices = useMemo(() => noticeData, []);
  const news = useMemo(() => newsData, []);

  const heroSlides = useMemo(
    () => [
      '/images/hero1.jpg',
      '/images/hero2.jpg',
      '/images/hero3.jpg',
    ],
    []
  );

  // Hero slideshow
  useEffect(() => {
    heroSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        setModalOpen('');
      }
    };

    window.addEventListener('click', handleClickOutsideModal);

    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
    {/* ================= NAVBAR ================= */}
<nav
  id="main-nav"
  className={`fixed top-0 z-50 w-full transition-colors duration-300 py-base px-margin-mobile md:px-margin-desktop flex justify-between items-center ${
    isNavScrolled ? 'nav-scrolled' : 'bg-transparent'
  }`}
>
  {/* School Name */}
  <div className="text-white font-bold text-lg">
    Darjeeling Public School
  </div>

  {/* ================= DESKTOP NAVIGATION ================= */}
  <div className="hidden md:flex items-center space-x-gutter">

    <a
      href="/"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Home
    </a>

    <a
      href="/about.html"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      About Us
    </a>

    <a
      href="/academics.html"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Academics
    </a>

    <a
      href="/facilities.html"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Facilities
    </a>

    <a
      href="/gallery.html"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Gallery
    </a>

    <a
      href="/contact.html"
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Contact
    </a>

    <a
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setModalOpen('noticeModal');
      }}
      className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
    >
      Notices
    </a>

  </div>

  {/* ================= RIGHT SIDE ================= */}
  <div className="flex items-center gap-4">

    {/* MOBILE NOTICES - ALWAYS VISIBLE */}
    <button
      type="button"
      onClick={() => setModalOpen('noticeModal')}
      className="md:hidden text-white text-sm font-semibold hover:text-orange-400 transition-colors"
    >
      Notices
    </button>

    {/* Admission Button */}
    <a
      href="/admission.html"
      className="hidden md:inline-flex items-center justify-center bg-primary-container text-white px-6 py-2 rounded font-label-lg text-label-lg hover:bg-primary transition-all"
    >
      Admission Open
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() =>
        setIsMobileMenuOpen((value) => !value)
      }
      className="md:hidden text-white"
    >
      <span className="material-symbols-outlined">
        menu
      </span>
    </button>

  </div>
</nav>

      {/* ================= MOBILE MENU ================= */}
{isMobileMenuOpen && (
  <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-black/95 border-t border-orange-500/30 p-5 shadow-xl">

    <div className="flex flex-col gap-4">
      {[
          'Home',
          'About Us',
          'Academics',
          'Facilities',
          'Gallery',
          'Contact',
          'Notices',
          'Admission Open',
        ].map((item) => (
          <a
            key={item}
            href={
              item === 'Home'
                ? '/'
                : item === 'About Us'
                ? '/about.html'
                : item === 'Academics'
                ? '/academics.html'
                : item === 'Facilities'
                ? '/facilities.html'
                : item === 'Gallery'
                ? '/gallery.html'
                : item === 'Contact'
                ? '/contact.html'
                : item === 'Notices'
                ? '/notices.html'
                : item === 'Admission Open'
                ? '/admission.html'
                : '#'
            }
            className="text-white hover:text-orange-400 transition-colors text-label-lg font-label-lg"
          >
            {item}
          </a>
        ))}

      </div>
    </div>
  )}

      <HeroSection
        heroSlides={heroSlides}
        currentSlide={currentSlide}
      />

      <StatsSection />

      <NewsNoticesSection
        notices={notices}
        news={news}
        openModal={setModalOpen}
      />

      <AchieversSection />

      <FacilitiesSection />

      <DirectorSection />

      <EducationSection />

      <FutureSection />

      <ExcellenceSection />

      <CtaSection />

      <FooterSection
        noticeCount={notices.length}
        newsCount={news.length}
        openModal={setModalOpen}
      />

      {/* ================= NOTICE MODAL ================= */}

      <Modal
        id="noticeModal"
        title="School Notices & Updates"
        isOpen={modalOpen === 'noticeModal'}
        onClose={() => setModalOpen('')}
      >
        <div className="space-y-4">

          {notices.length > 0 ? (
            notices.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-orange-500/30 bg-zinc-950 p-5 transition-all hover:border-orange-500/60"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-500">
                  {item.date}
                </p>

                <h4 className="text-lg font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <div className="py-10 text-center">
              <div className="mb-3 text-4xl">
                📢
              </div>

              <h3 className="text-lg font-bold text-white">
                No Notices Available
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                There are currently no new notices or updates.
              </p>
            </div>
          )}

        </div>
      </Modal>

      {/* ================= NEWS MODAL ================= */}

      <Modal
        id="newsModal"
        title="All News"
        isOpen={modalOpen === 'newsModal'}
        onClose={() => setModalOpen('')}
      >
        <div className="space-y-4">

          {news.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-orange-500/30 bg-zinc-950 p-5"
            >
              <p className="mb-2 text-xs font-bold text-orange-500">
                {item.date}
              </p>

              <h4 className="text-lg font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-sm text-gray-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </Modal>

    </div>
  );
}

export default App;

