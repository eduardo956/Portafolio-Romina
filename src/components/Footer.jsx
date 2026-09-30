import React from 'react';
import { MessageCircle, Mail, Camera, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f1ff] shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-t border-[#e6dffa]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-['Outfit'] font-bold text-2xl text-[#4b2a8d] tracking-tight">
              ROMINA RAFFO
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#655591] uppercase tracking-widest">
              Diseño Gráfico &amp; Estrategia Digital
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] max-w-md mt-1 leading-relaxed">
              Giulianna Romina Raffo | Portafolio Profesional 2026. Creando identidades visuales contundentes y campañas de marketing digital que conectan marcas con su audiencia de alto impacto.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#1c192c] uppercase tracking-wider">
              Navegación
            </span>
            <nav className="flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">
              <a href="#hero" className="hover:text-[#4b2a8d] transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-[#4b2a8d] transition-colors">Sobre Mí</a>
              <a href="#proyectos" className="hover:text-[#4b2a8d] transition-colors">Proyectos &amp; Casos de Éxito</a>
              <a href="#servicios" className="hover:text-[#4b2a8d] transition-colors">Servicios Especializados</a>
              <a href="#curriculum" className="hover:text-[#4b2a8d] transition-colors">Currículum Profesional</a>
              <a href="#contacto" className="hover:text-[#4b2a8d] transition-colors">Contacto Directo</a>
            </nav>
          </div>

          {/* Direct Contact Links */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#1c192c] uppercase tracking-wider">
              Contacto Directo
            </span>
            <div className="flex flex-col gap-3 font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">
              <a
                href="https://wa.me/51922572935"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4b2a8d] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#4b2a8d]" />
                <span>WhatsApp: +51 922 572 935</span>
              </a>

              <a
                href="mailto:giulir109@gmail.com"
                className="flex items-center gap-2 hover:text-[#4b2a8d] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#4b2a8d]" />
                <span>giulir109@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/romina_raffo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4b2a8d] transition-colors"
              >
                <Camera className="w-4 h-4 text-[#4b2a8d]" />
                <span>@romina_raffo</span>
              </a>

              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#4b2a8d] animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#655591] font-semibold uppercase">
                  Disponible para proyectos 2026
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white px-6 py-4 rounded-2xl border border-[#e6dffa]">
          <p className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#494551]">
            © 2026 Giulianna Romina Raffo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#494551]">
            <span>Diseño Gráfico • Branding • Estrategia Digital</span>
            <Sparkles className="w-3.5 h-3.5 text-[#4b2a8d]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
