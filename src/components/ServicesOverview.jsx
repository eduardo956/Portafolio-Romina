import React from 'react';
import { Palette, MousePointerClick, BookOpen, Check } from 'lucide-react';
import { AnimatedLetters, FadeInUp, ScaleIn } from './AnimatedText';

export const ServicesOverview = () => {
  return (
    <section id="servicios" className="w-full max-w-[1280px] mx-auto px-5 md:px-12 py-16 md:py-24">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <FadeInUp delay={0.1}>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#655591]">
            ¿CÓMO PUEDO AYUDARTE?
          </span>
        </FadeInUp>
        
        <h2 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#1c192c] tracking-tight mt-2">
          <AnimatedLetters text="Servicios Especializados" delay={0.2} stagger={0.03} />
        </h2>

        <FadeInUp delay={0.3}>
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#494551] mt-2">
            Soluciones visuales y de rendimiento publicitario adaptadas a empresas emergentes y marcas consolidadas.
          </p>
        </FadeInUp>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Service 1 */}
        <ScaleIn delay={0.1}>
          <div className="h-full bg-white p-8 rounded-3xl shadow-md border border-[#e6dffa] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#6344a6] text-white flex items-center justify-center shadow-lg">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#1c192c]">Identidad Visual &amp; Branding</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] leading-relaxed">
                Construcción integral de marcas desde cero: conceptualización, diseño de logotipo, manual de normas de marca, tipografías corporativas, paleta de colores y lineamientos de aplicación física y digital.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Logotipos vectoriales</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Manual de Identidad de Marca</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Packaging y papelería comercial</li>
            </ul>
          </div>
        </ScaleIn>

        {/* Service 2 - Featured Card */}
        <ScaleIn delay={0.2}>
          <div className="h-full bg-[#4b2a8d] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl relative overflow-hidden group border border-[#845ec2]/40">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#ccbafd]/20 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#ccbafd] text-[#4b2a8d] flex items-center justify-center shadow-lg">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] uppercase tracking-wider text-[#ccbafd] font-extrabold">
                Servicio Estrella
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-white">Gestión de Meta Ads &amp; Social Media</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/80 leading-relaxed">
                Campañas pagadas de alto retorno en Facebook e Instagram. Segmentación estratégica de audiencias, diseño de anuncios de alto CTR y calendarización integral de contenidos.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-xs text-white/90 relative z-10">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ccbafd]" /> Campañas de Tráfico y Conversión</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ccbafd]" /> Creación y curación de contenido</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ccbafd]" /> Reportes de ROI y métricas clave</li>
            </ul>
          </div>
        </ScaleIn>

        {/* Service 3 */}
        <ScaleIn delay={0.3}>
          <div className="h-full bg-white p-8 rounded-3xl shadow-md border border-[#e6dffa] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#6842a5] text-white flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#1c192c]">Diseño Editorial &amp; Gran Formato</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] leading-relaxed">
                Material impreso y de soporte publicitario de calidad fotográfica. Desde brochures inmobiliarios y cartas gastronómicas hasta lonas de vía pública y material discográfico.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Brochures y Dossiers corporativos</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Cartas de restaurantes y señalética</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6344a6]" /> Gigantografías y banners publicitarios</li>
            </ul>
          </div>
        </ScaleIn>

      </div>

    </section>
  );
};
