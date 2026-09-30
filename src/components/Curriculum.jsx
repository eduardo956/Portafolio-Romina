import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Briefcase, GraduationCap, Grid, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Curriculum = () => {
  const curriculumRef = useRef(null);
  const bentoCardsRef = useRef([]);

  useGSAP(
    (context, contextSafe) => {
      // 1. Revelado fluído del Header de Curriculum con ScrollTrigger
      gsap.fromTo(
        '.cv-header-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: curriculumRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Experiencia Timeline Items reveal con desplazamiento lateral refinado
      gsap.fromTo(
        '.cv-timeline-item',
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cv-experience-card',
            start: 'top 85%',
          },
        }
      );

      // 3. Bento Grid Cards Reveal
      gsap.fromTo(
        '.cv-bento-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.cv-bento-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Efectos 3D Tilt en Bento Cards con Iluminación Especular
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch) return;

      bentoCardsRef.current.forEach((card) => {
        if (!card) return;

        const handleMouseMove = contextSafe((e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const normX = (x - centerX) / centerX;
          const normY = (y - centerY) / centerY;

          const rotateX = -normY * 8; // Max 8 deg tilt
          const rotateY = normX * 8;

          const shine = card.querySelector('.bento-shine');
          if (shine) {
            gsap.to(shine, {
              opacity: 0.4,
              background: `radial-gradient(circle at ${x}px ${y}px, rgba(167,139,250,0.3) 0%, transparent 65%)`,
              duration: 0.2,
              overwrite: 'auto',
            });
          }

          gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.015,
            transformPerspective: 1200,
            transformOrigin: 'center center',
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        const handleMouseLeave = contextSafe(() => {
          const shine = card.querySelector('.bento-shine');
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
    { scope: curriculumRef }
  );

  return (
    <section
      ref={curriculumRef}
      id="curriculum"
      className="w-full bg-transparent py-20 md:py-28 px-4 sm:px-6 lg:px-12 relative border-y border-purple-500/20"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto flex flex-col gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="cv-header-item font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-purple-300">
            TRAYECTORIA Y HABILIDADES
          </span>

          <h2 className="cv-header-item font-['Outfit'] font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
            Currículum Profesional
          </h2>

          <p className="cv-header-item font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-100/80 mt-2 font-normal">
            Formación estratégica en Marketing Empresarial y Diseño Gráfico Digital con experiencia real en agencias y clientes de alto nivel.
          </p>
        </div>

        {/* Resume Bento Grid */}
        <div className="cv-bento-grid grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Experiencia Laboral (7 cols) */}
          <div
            ref={(el) => (bentoCardsRef.current[0] = el)}
            className="cv-bento-card cv-experience-card lg:col-span-7 relative bg-[#120b26]/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 flex flex-col gap-6 hover:border-purple-400/40 transition-colors will-change-transform transform-gpu overflow-hidden"
          >
            {/* Interactive 3D Specular Light Overlay */}
            <div className="bento-shine absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300 rounded-3xl" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-700 flex items-center justify-center text-white shadow-lg border border-purple-400/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit'] font-extrabold text-2xl text-white uppercase">Experiencia Laboral</h3>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-8 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:via-indigo-600 before:to-violet-500">
              {/* Item 1 */}
              <div className="cv-timeline-item relative flex flex-col gap-1.5">
                <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-purple-500/30" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-purple-300 tracking-wide">2024 - 2026</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-[0.6875rem] text-purple-200 font-bold uppercase border border-purple-500/30">
                    AGENCIA DE MARKETING
                  </span>
                </div>
                <h4 className="font-['Outfit'] font-bold text-lg text-white">YALA MKT</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                  <strong className="text-purple-300">Jefa de Cuentas:</strong> Coordinación integral de clientes corporativos (Cassinelli, Ceresita, Alianza Lima). Dirección de arte, diseño publicitario y edición audiovisual para campañas de alto alcance.
                </p>
              </div>

              {/* Item 2 */}
              <div className="cv-timeline-item relative flex flex-col gap-1.5">
                <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/30" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-indigo-300 tracking-wide">2023 - 2024</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-[0.6875rem] text-indigo-200 font-bold uppercase border border-indigo-500/30">
                    GASTRONOMÍA &amp; BRANDING
                  </span>
                </div>
                <h4 className="font-['Outfit'] font-bold text-lg text-white">EL CORDÓN Y LA ROSA</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                  <strong className="text-purple-300">Marketing &amp; Diseño Gráfico:</strong> Relaciones corporativas, renovación de piezas impresas, cartas gastronómicas y gestión de campañas digitales.
                </p>
              </div>

              {/* Item 3 */}
              <div className="cv-timeline-item relative flex flex-col gap-1.5">
                <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-violet-400 ring-4 ring-violet-500/30" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-violet-300 tracking-wide">2021 - 2023</span>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-[0.6875rem] text-violet-200 font-bold uppercase border border-violet-500/30">
                    INMOBILIARIA
                  </span>
                </div>
                <h4 className="font-['Outfit'] font-bold text-lg text-white">VILANOVA ASESORÍA INMOBILIARIA</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                  <strong className="text-purple-300">Community Manager &amp; Content Creator:</strong> Creación de dossiers corporativos, catálogo de proyectos inmobiliarios y generación de pautas Meta Ads.
                </p>
              </div>

              {/* Item 4 */}
              <div className="cv-timeline-item relative flex flex-col gap-1.5">
                <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/40" />
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-purple-200/50 tracking-wide">2018 - 2019</span>
                <h4 className="font-['Outfit'] font-bold text-lg text-white">MARBELLA INMOBILIARIA • OH!25</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-200/70 font-normal">
                  Diseño digital, contenidos sociales y soporte gráfico en proyectos publicitarios.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Educación + Software + Idiomas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Formación Académica Card */}
            <div
              ref={(el) => (bentoCardsRef.current[1] = el)}
              className="cv-bento-card relative bg-[#120b26]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-purple-500/20 flex flex-col gap-4 hover:border-purple-400/40 transition-colors will-change-transform transform-gpu overflow-hidden"
            >
              <div className="bento-shine absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300 rounded-3xl" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-['Outfit'] font-extrabold text-xl text-white uppercase">Educación</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-purple-500/20">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-300 font-bold">2022 - 2025</span>
                  <h4 className="font-['Outfit'] font-bold text-base text-white">Zegel IPAE</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/70">Bachiller Profesional en Gestión Estratégica de Marketing</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-purple-500/20">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-300 font-bold">2018 - 2021</span>
                  <h4 className="font-['Outfit'] font-bold text-base text-white">SENATI</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/70">Carrera Técnica Profesional en Diseño Gráfico Digital</p>
                </div>
              </div>
            </div>

            {/* Software Proficiency */}
            <div
              ref={(el) => (bentoCardsRef.current[2] = el)}
              className="cv-bento-card relative bg-[#120b26]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-purple-500/20 flex flex-col gap-4 hover:border-purple-400/40 transition-colors will-change-transform transform-gpu overflow-hidden"
            >
              <div className="bento-shine absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300 rounded-3xl" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Grid className="w-5 h-5 text-purple-400" />
                  <h3 className="font-['Outfit'] font-extrabold text-base text-white uppercase">Software &amp; Herramientas</h3>
                </div>
                <span className="text-[0.6875rem] font-bold uppercase text-purple-300 font-mono">Dominio Avanzado</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                {['Ps', 'Ai', 'Pr', 'An'].map((sw, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1 p-2.5 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 transition-all hover:scale-105"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-700/50 to-indigo-700/50 text-white flex items-center justify-center font-['Outfit'] font-extrabold text-base border border-purple-400/30">
                      {sw}
                    </div>
                    <span className="text-[0.6875rem] font-bold text-purple-100">
                      {sw === 'Ps' ? 'Photoshop' : sw === 'Ai' ? 'Illustrator' : sw === 'Pr' ? 'Premiere' : 'Animate'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 text-xs text-purple-100/80 font-medium border-t border-purple-500/20">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-300" /> Meta Ads Manager</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-300" /> Office 365</span>
              </div>
            </div>

            {/* Languages & Interests */}
            <div
              ref={(el) => (bentoCardsRef.current[3] = el)}
              className="cv-bento-card relative bg-[#120b26]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-purple-500/20 grid grid-cols-2 gap-4 will-change-transform transform-gpu overflow-hidden"
            >
              <div className="bento-shine absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300 rounded-3xl" />
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-purple-300 block mb-2">Idiomas</span>
                <ul className="text-xs text-purple-100/90 space-y-1.5 font-normal">
                  <li>• <strong className="text-white">Español:</strong> Nativo</li>
                  <li>• <strong className="text-white">Portugués:</strong> Intermedio B2</li>
                  <li>• <strong className="text-white">Inglés:</strong> Básico B10</li>
                </ul>
              </div>

              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-purple-300 block mb-2">Intereses</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Fotografía', 'Música', 'Dibujo', 'Basketball'].map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-purple-900/40 rounded-full text-[0.6875rem] text-purple-200 font-semibold border border-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



