// Configuración centralizada de WhatsApp para Romina Raffo Portfolio

export const whatsappConfig = {
  phoneNumber: "51922572935", // Número de contacto directo
  defaultGreeting: "¡Hola Romina! Me interesa contratar tus servicios de diseño y estrategia visual.",

  // Genera mensaje para consulta rápida de proyecto/servicio
  buildProductMessage: (product) => {
    return `¡Hola Romina! Me interesa el servicio/proyecto: *${product.title}* (${product.category}). Quisiera cotizar un proyecto similar.`;
  },

  // Genera mensaje para paquetes o combos
  buildPackageMessage: (pkg) => {
    return `¡Hola Romina! Quisiera solicitar información sobre el paquete: *${pkg.name}* (Precio aprox: S/ ${pkg.price}).`;
  },

  // Genera mensaje estructurado para checkout del Carrito / Cotizador
  buildCartCheckoutMessage: (cartItems, total, clientData = {}) => {
    let message = `*SOLICITUD DE COTIZACIÓN - ROMINA RAFFO PORTFOLIO*\n`;
    message += `-------------------------------------------\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   • Cantidad/Módulos: ${item.quantity}\n`;
      message += `   • Precio Unitario: S/ ${item.price}\n`;
      message += `   • Subtotal: S/ ${item.price * item.quantity}\n\n`;
    });

    message += `-------------------------------------------\n`;
    message += `*ESTIMADO TOTAL: S/ ${total}*\n`;

    if (clientData.address || clientData.company) {
      message += `\n*Datos del Cliente/Empresa:*\n`;
      if (clientData.company) message += `• Empresa: ${clientData.company}\n`;
      if (clientData.address) message += `• Ubicación/Dirección: ${clientData.address}\n`;
    }

    message += `\nFecha de Solicitud: ${new Date().toLocaleDateString('es-PE')}\n`;
    message += `¡Quedo a la espera de tu respuesta para iniciar el briefing!`;

    return message;
  },

  // Genera enlace codificado
  getWhatsAppUrl: (messageText) => {
    const encoded = encodeURIComponent(messageText || whatsappConfig.defaultGreeting);
    return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encoded}`;
  }
};
