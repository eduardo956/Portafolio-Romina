import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Building, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    sendWhatsAppCheckout
  } = useCart();

  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');

  if (!isCartOpen) return null;

  const total = getTotalPrice();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    sendWhatsAppCheckout({ company, address });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1c192c]/75 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-[#1c192c]">
          
          {/* Header */}
          <div className="p-6 bg-[#1c192c] text-white flex items-center justify-between border-b border-[#6344a6]/30">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#d7c4ff]" />
              <h2 className="font-['Outfit'] font-bold text-xl">Cotizador de Servicios</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-[#312e42] text-[#e6dffa]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Scrollable Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#f1ebff]">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-[#cbc4d3] mx-auto opacity-50" />
                <p className="font-['Plus_Jakarta_Sans'] text-base text-[#7a7583]">
                  Tu cotizador está vacío. Añade proyectos o módulos desde el catálogo.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-xl border border-[#e6dffa]"
                  />
                  <div className="flex-1">
                    <h4 className="font-['Outfit'] font-bold text-base text-[#1c192c] leading-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#6344a6] font-medium block mt-0.5">
                      S/ {item.price} c/u
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-[#f1ebff] hover:bg-[#e6dffa] font-bold text-xs flex items-center justify-center text-[#1c192c]"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold px-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-[#f1ebff] hover:bg-[#e6dffa] font-bold text-xs flex items-center justify-center text-[#1c192c]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-['Outfit'] font-bold text-base text-[#4b2a8d] block">
                      S/ {item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 mt-1 inline-block"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Controls */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#fdf8ff] border-t border-[#e6dffa] space-y-4">
              
              {/* Optional Client Data Inputs */}
              <div className="space-y-3">
                <div className="relative">
                  <Building className="w-4 h-4 text-[#7a7583] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    placeholder="Empresa / Negocio (Opcional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#cbc4d3] text-xs focus:ring-2 focus:ring-[#6344a6] outline-none"
                  />
                </div>

                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#7a7583] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    placeholder="Dirección / Ciudad (Opcional)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#cbc4d3] text-xs focus:ring-2 focus:ring-[#6344a6] outline-none"
                  />
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex items-center justify-between pt-2 border-t border-[#e6dffa]">
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#494551]">
                  Subtotal Estimado:
                </span>
                <span className="font-['Outfit'] font-extrabold text-2xl text-[#4b2a8d]">
                  S/ {total}
                </span>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Enviar Cotización a WhatsApp</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-[#7a7583] hover:text-red-500 font-medium"
              >
                Vaciar Cotizador
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
