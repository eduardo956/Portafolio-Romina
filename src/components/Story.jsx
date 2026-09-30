import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { AnimatedWords, AnimatedLetters, FadeInUp, ScaleIn } from './AnimatedText';
import rominaVideo from '../assets/rominaVideo.mp4';

export const Story = () => {
  return (
    <section id="sobre-mi" className="w-full max-w-[1280px] mx-auto px-5 md:px-12 py-16 md:py-24">
      <div className="bg-[#f7f1ff] rounded-3xl p-6 sm:p-12 shadow-xl relative overflow-hidden border border-[#e6dffa]">
        
        {/* Glow ambient lights */}
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#ccbafd]/30 blur-2xl pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#845ec2]/15 blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Visual Column / Video avatar presentation */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative w-64 h-[24rem] sm:w-72 sm:h-[26.5rem] rounded-3xl p-2 bg-gradient-to-tr from-[#4b2a8d] via-[#845ec2] to-[#ccbafd] shadow-2xl"
            >
              {/* Animated outer ring glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#4b2a8d] to-[#ccbafd] opacity-40 blur-lg animate-pulse" />

              {/* Video Container (Fits Full Head & Portrait Aspect Ratio) */}
              <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-[#1c192c] flex items-center justify-center border-2 border-white/80 shadow-inner pointer-events-none select-none">
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
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-[#6344a6] hover:text-white transition-all shadow-sm border border-[#e6dffa] hover:scale-105"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#4b2a8d] group-hover:text-white" />
                <span>922 572 935</span>
              </a>

              <a
                href="https://instagram.com/romina_raffo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-[#6344a6] hover:text-white transition-all shadow-sm border border-[#e6dffa] hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#4b2a8d] group-hover:text-white" />
                <span>@romina_raffo</span>
              </a>

              <a
                href="mailto:giulir109@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#4b2a8d] font-['Plus_Jakarta_Sans'] font-semibold text-xs hover:bg-[#6344a6] hover:text-white transition-all shadow-sm border border-[#e6dffa] hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>giulir109@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Bio / Story Column with Animated Text */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <FadeInUp delay={0.1}>
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-[#4b2a8d] rounded-full animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#655591] font-bold">
                  SOBRE MÍ
                </span>
              </div>
            </FadeInUp>

            {/* Main Title with Animated Words */}
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#4b2a8d] tracking-tight leading-tight">
              <AnimatedLetters text="¡Hola! Soy Giulianna Romina Raffo" delay={0.2} stagger={0.03} />
            </h2>

            {/* Bio Paragraphs */}
            <FadeInUp delay={0.3}>
              <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#494551] leading-relaxed">
                Profesional egresada en <strong className="text-[#4b2a8d]">Gestión de Marketing Empresarial (2025)</strong> y titulada en <strong className="text-[#4b2a8d]">Diseño Gráfico Digital</strong>, con <strong className="text-[#4b2a8d]">8 años de trayectoria</strong> en el sector creativo y publicitario.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#494551] leading-relaxed">
                Mi perfil híbrido me permite fusionar la creatividad visual con el pensamiento estratégico. Actualmente me especializo en la gestión integral de cuentas, el manejo de Meta Ads y la dirección de comunidades online. Me apasiona liderar proyectos desde la conceptualización gráfica hasta el análisis de resultados, asegurando que cada campaña conecte con la audiencia y cumpla los objetivos de la marca.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-white p-4 rounded-xl border border-[#e6dffa] mt-2 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#4b2a8d] font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#845ec2] shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Este portafolio contiene una recopilación de los trabajos más destacados realizados durante mis años de experiencia.</span>
                </p>
              </div>
            </FadeInUp>

            {/* Specialties grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 pt-2">
              <ScaleIn delay={0.6}>
                <div className="flex flex-col p-3 rounded-xl bg-white/60 border border-[#e6dffa]">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-[#655591] font-semibold">Especialidad 1</span>
                  <span className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#1c192c]">Branding &amp; Identidad</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.7}>
                <div className="flex flex-col p-3 rounded-xl bg-white/60 border border-[#e6dffa]">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-[#655591] font-semibold">Especialidad 2</span>
                  <span className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#1c192c]">Meta Ads &amp; Estrategia</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.8}>
                <div className="flex flex-col col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/60 border border-[#e6dffa]">
                  <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-[#655591] font-semibold">Especialidad 3</span>
                  <span className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#1c192c]">Audiovisual &amp; Editorial</span>
                </div>
              </ScaleIn>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
