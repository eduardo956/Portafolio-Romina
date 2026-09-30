import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Eye, ArrowRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const PortfolioGrid = ({ onSelectCaseStudy }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    (context, contextSafe) => {
      // 1. Revelado fluído del Header de Proyectos con ScrollTrigger
      gsap.fromTo(
        '.portfolio-header-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Revelado fluído en Lote (ScrollTrigger Batch) para las Tarjetas
      ScrollTrigger.batch('.portfolio-card', {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 50, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              duration: 0.7,
              ease: 'power3.out',
              overwrite: 'auto',
            }
          );
        },
        once: true,
        start: 'top 85%',
      });

      // 3. Efectos 3D Tilt en Cards con Iluminación Especular 60fps
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch) return;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const handleMouseMove = contextSafe((e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const normX = (x - centerX) / centerX;
          const normY = (y - centerY) / centerY;

          const rotateX = -normY * 10; // Max 10 deg tilt
          const rotateY = normX * 10;

          const shine = card.querySelector('.card-shine');
          if (shine) {
            gsap.to(shine, {
              opacity: 0.45,
              background: `radial-gradient(circle at ${x}px ${y}px, rgba(196,181,253,0.35) 0%, transparent 65%)`,
              duration: 0.2,
              overwrite: 'auto',
            });
          }

          gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.025,
            transformPerspective: 1000,
            transformOrigin: 'center center',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        const handleMouseLeave = contextSafe(() => {
          const shine = card.querySelector('.card-shine');
          if (shine) {
            gsap.to(shine, {
              opacity: 0,
              duration: 0.4,
              overwrite: 'auto',
            });
          }

          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        });

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28 flex flex-col gap-12 relative"
    >
      {/* Glow background decoration */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-purple-600/15 blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="portfolio-header-item flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full animate-pulse" />
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-purple-300">
              PORTAFOLIO SELECCIONADO
            </span>
          </div>

          <h2 className="portfolio-header-item font-['Outfit'] font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
            Proyectos &amp; Casos de Éxito
          </h2>

          <p className="portfolio-header-item font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-100/80 max-w-xl mt-2 font-normal">
            Explora proyectos reales desarrollados para marcas líderes: identidad visual, diseño publicitario, packaging y pautas en Meta Ads.
          </p>
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudiesData.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            onClick={() => onSelectCaseStudy(item.slug)}
            className="portfolio-card relative flex flex-col bg-[#120b26]/90 backdrop-blur-2xl rounded-3xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.35)] hover:border-purple-400/50 transition-colors duration-300 group cursor-pointer will-change-transform transform-gpu"
          >
            {/* Interactive 3D Specular Light Overlay */}
            <div className="card-shine absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300 rounded-3xl" />

            {/* Image Preview Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0818]">
              <img
                src={item.heroImage}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />

              {/* Dark & Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0818] via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/40 via-indigo-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[0.6875rem] font-bold tracking-widest font-mono uppercase border border-purple-400/30">
                  [{String(idx + 1).padStart(2, '0')}] {item.badge || 'BRANDING'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg border border-purple-300/30">
                <Eye className="w-4 h-4 text-purple-200" />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h3 className="font-['Outfit'] font-extrabold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors leading-snug uppercase">
                  {item.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/70 mt-2 line-clamp-2 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Footer Indicator Link */}
              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-purple-300 group-hover:text-white transition-colors">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider group-hover:underline">
                  Ver Caso de Estudio
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-purple-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



