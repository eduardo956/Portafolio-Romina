import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles, Layers, Award, TrendingUp, Compass } from 'lucide-react';
import { AnimatedLetters, AnimatedWords, ScaleIn } from './AnimatedText';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#090713] text-white pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-12">
      
      {/* Dynamic Animated Liquid Mesh Gradient Background Orbs (Non-flat background!) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Blob 1: Magenta / Pink */}
      <div
        className="absolute top-10 -left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ec4899] to-[#8b5cf6] opacity-35 blur-[120px] pointer-events-none animate-blob z-0"
      />
      {/* Blob 2: Cyan / Electric Blue */}
      <div
        className="absolute top-1/3 -right-24 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] opacity-30 blur-[140px] pointer-events-none animate-blob animation-delay-2000 z-0"
      />
      {/* Blob 3: Amber / Warm Gold Glow */}
      <div
        className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] rounded-full bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#8b5cf6] opacity-25 blur-[110px] pointer-events-none animate-blob animation-delay-4000 z-0"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* Top Tagline Badge Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-['Plus_Jakarta_Sans'] tracking-wider uppercase font-semibold text-purple-200 shadow-xl mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-ping" />
          <span className="text-white font-bold">[ 2026 PORTFOLIO ]</span>
          <span className="text-white/40">•</span>
          <span>DISEÑO GRÁFICO &amp; MARKETING DIGITAL</span>
        </motion.div>

        {/* Hero Main Heading with Syne / Outfit typography & Text Stroke */}
        <h1 className="font-['Syne'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-center max-w-5xl leading-[0.95] uppercase">
          <span className="block text-white drop-shadow-lg">
            ROMINA RAFFO
          </span>
          <span className="block bg-gradient-to-r from-[#f472b6] via-[#c084fc] to-[#38bdf8] bg-clip-text text-transparent mt-1 sm:mt-2">
            PORTAFOLIO
          </span>
          <span className="block text-stroke text-white/90 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-1 tracking-normal">
            VISUAL DESIGNER &amp; META ADS
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-xl text-purple-100/90 max-w-2xl text-center mt-6 leading-relaxed font-normal">
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
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#3b82f6] text-white font-['Plus_Jakarta_Sans'] font-bold text-sm rounded-full shadow-[0_0_35px_rgba(236,72,153,0.45)] hover:shadow-[0_0_50px_rgba(139,92,246,0.65)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>EXPLORAR CASOS DE ÉXITO</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </a>

          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] font-bold text-sm rounded-full backdrop-blur-xl transition-all border border-white/20 hover:border-white/40 transform hover:-translate-y-1 active:scale-95 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-[#f472b6]" />
            <span>CONTACTAR POR WHATSAPP</span>
          </a>
        </motion.div>


        {/* Visual Showcase Centerpiece (Inspired by Lisa Realisa Graphic Design Portfolio) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl mt-14 relative rounded-3xl p-1 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        >
          <div className="bg-[#0f0b1e]/90 rounded-[1.4rem] p-6 sm:p-8 overflow-hidden border border-white/10 relative">
            
            {/* Top Bar of the Graphic Showcase Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-purple-300/80 pl-2">
                  ROMINA_RAFFO_STUDIO.DES
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">BRANDING</span>
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">META ADS</span>
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">PACKAGING</span>
              </div>
            </div>

            {/* Showcase Fluid Banner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-stretch">
              
              {/* Main Iridescent Fluid Art Card */}
              <div className="md:col-span-7 relative min-h-[220px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between bg-gradient-to-tr from-[#6366f1] via-[#a855f7] to-[#ec4899] shadow-2xl group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Graphic hatch texture & badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-wider font-['Outfit'] uppercase border border-white/20">
                    ART DIRECTION &amp; BRANDING 360°
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-none uppercase">
                    ESTRATEGIA VISUAL &amp; DIRECCIÓN DE ARTE
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/90 font-medium mt-2">
                    Identidad corporativa, diseño editorial, campañas publicitaria e impacto medible en Meta Ads.
                  </p>
                </div>
              </div>

              {/* Side Cards Showcase */}
              <div className="md:col-span-5 flex flex-col gap-4">
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-purple-400/40 transition-all hover:bg-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-lg text-white">+8 Años de Trayectoria</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70">Diseño institucional, agencias y clientes corporativos.</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-pink-400/40 transition-all hover:bg-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-lg text-white">Meta Ads &amp; Performance</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70">Campañas con métricas reales y retorno de inversión.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Marquee Animated Strip */}
            <div className="mt-6 pt-4 border-t border-white/10 overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-marquee gap-8 font-['Syne'] text-xs font-bold text-purple-200/80 uppercase tracking-widest">
                <span>/// LOGOTIPOS VECTORIALES</span>
                <span>• REBRANDING CORPORATIVO</span>
                <span>• PACKAGING &amp; EMPAQUES</span>
                <span>• DOSSIERS INMOBILIARIOS</span>
                <span>• CAMPAÑAS META ADS</span>
                <span>• CREACIÓN DE CONTENIDO AUDIOVISUAL</span>
                <span>/// LOGOTIPOS VECTORIALES</span>
                <span>• REBRANDING CORPORATIVO</span>
                <span>• PACKAGING &amp; EMPAQUES</span>
                <span>• DOSSIERS INMOBILIARIOS</span>
                <span>• CAMPAÑAS META ADS</span>
                <span>• CREACIÓN DE CONTENIDO AUDIOVISUAL</span>
              </div>
            </div>

          </div>
        </motion.div>


        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-12">
          <ScaleIn delay={0.5}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-white/10 hover:border-purple-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-105 transition-transform">
                +8 AÑOS
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 mt-1 font-semibold uppercase tracking-wider">
                Experiencia Profesional
              </span>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.6}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-white/10 hover:border-pink-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400 group-hover:scale-105 transition-transform">
                META ADS
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 mt-1 font-semibold uppercase tracking-wider">
                Estrategia &amp; Campañas
              </span>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.7}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center text-center border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 shadow-2xl group">
              <span className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:scale-105 transition-transform">
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

