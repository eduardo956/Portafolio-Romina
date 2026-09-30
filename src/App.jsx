import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Curriculum } from './components/Curriculum';
import { ContactSection } from './components/ContactSection';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { Footer } from './components/Footer';
import { caseStudiesData } from './data/caseStudies';

function App() {
  const [activeCaseSlug, setActiveCaseSlug] = useState(null);

  const activeCaseStudy = activeCaseSlug
    ? caseStudiesData.find(c => c.slug === activeCaseSlug)
    : null;

  return (
    <ToastProvider>
      <CartProvider>
        <ModalProvider>
          <div className="min-h-screen bg-[#090713] text-white flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#ec4899] selection:text-white relative overflow-x-hidden">
            <Navbar
              onSelectModule={(slug) => {
                setActiveCaseSlug(slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onGoHome={() => {
                setActiveCaseSlug(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <main className="flex-1">
              {activeCaseStudy ? (
                <CaseStudyDetail
                  caseStudy={activeCaseStudy}
                  onBack={() => setActiveCaseSlug(null)}
                  onNavigateCase={(slug) => {
                    setActiveCaseSlug(slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ) : (
                <>
                  <Hero />
                  <Story />
                  <PortfolioGrid
                    onSelectCaseStudy={(slug) => {
                      setActiveCaseSlug(slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                  <Curriculum />
                  <ContactSection />
                </>
              )}
            </main>
            <Footer />
          </div>
        </ModalProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
