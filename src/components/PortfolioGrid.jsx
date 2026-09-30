import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';
import { AnimatedLetters, FadeInUp } from './AnimatedText';

export const PortfolioGrid = ({ onSelectCaseStudy }) => {
  return (
    <section id="proyectos" className="w-full max-w-[1280px] mx-auto px-5 md:px-12 py-16 md:py-24 flex flex-col gap-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-[#4b2a8d] rounded-full animate-pulse" />
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#655591]">
                PORTAFOLIO SELECCIONADO
              </span>
            </div>
          </FadeInUp>
          
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#1c192c] tracking-tight mt-2">
            <AnimatedLetters text="Proyectos & Casos de Éxito" delay={0.2} stagger={0.03} />
          </h2>

          <FadeInUp delay={0.3}>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#494551] max-w-xl mt-2">
              Explora trabajos agrupados por disciplina: diseño de marca, campañas para redes, packaging, material corporativo y activaciones de alto alcance.
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
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-[#e6dffa] shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f1ff]">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#4b2a8d] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-2xl text-[#1c192c] group-hover:text-[#4b2a8d] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#494551] mt-2 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Footer Indicator Link */}
                <div className="pt-4 border-t border-[#f1ebff] flex items-center justify-between text-[#4b2a8d]">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold group-hover:underline">
                    Ver Caso de Estudio Detallado
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};
