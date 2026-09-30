import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp } from './AnimatedText';

export const OfficialWhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export const ContactSection = () => {
  return (
    <section id="contacto" className="w-full max-w-[1280px] mx-auto px-5 md:px-12 py-12 flex justify-center items-center">
      <FadeInUp delay={0.1} className="w-full">
        <div className="relative w-full rounded-[2.5rem] bg-[#241740] p-6 sm:p-10 border border-[#3d2766]/60 shadow-2xl overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 group">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#845ec2]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Column: Title & Subtitle */}
          <div className="flex flex-col gap-2 relative z-10 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#a892d6] font-semibold">
                CONTACTO DIRECTO
              </span>
            </div>

            <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              ¿Listos para <span className="text-[#c0a2fd]">potenciar tu marca?</span>
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#cdc3e3] leading-relaxed">
              Conversemos sobre tu proyecto y coordinemos cotizaciones sin compromiso.
            </p>
          </div>

          {/* Right Column: Official WhatsApp CTA Button */}
          <div className="relative z-10 shrink-0">
            <a
              href="https://wa.me/51922572935"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base shadow-[0_4px_24px_rgba(16,185,129,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              <OfficialWhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Contactar por WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

        </div>
      </FadeInUp>
    </section>
  );
};
