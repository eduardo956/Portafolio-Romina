import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowLeft as West, ArrowRight as East, Eye as VisorIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export const CaseStudyDetail = ({ caseStudy, onBack, onNavigateCase }) => {
  const [activePieceIndex, setActivePieceIndex] = useState(0);

  // Touch Swipe state for Mobile Carousel
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Reset active piece index to 0 whenever navigating to a different module/case study
  useEffect(() => {
    setActivePieceIndex(0);
  }, [caseStudy?.slug]);

  if (!caseStudy) return null;

  const piecesCount = caseStudy?.pieces ? caseStudy.pieces.length : 0;
  const validPieceIndex = (piecesCount > 0 && activePieceIndex < piecesCount) ? activePieceIndex : 0;
  
  const activePiece = (piecesCount > 0 && caseStudy.pieces[validPieceIndex]) || {
    number: '01',
    title: caseStudy?.title || '',
    subtitle: caseStudy?.subtitle || '',
    image: caseStudy?.heroImage || '',
  };

  const handlePrevPiece = () => {
    if (piecesCount <= 1) return;
    setActivePieceIndex((prev) => (prev === 0 ? piecesCount - 1 : prev - 1));
  };

  const handleNextPiece = () => {
    if (piecesCount <= 1) return;
    setActivePieceIndex((prev) => (prev === piecesCount - 1 ? 0 : prev + 1));
  };

  // Touch handlers for Mobile Swipe
  const minSwipeDistance = 40;

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextPiece();
    } else if (isRightSwipe) {
      handlePrevPiece();
    }
  };

  return (
    <div className="w-full bg-[#fdf8ff] text-[#1c192c] min-h-screen pt-20 sm:pt-24 pb-16">
      
      {/* Top Breadcrumb & Hero Header */}
      <section className="w-full relative overflow-hidden bg-[#fdf8ff] pb-8 sm:pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          
          {/* Breadcrumb Nav */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[#494551] font-['Plus_Jakarta_Sans'] text-[0.7rem] sm:text-xs mb-4 sm:mb-6 uppercase tracking-wider flex-wrap">
            <button onClick={onBack} className="hover:text-[#4b2a8d] transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft className="w-3.5 h-3.5" /> PORTAFOLIO
            </button>
            <span>/</span>
            <span>PROYECTOS</span>
            <span>/</span>
            <span className="text-[#1c192c] font-bold">{caseStudy.number} {caseStudy.category.toUpperCase()}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl flex flex-col gap-2">
              <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#1c192c] tracking-tight leading-tight">
                <span className="text-[#655591] font-medium mr-2">{caseStudy.number} |</span>
                {caseStudy.title}
              </h1>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#494551] mt-1 sm:mt-2 leading-relaxed max-w-2xl">
                {caseStudy.subtitle}
              </p>
            </div>

            {/* Direct Action CTAs */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#f1ebff] text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-semibold text-xs sm:text-sm shadow-sm hover:bg-[#e6dffa] transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al Portafolio</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Visor Interactivo y Galería de Arte con Carrusel */}
      <section className="w-full pb-16 bg-[#fdf8ff]" id="interactive-visor">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[#e6dffa] overflow-hidden p-4 sm:p-8 flex flex-col gap-4 sm:gap-6">
            
            {/* Active Header bar with Carousel controls & Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#f1ebff] pb-3 sm:pb-4 gap-3">
              <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                  <span className="font-['Outfit'] font-bold text-lg sm:text-xl text-[#1c192c] line-clamp-1">
                    {activePiece?.title || caseStudy?.title || ''}
                  </span>
                  <span className="text-[#655591] font-['Plus_Jakarta_Sans'] text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold self-start sm:self-auto px-2 py-0.5 rounded-md bg-[#f7f1ff] border border-[#e6dffa]">
                    {caseStudy?.categoryLabel || ''}
                  </span>
                </div>

                {/* Mobile Position Badge */}
                {piecesCount > 1 && (
                  <span className="sm:hidden px-2.5 py-1 rounded-full bg-[#f7f1ff] text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-bold text-xs border border-[#e6dffa] shrink-0">
                    {validPieceIndex + 1} / {piecesCount}
                  </span>
                )}
              </div>

              {/* Desktop Carousel Counter & Controls */}
              {piecesCount > 1 && (
                <div className="hidden sm:flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f7f1ff] text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-bold text-xs border border-[#e6dffa]">
                    {validPieceIndex + 1} / {piecesCount}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevPiece}
                      className="p-2 rounded-full bg-[#f1ebff] hover:bg-[#4b2a8d] text-[#4b2a8d] hover:text-white transition-all shadow-sm active:scale-95 border border-[#e6dffa]"
                      title="Anterior pieza"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPiece}
                      className="p-2 rounded-full bg-[#f1ebff] hover:bg-[#4b2a8d] text-[#4b2a8d] hover:text-white transition-all shadow-sm active:scale-95 border border-[#e6dffa]"
                      title="Siguiente pieza"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Main Interactive Artwork Image Container with Touch Swipe & Desktop Arrows */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#e6dffa] flex items-center justify-center shadow-inner min-h-[300px] sm:min-h-[480px] md:min-h-[580px] max-h-[750px] p-2 sm:p-4 group touch-pan-y select-none"
            >
              
              {/* Left Carousel Arrow Overlay (DESKTOP ONLY - Hidden on Mobile so it doesn't overlap artwork) */}
              {piecesCount > 1 && (
                <button
                  onClick={handlePrevPiece}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-white/90 hover:bg-white text-[#4b2a8d] shadow-lg border border-[#e6dffa] hover:scale-110 active:scale-95 backdrop-blur-md transition-all opacity-80 group-hover:opacity-100"
                  title="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Main Artwork Image with Fade Animation */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={validPieceIndex}
                  src={(activePiece.image || caseStudy.heroImage) ? `${activePiece.image || caseStudy.heroImage}?v=3` : ''}
                  alt={activePiece.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full max-w-[850px] max-h-[680px] h-auto object-contain transition-all duration-300 pointer-events-none"
                />
              </AnimatePresence>

              {/* Right Carousel Arrow Overlay (DESKTOP ONLY - Hidden on Mobile so it doesn't overlap artwork) */}
              {piecesCount > 1 && (
                <button
                  onClick={handleNextPiece}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-white/90 hover:bg-white text-[#4b2a8d] shadow-lg border border-[#e6dffa] hover:scale-110 active:scale-95 backdrop-blur-md transition-all opacity-80 group-hover:opacity-100"
                  title="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

            </div>

            {/* Mobile & Desktop Pagination Dots ("Puntitos") */}
            {piecesCount > 1 && (
              <div className="flex items-center justify-center gap-2 pt-1 pb-1 flex-wrap max-w-full px-2">
                {caseStudy.pieces.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActivePieceIndex(dotIdx)}
                    aria-label={`Ir a pieza ${dotIdx + 1}`}
                    className={`transition-all duration-300 ${
                      validPieceIndex === dotIdx
                        ? 'w-7 h-2.5 bg-[#4b2a8d] rounded-full shadow-sm'
                        : 'w-2.5 h-2.5 bg-[#e6dffa] hover:bg-[#c9b7f5] rounded-full'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Visor Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-[#494551] font-['Plus_Jakarta_Sans'] text-xs px-1 pt-1 gap-2 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <VisorIcon className="w-4 h-4 text-[#4b2a8d] shrink-0" />
                <span>
                  Visor interactivo <span className="sm:hidden text-[#4b2a8d] font-semibold">(Desliza 👈 👉 con el dedo)</span>
                </span>
              </div>
              <span className="font-semibold text-[#655591]">Romina Raffo Portfolio 2026</span>
            </div>

          </div>

          {/* Key Pieces Thumbnails Grid */}
          {caseStudy.pieces && caseStudy.pieces.length > 0 && (
            <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center justify-between">
                <span className="font-['Outfit'] font-bold text-lg sm:text-xl text-[#1c192c]">Piezas Clave del Proyecto</span>
                <span className="font-['Plus_Jakarta_Sans'] text-[0.65rem] sm:text-xs text-[#494551] font-bold uppercase tracking-widest">
                  {caseStudy.pieces.length} MÓDULOS DE DISEÑO
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {caseStudy.pieces.map((piece, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActivePieceIndex(idx);
                      document.getElementById('interactive-visor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`text-left rounded-xl sm:rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all border flex flex-col ${
                      activePieceIndex === idx ? 'border-[#4b2a8d] ring-2 ring-[#4b2a8d]' : 'border-[#e6dffa]'
                    }`}
                  >
                    <div className="w-full h-28 sm:h-40 rounded-lg sm:rounded-xl bg-white border border-[#e6dffa] overflow-hidden mb-2 sm:mb-3 relative flex items-center justify-center p-2 sm:p-3">
                      <img
                        src={piece.image ? `${piece.image}?v=3` : ''}
                        alt={piece.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300"
                      />
                    </div>
                    <p className="font-['Outfit'] font-semibold text-xs sm:text-sm text-[#1c192c] truncate">
                      {piece.title}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[0.7rem] sm:text-xs text-[#494551] line-clamp-1 mt-0.5">
                      {piece.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Case Study Bottom Navigation Bar (Prev / Next) */}
      <section className="w-full py-6 sm:py-8 bg-[#fdf8ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-[#f7f1ff] border border-[#e6dffa] shadow-sm">
            
            {/* Prev */}
            <button
              onClick={() => onNavigateCase(caseStudy.prevSlug)}
              className="group flex items-center gap-3 text-left hover:opacity-80 transition-opacity w-full sm:w-auto justify-start"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white group-hover:bg-[#4b2a8d] group-hover:text-white transition-all flex items-center justify-center shrink-0 border border-[#e6dffa]">
                <West className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[0.65rem] sm:text-[0.6875rem] text-[#655591] uppercase font-semibold">Anterior</span>
                <span className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#1c192c] group-hover:text-[#4b2a8d] transition-colors line-clamp-1">
                  {caseStudy.prevTitle}
                </span>
              </div>
            </button>

            {/* Back to all */}
            <button
              onClick={onBack}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white hover:bg-[#e6dffa] text-[#1c192c] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-colors border border-[#e6dffa] w-full sm:w-auto text-center"
            >
              Ver Todos los Proyectos
            </button>

            {/* Next */}
            <button
              onClick={() => onNavigateCase(caseStudy.nextSlug)}
              className="group flex items-center gap-3 text-right hover:opacity-80 transition-opacity w-full sm:w-auto justify-end"
            >
              <div className="flex flex-col text-right">
                <span className="font-['Plus_Jakarta_Sans'] text-[0.65rem] sm:text-[0.6875rem] text-[#655591] uppercase font-semibold">Siguiente</span>
                <span className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#1c192c] group-hover:text-[#4b2a8d] transition-colors line-clamp-1">
                  {caseStudy.nextTitle}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white group-hover:bg-[#4b2a8d] group-hover:text-white transition-all flex items-center justify-center shrink-0 border border-[#e6dffa]">
                <East className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};
