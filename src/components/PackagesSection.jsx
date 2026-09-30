import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { packagesData } from '../data/packages';
import { whatsappConfig } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-[#fdf8ff] text-[#1c192c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#6344a6] bg-[#f1ebff] px-4 py-1.5 rounded-full border border-[#d7c4ff]">
            Paquetes & Ofertas Especiales
          </span>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold mt-4 text-[#1c192c]">
            Soluciones Integrales para Tu Empresa
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#494551] mt-3">
            Elige el paquete que mejor se adapte a tu etapa de crecimiento y solicita atención inmediata por WhatsApp.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const packageWhatsAppUrl = whatsappConfig.getWhatsAppUrl(
              whatsappConfig.buildPackageMessage(pkg)
            );

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#312e42] to-[#1c192c] text-white shadow-2xl scale-105 border-2 border-[#845ec2]'
                    : 'bg-white text-[#1c192c] border border-[#e6dffa] shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md ${
                      pkg.highlight
                        ? 'bg-[#845ec2] text-white'
                        : 'bg-[#f1ebff] text-[#6344a6] border border-[#d7c4ff]'
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-['Outfit'] font-bold text-2xl mt-2">{pkg.name}</h3>
                  <p
                    className={`font-['Plus_Jakarta_Sans'] text-sm mt-3 ${
                      pkg.highlight ? 'text-[#e6dffa]' : 'text-[#494551]'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-8 pb-6 border-b border-gray-200/20">
                    <span className="font-['Outfit'] font-extrabold text-4xl">S/ {pkg.price}</span>
                    <span
                      className={`text-xs font-normal ml-2 ${
                        pkg.highlight ? 'text-[#d7c4ff]' : 'text-[#7a7583]'
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            pkg.highlight ? 'text-[#d7c4ff]' : 'text-[#6344a6]'
                          }`}
                        />
                        <span className={pkg.highlight ? 'text-[#f4eeff]' : 'text-[#494551]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={packageWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 ${
                    pkg.highlight
                      ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white'
                      : 'bg-[#6344a6] hover:bg-[#4b2a8d] text-white'
                  }`}
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>{pkg.ctaText}</span>
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
