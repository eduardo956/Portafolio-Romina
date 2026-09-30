import React from 'react';
import { MessageCircle, Mail, Camera, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#080512] text-white border-t border-purple-500/20 relative z-10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-['Outfit'] font-extrabold text-2xl text-white tracking-tight uppercase">
              ROMINA RAFFO
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-purple-300 uppercase tracking-widest">
              Diseño Gráfico &amp; Estrategia Digital
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-purple-200/70 max-w-md mt-1 leading-relaxed font-normal">
              Giulianna Romina Raffo | Portafolio Profesional 2026. Creando identidades visuales contundentes, empaques estratégicos y campañas publicitarias en Meta Ads.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-purple-300 uppercase tracking-wider">
              Navegación
            </span>
            <nav className="flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-xs text-purple-200/80 font-medium">
              <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
              <a href="#proyectos" className="hover:text-white transition-colors">Proyectos &amp; Casos de Éxito</a>
              <a href="#curriculum" className="hover:text-white transition-colors">Currículum Profesional</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a>
            </nav>
          </div>

          {/* Direct Contact Links */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-purple-300 uppercase tracking-wider">
              Contacto Directo
            </span>
            <div className="flex flex-col gap-3 font-['Plus_Jakarta_Sans'] text-xs text-purple-200/90 font-medium">
              <a
                href="https://wa.me/51922572935"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-purple-300" />
                <span>WhatsApp: +51 922 572 935</span>
              </a>

              <a
                href="mailto:giulir109@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-300" />
                <span>giulir109@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/romina_raffo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Camera className="w-4 h-4 text-purple-300" />
                <span>@romina_raffo</span>
              </a>

              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-300 font-bold uppercase tracking-wider">
                  Disponible para proyectos 2026
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-purple-500/20">
          <p className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-200/60 font-normal">
            © 2026 Giulianna Romina Raffo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-200 font-semibold">
            <span>DISEÑO GRÁFICO • BRANDING • META ADS</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          </div>
        </div>

      </div>
    </footer>
  );
};


