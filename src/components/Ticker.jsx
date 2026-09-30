import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const Ticker = () => {
  const manifestoItems = [
    "BRANDING 360°",
    "DISEÑO DE PACKAGING PREMIUM",
    "SOCIAL MEDIA METRICS",
    "ESTRATEGIA VISUAL B2B",
    "IMPRESIÓN EN GRAN FORMATO",
    "IDENTIDADES DIGITALES QUE CONVIERTEN",
    "DIRECCIÓN DE ARTE EDITORIAL"
  ];

  return (
    <div className="bg-gradient-to-r from-[#4b2a8d] via-[#6344a6] to-[#4b2a8d] py-4 overflow-hidden border-y border-[#845ec2]/40 shadow-inner">
      <div className="flex w-max animate-marquee space-x-8 items-center text-white font-['Outfit'] font-bold text-sm sm:text-base tracking-widest uppercase">
        {manifestoItems.concat(manifestoItems).map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ecdcff]" />
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#ecdcff]/50" />
          </div>
        ))}
      </div>
    </div>
  );
};
