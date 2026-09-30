import React, { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useCart } from '../context/CartContext';
import { whatsappConfig } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const DetailModal = () => {
  const { activeModalProduct, closeDetailModal } = useModal();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [activeModalProduct]);

  if (!activeModalProduct) return null;

  const handleAddToCart = () => {
    addToCart(activeModalProduct, quantity);
    closeDetailModal();
  };

  const directWhatsAppUrl = whatsappConfig.getWhatsAppUrl(
    whatsappConfig.buildProductMessage(activeModalProduct)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c192c]/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-[#e6dffa] text-[#1c192c]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeDetailModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1c192c]/60 text-white hover:bg-[#1c192c] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Media Column */}
          <div className="relative bg-[#f7f1ff] min-h-[260px] md:min-h-full">
            <img
              src={activeModalProduct.image}
              alt={activeModalProduct.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#6344a6] flex items-center gap-1 shadow">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{activeModalProduct.rating} / 5.0</span>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6344a6] bg-[#f1ebff] px-3 py-1 rounded-full border border-[#d7c4ff]">
                {activeModalProduct.category}
              </span>

              <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-[#1c192c] mt-3">
                {activeModalProduct.title}
              </h3>

              <div className="font-['Outfit'] font-bold text-2xl text-[#4b2a8d] mt-2">
                S/ {activeModalProduct.price} <span className="text-xs font-normal text-[#7a7583]">/ proyecto base</span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#494551] mt-3 leading-relaxed">
                {activeModalProduct.details || activeModalProduct.shortDescription}
              </p>

              {/* Specifications */}
              {activeModalProduct.specs && (
                <div className="mt-4 p-3 bg-[#fdf8ff] rounded-xl border border-[#e6dffa] text-xs space-y-1.5 text-[#574782]">
                  <div><strong>Formato:</strong> {activeModalProduct.specs.format}</div>
                  <div><strong>Revisiones:</strong> {activeModalProduct.specs.revisions}</div>
                  <div><strong>Tiempo Estimado:</strong> {activeModalProduct.duration}</div>
                </div>
              )}

              {/* Deliverables List */}
              <div className="mt-4 space-y-2">
                <span className="text-xs font-bold text-[#1c192c] block">Entregables Incluidos:</span>
                {activeModalProduct.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#494551]">
                    <CheckCircle2 className="w-4 h-4 text-[#6344a6]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-4 pt-4 border-t border-[#f1ebff]">
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#1c192c]">Módulos / Cantidad:</span>
                <div className="flex items-center border border-[#cbc4d3] rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-[#f7f1ff] hover:bg-[#e6dffa] font-bold text-[#1c192c]"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-[#f7f1ff] hover:bg-[#e6dffa] font-bold text-[#1c192c]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full min-h-[3.25rem] px-4 py-3 rounded-full bg-[#6344a6] hover:bg-[#4b2a8d] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al Carrito</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[3.25rem] px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Consultar WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
