import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Award, TrendingUp } from 'lucide-react';
import { AnimatedLetters, ScaleIn } from './AnimatedText';
import { WhatsAppIcon } from './icons/SocialIcons';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-transparent text-white pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-12">
      
      {/* Background Radial Dot Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Deep Purple & Violet Liquid Ambient Orbs (Strictly Purple/Violet colorimetry) */}
      {/* Orb 1: Royal Violet */}
      <div
        className="absolute top-10 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#581c87] via-[#6d28d9] to-[#7c3aed] opacity-25 blur-[130px] pointer-events-none animate-blob z-0"
      />
      {/* Orb 2: Deep Indigo / Violet */}
      <div
        className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#3730a3] via-[#4c1d95] to-[#7e22ce] opacity-20 blur-[150px] pointer-events-none animate-blob animation-delay-2000 z-0"
      />
      {/* Orb 3: Icy Purple Accent Glow */}
      <div
        className="absolute bottom-10 left-1/3 w-[28rem] h-[28rem] rounded-full bg-gradient-to-r from-[#4338ca] via-[#6366f1] to-[#8b5cf6] opacity-20 blur-[120px] pointer-events-none animate-blob animation-delay-4000 z-0"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* Hero Main Heading with clean Outfit typography */}
        <div className="flex flex-col items-center text-center max-w-5xl">
          <h1 className="font-['Outfit'] font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase drop-shadow-[0_10px_35px_rgba(109,40,217,0.4)] leading-[0.9]">
            PORTAFOLIO
          </h1>
          
          <span className="font-['Outfit'] font-bold text-2xl sm:text-4xl md:text-5xl text-[#c4b5fd] tracking-wide uppercase mt-2 sm:mt-3">
            ROMINA RAFFO
          </span>

          <span className="font-['Outfit'] font-extrabold text-xl sm:text-3xl md:text-4xl text-purple-200/90 tracking-wider uppercase mt-3 py-1 px-6 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-md">
            VISUAL DESIGNER &amp; META ADS
          </span>
        </div>

        {/* Subtitle Paragraph */}
        <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-xl text-purple-100/90 max-w-2xl text-center mt-7 leading-relaxed font-normal">
          Diseñadora Gráfica &amp; Especialista en Marketing Digital con <strong className="text-white font-bold">8+ años de experiencia</strong>. Transformo marcas mediante identidades visuales memorables, empaques y campañas de alta conversión.
        </p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#proyectos"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#4c1d95] text-white font-['Plus_Jakarta_Sans'] font-bold text-sm rounded-full shadow-[0_0_35px_rgba(109,40,217,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden border border-purple-400/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>EXPLORAR CASOS DE ÉXITO</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>

          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] font-bold text-sm rounded-full backdrop-blur-xl transition-all border border-purple-300/30 hover:border-purple-300/60 transform hover:-translate-y-1 active:scale-95 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#c4b5fd]" />
            <span>CONTACTAR POR WHATSAPP</span>
          </a>
        </motion.div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-12">
          <ScaleIn delay={0.5}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 group-hover:scale-105 transition-transform">
                +8 AÑOS
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 mt-1 font-semibold uppercase tracking-wider">
                Experiencia Profesional
              </span>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.6}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-violet-200 group-hover:scale-105 transition-transform">
                META ADS
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 mt-1 font-semibold uppercase tracking-wider">
                Estrategia &amp; Campañas
              </span>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.7}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 group-hover:scale-105 transition-transform">
                360° BRAND
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 mt-1 font-semibold uppercase tracking-wider">
                Identidad a Packaging
              </span>
            </div>
          </ScaleIn>
        </div>

      </div>
    </section>
  );
};


