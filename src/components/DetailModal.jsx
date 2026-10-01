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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070510]/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#120b26]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-500/30 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeDetailModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-purple-700 transition-colors border border-purple-400/30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Media Column - Luminous Pearl Glass Mat for Contrast */}
          <div className="relative bg-gradient-to-b from-[#f8f6fc] via-[#f2ebfa] to-[#e8dff5] min-h-[260px] md:min-h-full flex items-center justify-center p-6 border-r border-purple-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_75%)] pointer-events-none" />
            <img
              src={activeModalProduct.image}
              alt={activeModalProduct.title}
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-purple-200 flex items-center gap-1 shadow border border-purple-400/30">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{activeModalProduct.rating} / 5.0</span>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                {activeModalProduct.category}
              </span>

              <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-white mt-3 uppercase">
                {activeModalProduct.title}
              </h3>

              <div className="font-['Outfit'] font-bold text-2xl text-purple-300 mt-2">
                S/ {activeModalProduct.price} <span className="text-xs font-normal text-purple-200/60">/ proyecto base</span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-sm text-purple-100/80 mt-3 leading-relaxed font-normal">
                {activeModalProduct.details || activeModalProduct.shortDescription}
              </p>

              {/* Specifications */}
              {activeModalProduct.specs && (
                <div className="mt-4 p-3 bg-white/5 rounded-xl border border-purple-500/20 text-xs space-y-1.5 text-purple-200">
                  <div><strong>Formato:</strong> {activeModalProduct.specs.format}</div>
                  <div><strong>Revisiones:</strong> {activeModalProduct.specs.revisions}</div>
                  <div><strong>Tiempo Estimado:</strong> {activeModalProduct.duration}</div>
                </div>
              )}

              {/* Deliverables List */}
              <div className="mt-4 space-y-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Entregables Incluidos:</span>
                {activeModalProduct.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-purple-200/80">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-4 pt-4 border-t border-purple-500/20">
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-purple-200">Módulos / Cantidad:</span>
                <div className="flex items-center border border-purple-400/30 rounded-full overflow-hidden bg-white/5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-white/10 hover:bg-purple-700 font-bold text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-white/10 hover:bg-purple-700 font-bold text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full min-h-[3.25rem] px-4 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all border border-purple-400/40 uppercase tracking-wider"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al Carrito</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[3.25rem] px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider"
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
