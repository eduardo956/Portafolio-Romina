import React from 'react';
import { Mail, MapPin, Building, PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { whatsappConfig } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon, LinkedinIcon } from './icons/SocialIcons';

export const ContactB2B = () => {
  return (
    <section id="contact" className="py-20 bg-[#1c192c] text-white relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6344a6]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#d7c4ff] bg-[#312e42] px-4 py-1.5 rounded-full border border-[#845ec2]/40">
            Atención Directa B2B
          </span>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold mt-4 text-white">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#e6dffa] mt-3">
            Conéctate directamente con Romina Raffo para briefing de marca, licitaciones corporativas o propuestas de diseño.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Direct */}
          <div className="bg-[#312e42]/80 backdrop-blur-md rounded-3xl p-8 border border-[#6344a6]/40 flex flex-col justify-between hover:border-[#25D366] transition-colors group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-6 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-8 h-8 fill-current" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-2xl text-white">WhatsApp Oficial</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#cbc4d3] mt-2">
                Respuesta rápida en menos de 2 horas. Asesoría directa y cotizaciones inmediatas.
              </p>
              <div className="font-['Outfit'] font-extrabold text-xl text-white mt-4">
                {companyInfo.phone}
              </div>
            </div>

            <a
              href={whatsappConfig.getWhatsAppUrl("¡Hola Romina! Quisiera agendar una llamada de briefing B2B.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Iniciar Chat de WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Instagram Portfolio */}
          <div className="bg-[#312e42]/80 backdrop-blur-md rounded-3xl p-8 border border-[#6344a6]/40 flex flex-col justify-between hover:border-[#E1306C] transition-colors group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C] mb-6 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-8 h-8" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-2xl text-white">Instagram Studio</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#cbc4d3] mt-2">
                Mira el proceso detrás de cámara, bocetos de empaques y reels de identidad visual.
              </p>
              <div className="font-['Outfit'] font-extrabold text-xl text-white mt-4">
                @rominaraffodesign
              </div>
            </div>

            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-full bg-[#E1306C] hover:bg-[#c8245b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Ver Instagram Studio</span>
            </a>
          </div>

          {/* Card 3: Canal B2B / Corporativo */}
          <div className="bg-[#312e42]/80 backdrop-blur-md rounded-3xl p-8 border border-[#6344a6]/40 flex flex-col justify-between hover:border-[#845ec2] transition-colors group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#845ec2]/20 flex items-center justify-center text-[#d7c4ff] mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-2xl text-white">Canal Corporativo B2B</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#cbc4d3] mt-2">
                Para facturación electrónica, órdenes de compra RUC y licitaciones de agencia.
              </p>
              <div className="text-xs text-[#cbc4d3] space-y-1 mt-4">
                <div><strong>RUC:</strong> {companyInfo.ruc}</div>
                <div><strong>Oficina:</strong> {companyInfo.address}</div>
                <div><strong>Email:</strong> {companyInfo.email}</div>
              </div>
            </div>

            <a
              href={`mailto:${companyInfo.email}?subject=Consulta%20Corporativa%20RUC`}
              className="mt-8 w-full py-3.5 rounded-full bg-[#6344a6] hover:bg-[#4b2a8d] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar Correo B2B</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
