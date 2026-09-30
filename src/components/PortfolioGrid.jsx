import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';
import { AnimatedLetters, FadeInUp } from './AnimatedText';

export const PortfolioGrid = ({ onSelectCaseStudy }) => {
  return (
    <section id="proyectos" className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28 flex flex-col gap-12 relative">
      
      {/* Glow background decoration */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-purple-300">
                PORTAFOLIO SELECCIONADO
              </span>
            </div>
          </FadeInUp>
          
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
            Proyectos &amp; Casos de Éxito
          </h2>

          <FadeInUp delay={0.3}>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-100/80 max-w-xl mt-2 font-normal">
              Explora proyectos reales desarrollados para marcas líderes: identidad visual, diseño publicitario, packaging y pautas en Meta Ads.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Projects Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {caseStudiesData.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => onSelectCaseStudy(item.slug)}
              className="flex flex-col bg-[#0f0b1e]/90 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:border-purple-400/50 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#090713]">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Dark & Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1e] via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[0.6875rem] font-bold tracking-widest font-mono uppercase border border-white/20">
                    [{String(idx + 1).padStart(2, '0')}] {item.badge || 'BRANDING'}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/30">
                  <Eye className="w-4 h-4 text-pink-300" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-white group-hover:text-pink-300 transition-colors leading-snug uppercase">
                    {item.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>
                </div>

                {/* Footer Indicator Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-purple-300 group-hover:text-white transition-colors">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Ver Caso de Estudio
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-pink-400" />
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

