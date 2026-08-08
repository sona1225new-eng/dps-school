import { useEffect, useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ExcellenceSection from './components/ExcellenceSection';
import FacilitiesSection from './components/FacilitiesSection';
import DirectorSection from './components/DirectorSection';
import EducationSection from './components/EducationSection';
import FutureSection from './components/FutureSection';
import NewsNoticesSection from './components/NewsNoticesSection';
import CtaSection from './components/CtaSection';
import FooterSection from './components/FooterSection';
import Modal from './components/Modal';

const noticeData = [
  { title: 'Term-II Exam routine', date: '2024-03-10', description: 'Routine for Term-II exam 23-24' },
  { title: 'Republic Day Invitation', date: '2024-01-20', description: 'Invitation for Republic Day & Saraswati Puja' },
  { title: 'Formative Assesment II', date: '2023-12-05', description: 'Time Table for Formative Assesment II' }
];

const newsData = [
  { title: 'DJPS Pride - Ajay Kumar', date: '2024-02-15', description: 'IIT NDA Qualified 2025 Batch' },
  { title: 'Alumni Success - Pooja Kumari', date: '2024-01-10', description: 'AIIMS Bhopal Batch 2019' }
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
      '/images/hero3.jpg'
    ],
    []
  );
useEffect(() => {
  // 1. Preload images
  heroSlides.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // 2. Set interval to cycle through slides
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 3000);

  // 3. Clean up timer on unmount
  return () => clearInterval(interval);
}, [heroSlides])

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        setModalOpen('');
      }
    };

    window.addEventListener('click', handleClickOutsideModal);
    return () => window.removeEventListener('click', handleClickOutsideModal);
  }, []);

  return (
    <div className="relative">
      <nav
        id="main-nav"
        className={`fixed top-0 z-50 w-full transition-colors duration-300 py-base px-margin-mobile md:px-margin-desktop flex justify-between items-center max-w-full ${
          isNavScrolled ? 'nav-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="font-headline-md text-headline-md font-bold text-white">
          Darjeeling Public School
        </div>

        <div className="hidden md:flex space-x-gutter">
          {['Home', 'About', 'Academics', 'Facilities', 'Gallery', 'Contact'].map((item) => (
            <a key={item} className="text-white hover:text-primary-container transition-colors text-label-lg font-label-lg" href="#">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary-container text-white px-6 py-2 rounded font-label-lg text-label-lg hover:bg-primary transition-all">
            Admission Open
          </button>
          <button onClick={() => setIsMobileMenuOpen((value) => !value)} className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-0 left-0 bg-surface bg-opacity-95 z-40 p-4 border-t border-outline shadow-lg">
          <div className="flex flex-col gap-3">
            {['Home', 'About', 'Academics', 'Facilities', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-on-background font-label-lg text-label-lg">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <HeroSection heroSlides={heroSlides} currentSlide={currentSlide} />
      <StatsSection />
      <ExcellenceSection />
      <FacilitiesSection />
      <DirectorSection />
      <EducationSection />
      <FutureSection />
      <NewsNoticesSection notices={notices} news={news} openModal={setModalOpen} />
      <CtaSection />
      <FooterSection noticeCount={notices.length} newsCount={news.length} openModal={setModalOpen} />

      <Modal
        id="noticeModal"
        title="All Notices"
        isOpen={modalOpen === 'noticeModal'}
        onClose={() => setModalOpen('')}
      >
        <div className="space-y-4">
          {notices.map((item) => (
            <div key={item.title} className="p-3 bg-surface-container-low rounded border border-outline-variant">
              <p className="text-primary-container text-xs font-bold mb-1">{item.date}</p>
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="text-sm text-on-surface-variant mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal id="newsModal" title="All News" isOpen={modalOpen === 'newsModal'} onClose={() => setModalOpen('')}>
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.title} className="p-3 bg-surface-container-low rounded border border-outline-variant">
              <p className="text-primary-container text-xs font-bold mb-1">{item.date}</p>
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="text-sm text-on-surface-variant mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
