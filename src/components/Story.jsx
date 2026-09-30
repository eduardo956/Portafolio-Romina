import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { FadeInUp, ScaleIn } from './AnimatedText';
import rominaVideo from '../assets/rominaVideo.mp4';

export const Story = () => {
  return (
    <section id="sobre-mi" className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28 relative">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[140px] pointer-events-none" />

      <div className="bg-[#120b26]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden border border-purple-500/20">
        
        {/* Glow ambient lights */}
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Visual Column / Video avatar presentation */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative w-64 h-[24rem] sm:w-72 sm:h-[26.5rem] rounded-3xl p-1.5 bg-gradient-to-tr from-[#4c1d95] via-[#7c3aed] to-[#6366f1] shadow-[0_0_40px_rgba(124,58,237,0.4)]"
            >
              {/* Animated outer ring glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-700 to-indigo-600 opacity-50 blur-xl animate-pulse" />

              {/* Video Container */}
              <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-[#0c0818] flex items-center justify-center border border-purple-400/30 shadow-inner pointer-events-none select-none">
                <video
                  src={rominaVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                />
              </div>
            </motion.div>

            {/* Contact Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-6 w-full max-w-sm"
            >
              <a
                href="https://wa.me/51922572935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-purple-700 hover:text-white transition-all shadow-md border border-purple-400/30 hover:scale-105"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-purple-300" />
                <span>922 572 935</span>
              </a>

              <a
                href="https://instagram.com/romina_raffo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-purple-700 hover:text-white transition-all shadow-md border border-purple-400/30 hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-purple-300" />
                <span>@romina_raffo</span>
              </a>

              <a
                href="mailto:giulir109@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-purple-700 hover:text-white transition-all shadow-md border border-purple-400/30 hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5 text-purple-300" />
                <span>giulir109@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Bio / Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <FadeInUp delay={0.1}>
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-purple-300 font-bold">
                  PERFIL PROFESIONAL
                </span>
              </div>
            </FadeInUp>

            {/* Main Title */}
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
              Giulianna Romina Raffo
            </h2>

            {/* Bio Paragraphs */}
            <FadeInUp delay={0.3}>
              <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal">
                Profesional egresada en <strong className="text-purple-300 font-bold">Gestión de Marketing Empresarial (2025)</strong> y titulada en <strong className="text-[#c4b5fd] font-bold">Diseño Gráfico Digital</strong>, con <strong className="text-white font-bold">8 años de trayectoria</strong> en el sector creativo y publicitario.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-200/80 leading-relaxed font-normal">
                Mi perfil híbrido me permite fusionar la creatividad visual de alto nivel con el pensamiento estratégico de negocios. Me especializo en la dirección de arte, creación de branding 360°, manejo de pautas Meta Ads e identidades de marca contundentes.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-purple-500/20 mt-2 shadow-inner">
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-200 font-medium flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-purple-300 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Portafolio con casos reales de clientes corporativos (Cassinelli, Ceresita, Alianza Lima, Vilanova, etc.).</span>
                </p>
              </div>
            </FadeInUp>

            {/* Specialties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-2">
              <ScaleIn delay={0.6}>
                <div className="flex flex-col p-3.5 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 transition-all">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-purple-300 font-bold">Especialidad 01</span>
                  <span className="font-['Outfit'] font-bold text-sm sm:text-base text-white mt-0.5">Branding &amp; Identidad</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.7}>
                <div className="flex flex-col p-3.5 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 transition-all">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-purple-300 font-bold">Especialidad 02</span>
                  <span className="font-['Outfit'] font-bold text-sm sm:text-base text-white mt-0.5">Meta Ads &amp; RRSS</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.8}>
                <div className="flex flex-col col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 transition-all">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-purple-300 font-bold">Especialidad 03</span>
                  <span className="font-['Outfit'] font-bold text-sm sm:text-base text-white mt-0.5">Packaging &amp; Print</span>
                </div>
              </ScaleIn>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


