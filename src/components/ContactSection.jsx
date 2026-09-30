import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp } from './AnimatedText';
import { OfficialWhatsAppIcon } from './icons/SocialIcons';

export const ContactSection = () => {
  return (
    <section id="contacto" className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex justify-center items-center">
      <FadeInUp delay={0.1} className="w-full">
        <div className="relative w-full rounded-[2.5rem] bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#3730a3] p-1 shadow-[0_0_50px_rgba(109,40,217,0.4)] overflow-hidden">
          
          <div className="bg-[#120b26]/95 backdrop-blur-2xl rounded-[2.4rem] p-8 sm:p-12 border border-purple-500/20 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Ambient Mesh Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

            {/* Left Column: Title & Subtitle */}
            <div className="flex flex-col gap-3 relative z-10 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-purple-300 font-bold">
                  CONTACTO DIRECTO
                </span>
              </div>

              <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
                ¿LISTOS PARA <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-purple-200 bg-clip-text text-transparent">POTENCIAR TU MARCA?</span>
              </h2>
              
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                Conversemos sobre tu proyecto, cotizaciones de branding, campañas Meta Ads o diseño de empaques sin compromiso.
              </p>
            </div>

            {/* Right Column: Official WhatsApp CTA Button */}
            <div className="relative z-10 shrink-0">
              <a
                href="https://wa.me/51922572935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-['Plus_Jakarta_Sans'] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_35px_rgba(109,40,217,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-purple-400/30 group/btn"
              >
                <OfficialWhatsAppIcon className="w-6 h-6 shrink-0 text-purple-200" />
                <span>Contactar por WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform shrink-0" />
              </a>
            </div>

          </div>
        </div>
      </FadeInUp>
    </section>
  );
};


