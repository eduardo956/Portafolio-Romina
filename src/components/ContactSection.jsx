import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeInUp } from './AnimatedText';

export const OfficialWhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export const ContactSection = () => {
  return (
    <section id="contacto" className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex justify-center items-center">
      <FadeInUp delay={0.1} className="w-full">
        <div className="relative w-full rounded-[2.5rem] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#3b82f6] p-1 shadow-[0_0_50px_rgba(168,85,247,0.4)] overflow-hidden">
          
          <div className="bg-[#0f0b1e]/95 backdrop-blur-2xl rounded-[2.4rem] p-8 sm:p-12 border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Ambient Mesh Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Left Column: Title & Subtitle */}
            <div className="flex flex-col gap-3 relative z-10 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-purple-300 font-bold">
                  CONTACTO DIRECTO
                </span>
              </div>

              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
                ¿LISTOS PARA <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">POTENCIAR TU MARCA?</span>
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
                className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-['Plus_Jakarta_Sans'] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group/btn"
              >
                <OfficialWhatsAppIcon className="w-6 h-6 shrink-0 text-white" />
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

