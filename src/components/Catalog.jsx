import React, { useState } from 'react';
import { Eye, Plus, Star, ArrowUpRight } from 'lucide-react';
import { productsData, categoriesList } from '../data/products';
import { useCart } from '../context/CartContext';
import { useModal } from '../context/ModalContext';
import { whatsappConfig } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { openDetailModal } = useModal();

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 bg-[#fdf8ff] text-[#1c192c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#6344a6] bg-[#f1ebff] px-4 py-1.5 rounded-full border border-[#d7c4ff]">
            Portafolio & Servicios
          </span>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold mt-4 text-[#1c192c]">
            Catálogo de Soluciones Visuales
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#494551] mt-3">
            Explora casos de estudio destacados y selecciona los módulos de diseño que tu empresa necesita.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#6344a6] text-white shadow-md shadow-[#6344a6]/30 scale-105'
                  : 'bg-[#f1ebff] text-[#494551] hover:bg-[#e6dffa] hover:text-[#1c192c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#e6dffa] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f1ff]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1c192c]/80 backdrop-blur-md text-[#d7c4ff] text-xs font-semibold px-3 py-1 rounded-full border border-[#6344a6]/30">
                    {product.categoryLabel}
                  </div>
                  
                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1c192c] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-['Outfit'] font-bold text-2xl text-[#1c192c] group-hover:text-[#6344a6] transition-colors">
                    {product.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#494551] mt-2 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Key Deliverables Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.deliverables.map((item, idx) => (
                      <span key={idx} className="text-xs bg-[#f7f1ff] text-[#574782] px-2.5 py-1 rounded-md font-medium border border-[#e6dffa]">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[#f1ebff] flex items-center justify-between gap-4 mt-auto">
                <div>
                  <span className="text-xs text-[#7a7583] block font-['Plus_Jakarta_Sans']">Precio Estimado</span>
                  <span className="font-['Outfit'] font-extrabold text-2xl text-[#4b2a8d]">
                    S/ {product.price}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openDetailModal(product)}
                    className="p-3 rounded-full bg-[#f1ebff] hover:bg-[#e6dffa] text-[#4b2a8d] transition-colors"
                    title="Vista Rápida"
                  >
                    <Eye className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#6344a6] hover:bg-[#4b2a8d] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm shadow-md transition-all hover:scale-105"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Añadir</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
