import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Grid, CheckCircle2 } from 'lucide-react';
import { AnimatedLetters, FadeInUp, ScaleIn } from './AnimatedText';

export const Curriculum = () => {
  return (
    <section id="curriculum" className="w-full bg-[#f7f1ff] py-16 md:py-24 px-5 md:px-12 border-y border-[#e6dffa]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <FadeInUp delay={0.1}>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#655591]">
              TRAYECTORIA Y HABILIDADES
            </span>
          </FadeInUp>
          
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#1c192c] tracking-tight mt-2">
            <AnimatedLetters text="Currículum Profesional" delay={0.2} stagger={0.03} />
          </h2>

          <FadeInUp delay={0.3}>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#494551] mt-2">
              Una combinación sólida de formación académica formal en Marketing Estratégico y Diseño Digital con experiencia operativa en agencias y empresas reales.
            </p>
          </FadeInUp>
        </div>

        {/* Resume Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Experiencia Laboral (7 cols) */}
          <FadeInUp delay={0.2} className="lg:col-span-7">
            <div className="h-full bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-[#e6dffa] flex flex-col gap-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f1ebff] flex items-center justify-center text-[#4b2a8d]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-['Outfit'] font-bold text-2xl text-[#1c192c]">Experiencia Laboral</h3>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-8 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e6dffa]">
                
                {/* Item 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative flex flex-col gap-1"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4b2a8d] ring-4 ring-[#eaddff]" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-[#4b2a8d] tracking-wide">2024 - 2026</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f1ebff] text-[0.6875rem] text-[#655591] font-bold uppercase">
                      AGENCIA DE MARKETING
                    </span>
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-lg text-[#1c192c]">YALA MKT</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] leading-relaxed">
                    <strong>Jefa de Cuentas:</strong> Coordinación integral de clientes corporativos (Cassinelli, Ceresita, Alianza Lima). Diseño gráfico publicitario, dirección de arte y edición audiovisual para campañas de alto impacto.
                  </p>
                </motion.div>

                {/* Item 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative flex flex-col gap-1"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#655591]" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-[#655591] tracking-wide">2023 - 2024</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f1ebff] text-[0.6875rem] text-[#655591] font-bold uppercase">
                      GASTRONOMÍA
                    </span>
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-lg text-[#1c192c]">EL CORDÓN Y LA ROSA</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] leading-relaxed">
                    <strong>Marketing y Diseño Gráfico:</strong> Relaciones corporativas, renovación de cartas y menús impresos, gestión de redes sociales y eventos corporativos del restaurante.
                  </p>
                </motion.div>

                {/* Item 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative flex flex-col gap-1"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#cbc4d3]" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-[#7a7583] tracking-wide">2021 - 2023</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f1ebff] text-[0.6875rem] text-[#655591] font-bold uppercase">
                      INMOBILIARIA
                    </span>
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-lg text-[#1c192c]">VILANOVA ASESORÍA INMOBILIARIA</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551] leading-relaxed">
                    <strong>Community Manager &amp; Content Creator:</strong> Creación de brochures institucionales, catálogos de proyectos inmobiliarios y generación de prospectos vía pautas Meta Ads.
                  </p>
                </motion.div>

                {/* Item 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative flex flex-col gap-1"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#cbc4d3]" />
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-[#7a7583] tracking-wide">2018 - 2019</span>
                  <h4 className="font-['Outfit'] font-bold text-lg text-[#1c192c]">MARBELLA INMOBILIARIA • OH!25</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#494551]">
                    Diseño digital, creación de contenidos para plataformas sociales y soporte creativo en agencias.
                  </p>
                </motion.div>

              </div>
            </div>
          </FadeInUp>

          {/* Column 2: Educación + Software + Idiomas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Formación Académica Card */}
            <ScaleIn delay={0.2}>
              <div className="bg-white p-6 rounded-3xl shadow-md border border-[#e6dffa] flex flex-col gap-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1ebff] flex items-center justify-center text-[#4b2a8d]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Outfit'] font-bold text-xl text-[#1c192c]">Educación</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="p-3 rounded-xl bg-[#f7f1ff] border border-[#e6dffa]">
                    <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#4b2a8d] font-bold">2022 - 2025</span>
                    <h4 className="font-['Outfit'] font-semibold text-base text-[#1c192c]">Zegel IPAE</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">Bachiller Profesional en Gestión Estratégica de Marketing</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#f7f1ff] border border-[#e6dffa]">
                    <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-[#655591] font-bold">2018 - 2021</span>
                    <h4 className="font-['Outfit'] font-semibold text-base text-[#1c192c]">SENATI</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#494551]">Carrera Técnica Profesional en Diseño Gráfico Digital</p>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Software Proficiency */}
            <ScaleIn delay={0.3}>
              <div className="bg-white p-6 rounded-3xl shadow-md border border-[#e6dffa] flex flex-col gap-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Grid className="w-5 h-5 text-[#4b2a8d]" />
                    <h3 className="font-['Outfit'] font-bold text-base text-[#1c192c]">Software &amp; Herramientas</h3>
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase text-[#655591]">Dominio Experto</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {['Ps', 'Ai', 'Pr', 'An'].map((sw, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      key={idx}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#f7f1ff] border border-[#e6dffa]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#6344a6]/10 text-[#4b2a8d] flex items-center justify-center font-['Outfit'] font-extrabold text-base">
                        {sw}
                      </div>
                      <span className="text-[0.6875rem] font-medium text-[#1c192c]">
                        {sw === 'Ps' ? 'Photoshop' : sw === 'Ai' ? 'Illustrator' : sw === 'Pr' ? 'Premiere' : 'Animate'}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#494551] font-medium border-t border-[#f1ebff]">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#6344a6]" /> Meta Ads Manager</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#6344a6]" /> Office 365</span>
                </div>
              </div>
            </ScaleIn>

            {/* Languages & Interests */}
            <ScaleIn delay={0.4}>
              <div className="bg-white p-6 rounded-3xl shadow-md border border-[#e6dffa] grid grid-cols-2 gap-4 hover:shadow-xl transition-shadow">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-[#655591] block mb-2">Idiomas</span>
                  <ul className="text-xs text-[#1c192c] space-y-1">
                    <li>• <strong>Español:</strong> Nativo</li>
                    <li>• <strong>Portugués:</strong> Intermedio B2</li>
                    <li>• <strong>Inglés:</strong> Básico B10 (ICPNA)</li>
                  </ul>
                </div>

                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-[#655591] block mb-2">Intereses</span>
                  <div className="flex flex-wrap gap-1">
                    {['Fotografía', 'Música', 'Dibujo', 'Basketball'].map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#f1ebff] rounded-full text-[0.6875rem] text-[#494551] font-medium hover:bg-[#6344a6] hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleIn>

          </div>

        </div>

      </div>
    </section>
  );
};
