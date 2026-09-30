// Modelo de Datos de Servicios / Proyectos de Romina Raffo Portfolio

export const productsData = [
  {
    id: "proj-01",
    title: "Identidad Visual & Logos Minimalistas (RAFFIKI)",
    category: "Branding",
    categoryLabel: "Identidad de Marca",
    price: 1200,
    shortDescription: "Diseño de marca 360°, mascarillas personalizadas, tarjetas y empaques minimalistas.",
    image: "/images/branding/raffiki_branding.jpg",
    rating: 5.0,
    deliverables: ["Manual de Marca PDF", "Logotipos Vectoriales (AI, SVG, PNG)", "Diseño de Papelería & Merchandising", "Sustratos Impresos"],
    duration: "2 a 3 semanas",
    specs: {
      format: "Archivos Vectoriales Habilitados",
      revisions: "Ilimitadas en fase conceptual",
      delivery: "Vía Google Drive Privado"
    },
    details: "El desarrollo de Identidad Visual RAFFIKI combina líneas audaces en blanco y negro con detalles contemporáneos. Solución fresca adaptada a la nueva normalidad y productos de protección personal."
  },
  {
    id: "proj-02",
    title: "Branding Romántico & Regalos (MOIS)",
    category: "Branding",
    categoryLabel: "Regalos & Social",
    price: 1350,
    shortDescription: "Sistema visual romántico para tienda de regalos, empaques pastel, pins e integración de feed de Instagram.",
    image: "/images/branding/mois_branding.jpg",
    rating: 4.9,
    deliverables: ["Identidad Visual Completa", "Diseño de Cajas de Regalo", "Templates de Feed de Instagram", "Tarjetas de Felicitación"],
    duration: "2 semanas",
    specs: {
      format: "AI, PNG, PSD Mockups",
      revisions: "3 rondas completas",
      delivery: "Drive + Kit Imprenta"
    },
    details: "MOIS es una marca pensada para conectar emocionalmente. Utiliza una gama cálida de rosados y rojos con tipografía curva caligráfica y elementos fotográficos de alta sensibilidad."
  },
  {
    id: "proj-03",
    title: "Urban Street Brand (GUACHANEO)",
    category: "Branding",
    categoryLabel: "Moda & Cultura Urbana",
    price: 1500,
    shortDescription: "Identidad de marca urbana con tipografía 3D, elementos icónicos en berenjena y durazno, merchandising y gorras.",
    image: "/images/branding/guachane_branding.jpg",
    rating: 5.0,
    deliverables: ["Branding 3D y Tipografía Custom", "Diseño de Gorras & Poleras", "Posters publicitarios", "Brand Guidelines"],
    duration: "3 semanas",
    specs: {
      format: "Vectores + Modelos 3D 4K",
      revisions: "Rondas libres",
      delivery: "Figma + Cloud"
    },
    details: "GUACHANEO transmite la vibración y el ritmo de la cultura urbana. Un concepto atrevido, moderno e innovador con aplicaciones para indumentaria y cartelería."
  },
  {
    id: "proj-04",
    title: "Branding 360° & Packaging de Lujo",
    category: "Packaging",
    categoryLabel: "Diseño de Empaque",
    price: 1800,
    shortDescription: "Empaques galardonados, troquelados personalizados, acabados en pan de oro/uv y mockups 3D hiperrealistas.",
    image: "/images/packaging/packaging_hero.jpg",
    rating: 4.9,
    deliverables: ["Planos Mecánicos para Imprenta", "Mockups 3D 4K", "Guía de Acabados Especiales", "Asesoría con Proveedores"],
    duration: "3 a 4 semanas",
    specs: {
      format: "PDF Mecánico Imprenta + PSD Mockups",
      revisions: "3 rondas de ajustes estructurales",
      delivery: "Físico & Digital"
    },
    details: "Packaging creado para cautivar en anaquel y e-commerce. Enfoque sostenible, selección de sustratos premium y optimización de costos de producción industrial."
  },
  {
    id: "proj-05",
    title: "Social Media & Meta Ads Strategy",
    category: "Marketing Visual",
    categoryLabel: "Publicidad Digital",
    price: 950,
    shortDescription: "Kits de anuncios de alta conversión para Meta Ads, carruseles educativos y templates para Instagram Stories.",
    image: "/images/social/social_hero.jpg",
    rating: 5.0,
    deliverables: ["15 Templates de Feed en Canva/Figma", "10 Visuales Animados para Meta Ads", "Estrategia de Copywriting", "Filtro de Marca AR"],
    duration: "1 a 2 semanas",
    specs: {
      format: "Figma Kits + MP4 + PNG High-Res",
      revisions: "2 rondas completas",
      delivery: "Figma Link + Cloud Drive"
    },
    details: "Imágenes optimizadas para maximizar el CTR y ROAS en campañas pagadas. Estética pulida en púrpura cósmico que destaca inmediatamente en el feed."
  },
  {
    id: "proj-06",
    title: "Diseño Publicitario & Gran Formato",
    category: "Impresión",
    categoryLabel: "Vallas & Banners",
    price: 1400,
    shortDescription: "Vallas publicitarias, señalética corporativa, stands de feria e iluminación de marca a gran escala.",
    image: "/images/print/billboard_hero.jpg",
    rating: 4.8,
    deliverables: ["Archivos a escala real CMYK", "Pruebas de Color Calibradas", "Supervisión de Instalación"],
    duration: "2 semanas",
    specs: {
      format: "TIFF / EPS Gran Formato 300 DPI",
      revisions: "2 rondas",
      delivery: "Servidor FTP / Drive"
    },
    details: "Impacto urbano garantizado. Selección de contrastes tipográficos de alta visibilidad diurna y nocturna para exteriores."
  }
];

export const categoriesList = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "Branding", label: "Branding & Logos" },
  { id: "Packaging", label: "Packaging" },
  { id: "Marketing Visual", label: "Social Media & Ads" },
  { id: "Impresión", label: "Gran Formato" }
];
