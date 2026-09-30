import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Share2, Megaphone, Package, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = ({ onSelectModule, onGoHome }) => {
  const { getTotalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const modulesList = [
    {
      id: 'm-01',
      slug: 'logos-identidad',
      number: '01',
      title: 'Logos',
      desc: 'Logotipos vectoriales, Isotipos y Manuales de Marca',
      badge: 'Branding',
      icon: Palette,
      color: 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
    },
    {
      id: 'm-02',
      slug: 'social-media-ads',
      number: '02',
      title: 'Social Media',
      desc: 'Feeds de alto engagement y Community Mgmt',
      badge: 'Marketing',
      icon: Share2,
      color: 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
    },
    {
      id: 'm-03',
      slug: 'campanas-publicidad-print',
      number: '03',
      title: 'Diseño Publicitario',
      desc: 'Afiches, flyers institucionales, cartas y portadas',
      badge: 'Publicidad',
      icon: Megaphone,
      color: 'text-amber-400 bg-amber-500/20 border border-amber-500/30',
    },
    {
      id: 'm-04',
      slug: 'branding-packaging-360',
      number: '04',
      title: 'Branding',
      desc: 'Identidad de marca, empaques y merchandising',
      badge: 'Branding',
      icon: Package,
      color: 'text-pink-400 bg-pink-500/20 border border-pink-500/30',
    },
    {
      id: 'm-05',
      slug: 'brochure-inmobiliario',
      number: '05',
      title: 'Brochure',
      desc: 'Dossiers inmobiliarios y catálogos corporativos',
      badge: 'Brochure',
      icon: FileText,
      color: 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
    },
  ];

  const handleModuleClick = (slug) => {
    setIsDropdownHovered(false);
    setMobileMenuOpen(false);
    if (onSelectModule) {
      onSelectModule(slug);
    }
  };

  const handleHomeClick = (e, hash) => {
    if (onGoHome) {
      onGoHome();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#090713]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <button
          onClick={(e) => handleHomeClick(e, '#hero')}
          className="group flex flex-col justify-center text-left transition-transform active:scale-[0.98]"
        >
          <span className="font-['Syne'] font-extrabold text-2xl tracking-tight text-white group-hover:text-[#c084fc] transition-colors flex items-center gap-2">
            ROMINA RAFFO
            <span className="w-2.5 h-2.5 rounded-full bg-[#ec4899] animate-ping" />
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-200/70 uppercase tracking-widest font-semibold">
            Diseño Gráfico &amp; Gestión de Marketing Digital
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-xl">

          <a
            href="#hero"
            onClick={(e) => handleHomeClick(e, '#hero')}
            className="px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            onClick={(e) => handleHomeClick(e, '#sobre-mi')}
            className="px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Sobre Mí
          </a>

          {/* Submenu Dropdown Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={() => setIsDropdownHovered(false)}
          >
            <button
              className={`px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${isDropdownHovered
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-purple-300 hover:bg-white/10'
                }`}
            >
              <span>Proyectos</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownHovered ? 'rotate-180' : ''}`} />
            </button>

            {/* Hover Submenu Dropdown Card */}
            <AnimatePresence>
              {isDropdownHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-[#0f0b1e]/95 backdrop-blur-2xl rounded-2xl p-2.5 shadow-2xl border border-white/15 z-50 flex flex-col gap-1"
                >
                  <div className="flex flex-col gap-1">
                    {modulesList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleModuleClick(item.slug)}
                          className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center gap-3 group/item border border-transparent hover:border-white/10"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} shadow-sm group-hover/item:scale-105 transition-transform`}>
                            <IconComp className="w-4 h-4" />
                          </div>

                          <div className="flex items-center justify-between flex-1 min-w-0">
                            <span className="font-['Outfit'] font-bold text-sm text-white group-hover/item:text-purple-300 transition-colors truncate">
                              <span className="text-pink-400 text-xs mr-1 font-mono">[{item.number}]</span>
                              {item.title}
                            </span>
                            <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#curriculum"
            onClick={(e) => handleHomeClick(e, '#curriculum')}
            className="px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Currículum
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleHomeClick(e, '#contacto')}
            className="px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Contacto
          </a>

        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/15"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0f0b1e]/98 backdrop-blur-2xl border-b border-white/15 px-6 py-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          <a
            href="#hero"
            onClick={(e) => handleHomeClick(e, '#hero')}
            className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
          >
            Inicio
          </a>

          {/* Mobile Modules Submenu Accordion */}
          <div className="border border-white/15 rounded-2xl p-4 bg-white/5">
            <button
              onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
              className="w-full flex items-center justify-between text-base font-extrabold text-purple-300"
            >
              <span>Módulos de Especialidad (5)</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileModulesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileModulesOpen && (
              <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/10">
                {modulesList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleModuleClick(item.slug)}
                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-sm font-bold text-white border border-white/10"
                  >
                    <span>{item.number}. {item.title}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#sobre-mi"
            onClick={(e) => handleHomeClick(e, '#sobre-mi')}
            className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
          >
            Sobre Mí
          </a>

          <a
            href="#curriculum"
            onClick={(e) => handleHomeClick(e, '#curriculum')}
            className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
          >
            Currículum
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleHomeClick(e, '#contacto')}
            className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
          >
            Contacto
          </a>

          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm mt-4 shadow-lg"
          >
            Contáctame por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

