import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Share2, Megaphone, Package, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = ({ onSelectModule, onGoHome }) => {
  const { getTotalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const cartCount = getTotalCount();

  const modulesList = [
    {
      id: 'm-01',
      slug: 'logos-identidad',
      number: '01',
      title: 'Logos',
      desc: 'Logotipos vectoriales, Isotipos y Manuales de Marca',
      badge: 'Branding',
      icon: Palette,
      color: 'text-purple-600 bg-purple-100',
    },
    {
      id: 'm-02',
      slug: 'social-media-ads',
      number: '02',
      title: 'Social Media',
      desc: 'Feeds de alto engagement y Community Mgmt',
      badge: 'Marketing',
      icon: Share2,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      id: 'm-03',
      slug: 'campanas-publicidad-print',
      number: '03',
      title: 'Diseño Publicitario',
      desc: 'Afiches, flyers institucionales, cartas y portadas',
      badge: 'Publicidad',
      icon: Megaphone,
      color: 'text-amber-600 bg-amber-100',
    },
    {
      id: 'm-04',
      slug: 'branding-packaging-360',
      number: '04',
      title: 'Branding',
      desc: 'Identidad de marca, empaques y merchandising',
      badge: 'Branding',
      icon: Package,
      color: 'text-pink-600 bg-pink-100',
    },
    {
      id: 'm-05',
      slug: 'brochure-inmobiliario',
      number: '05',
      title: 'Brochure',
      desc: 'Dossiers inmobiliarios y catálogos corporativos',
      badge: 'Brochure',
      icon: FileText,
      color: 'text-emerald-600 bg-emerald-100',
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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fdf8ff]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(43,27,84,0.06)] border-b border-[#cbc4d3]/30">
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <button
          onClick={(e) => handleHomeClick(e, '#hero')}
          className="group flex flex-col justify-center text-left transition-transform active:scale-[0.98]"
        >
          <span className="font-['Outfit'] font-bold text-2xl tracking-tight text-[#4b2a8d] group-hover:text-[#6344a6] transition-colors flex items-center gap-1.5">
            ROMINA RAFFO
            <span className="w-2 h-2 rounded-full bg-[#845ec2] animate-ping" />
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#494551] uppercase tracking-wider font-medium">
            Diseño Gráfico &amp; Gestión de Marketing Digital
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#f7f1ff] px-2 py-1.5 rounded-full shadow-inner border border-[#e6dffa]">

          <a
            href="#hero"
            onClick={(e) => handleHomeClick(e, '#hero')}
            className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#494551] hover:bg-[#ebe5ff] hover:text-[#1c192c] transition-all"
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            onClick={(e) => handleHomeClick(e, '#sobre-mi')}
            className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#494551] hover:bg-[#ebe5ff] hover:text-[#1c192c] transition-all"
          >
            Sobre Mí
          </a>

          {/* Submenu Dropdown Container on Mouse Hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={() => setIsDropdownHovered(false)}
          >
            <button
              className={`px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold transition-all flex items-center gap-1.5 ${isDropdownHovered
                ? 'bg-[#4b2a8d] text-white shadow-md'
                : 'text-[#4b2a8d] hover:bg-[#ebe5ff]'
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
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl p-2 shadow-xl border border-[#e6dffa] z-50 flex flex-col gap-1"
                >
                  <div className="flex flex-col gap-0.5">
                    {modulesList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleModuleClick(item.slug)}
                          className="w-full text-left px-2.5 py-2 rounded-xl hover:bg-[#f7f1ff] transition-all flex items-center gap-2.5 group/item border border-transparent hover:border-[#e6dffa]"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} shadow-sm group-hover/item:scale-105 transition-transform`}>
                            <IconComp className="w-4 h-4" />
                          </div>

                          <div className="flex items-center justify-between flex-1 min-w-0">
                            <span className="font-['Outfit'] font-bold text-sm text-[#1c192c] group-hover/item:text-[#4b2a8d] transition-colors truncate">
                              <span className="text-[#845ec2] text-xs mr-1 font-semibold">[{item.number}]</span>
                              {item.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#4b2a8d] opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" />
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
            className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#494551] hover:bg-[#ebe5ff] hover:text-[#1c192c] transition-all"
          >
            Currículum
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleHomeClick(e, '#contacto')}
            className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#494551] hover:bg-[#ebe5ff] hover:text-[#1c192c] transition-all"
          >
            Contacto
          </a>

        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#1c192c] hover:bg-[#f1ebff]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fdf8ff] border-b border-[#cbc4d3]/40 px-6 py-4 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto">
          <a
            href="#hero"
            onClick={(e) => handleHomeClick(e, '#hero')}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-[#1c192c] hover:bg-[#f1ebff]"
          >
            Inicio
          </a>

          {/* Mobile Modules Submenu Accordion */}
          <div className="border border-[#e6dffa] rounded-2xl p-3 bg-white">
            <button
              onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
              className="w-full flex items-center justify-between text-base font-bold text-[#4b2a8d]"
            >
              <span>Módulos de Especialidad (5)</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileModulesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileModulesOpen && (
              <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-[#f1ebff]">
                {modulesList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleModuleClick(item.slug)}
                    className="w-full text-left p-2.5 rounded-xl bg-[#f7f1ff] hover:bg-[#e6dffa] flex items-center justify-between text-sm font-semibold text-[#1c192c]"
                  >
                    <span>{item.number}. {item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#4b2a8d]" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#sobre-mi"
            onClick={(e) => handleHomeClick(e, '#sobre-mi')}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-[#1c192c] hover:bg-[#f1ebff]"
          >
            Sobre Mí
          </a>

          <a
            href="#curriculum"
            onClick={(e) => handleHomeClick(e, '#curriculum')}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-[#1c192c] hover:bg-[#f1ebff]"
          >
            Currículum
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleHomeClick(e, '#contacto')}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-[#1c192c] hover:bg-[#f1ebff]"
          >
            Contacto
          </a>

          <a
            href="https://wa.me/51922572935"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 rounded-full bg-[#4b2a8d] text-white font-semibold text-sm mt-3"
          >
            Contáctame por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};
