import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { AnimatedLetters, AnimatedWords, ScaleIn } from './AnimatedText';

export const Hero = () => {

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#241547] text-white pt-32 pb-20 md:pb-28 px-5 md:px-12">
      
      {/* Ambient glowing atmospheric lights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6344a6]/40 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-[#845ec2]/30 blur-[120px] pointer-events-none"
      />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#eaddff]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center text-center">
        


        {/* Hero Heading with Animated Letters */}
        <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight max-w-4xl text-white leading-tight">
          <div className="block">
            <AnimatedLetters text="PORTAFOLIO" delay={0.1} stagger={0.04} />
          </div>
          <span className="bg-gradient-to-r from-[#d1bcff] via-[#ccbafd] to-white bg-clip-text text-transparent block mt-1">
            <AnimatedLetters text="ROMINA RAFFO" delay={0.4} stagger={0.04} />
          </span>
        </h1>

        {/* Subtitle with Animated Words */}
        <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed">
          <AnimatedWords
            text="Diseñadora Gráfica & Especialista en Marketing Digital. Fusiono la creatividad visual de alto calibre con pensamiento estratégico y campañas de Meta Ads con resultados medibles."
            delay={0.7}
            stagger={0.02}
          />
        </p>

        {/* Action Buttons & Video Highlight Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6344a6] hover:bg-[#4b2a8d] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm rounded-full shadow-[0_12px_32px_rgba(99,68,166,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            <span>Explorar Proyectos</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm rounded-full backdrop-blur-md transition-all active:scale-95 border border-white/20"
          >
            <MessageCircle className="w-5 h-5 text-[#ccbafd]" />
            <span>Contactar por WhatsApp</span>
          </a>
        </motion.div>

        {/* Quick Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-16">
          <ScaleIn delay={1.1}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center border border-white/10 hover:border-purple-400/40 transition-all hover:-translate-y-1 shadow-lg">
              <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#ccbafd]">+8 Años</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-white/70 mt-1 font-medium">Trayectoria en la Industria</span>
            </div>
          </ScaleIn>

          <ScaleIn delay={1.2}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center border border-white/10 hover:border-purple-400/40 transition-all hover:-translate-y-1 shadow-lg">
              <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#ccbafd]">Meta Ads &amp; RRSS</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-white/70 mt-1 font-medium">Gestión Integral de Cuentas</span>
            </div>
          </ScaleIn>

          <ScaleIn delay={1.3}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center border border-white/10 hover:border-purple-400/40 transition-all hover:-translate-y-1 shadow-lg">
              <span className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#ccbafd]">360° Branding</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-white/70 mt-1 font-medium">De Identidad a Packaging</span>
            </div>
          </ScaleIn>
        </div>

      </div>
    </section>
  );
};
