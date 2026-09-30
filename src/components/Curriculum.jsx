import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Grid, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatedLetters, FadeInUp, ScaleIn } from './AnimatedText';

export const Curriculum = () => {
  return (
    <section id="curriculum" className="w-full bg-[#090713] py-20 md:py-28 px-4 sm:px-6 lg:px-12 relative border-y border-white/10">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto flex flex-col gap-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <FadeInUp delay={0.1}>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-purple-300">
              TRAYECTORIA Y HABILIDADES
            </span>
          </FadeInUp>
          
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
            Currículum Profesional
          </h2>

          <FadeInUp delay={0.3}>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-purple-100/80 mt-2 font-normal">
              Formación estratégica en Marketing Empresarial y Diseño Gráfico Digital con experiencia real en agencias y clientes de alto nivel.
            </p>
          </FadeInUp>
        </div>

        {/* Resume Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Experiencia Laboral (7 cols) */}
          <FadeInUp delay={0.2} className="lg:col-span-7">
            <div className="h-full bg-[#0f0b1e]/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-['Syne'] font-extrabold text-2xl text-white uppercase">Experiencia Laboral</h3>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-8 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-pink-500 before:to-cyan-500">
                
                {/* Item 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative flex flex-col gap-1.5"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-pink-500 ring-4 ring-purple-500/30" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-pink-400 tracking-wide">2024 - 2026</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-[0.6875rem] text-pink-300 font-bold uppercase border border-pink-500/20">
                      AGENCIA DE MARKETING
                    </span>
                  </div>
                  <h4 className="font-['Syne'] font-bold text-lg text-white">YALA MKT</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-purple-300">Jefa de Cuentas:</strong> Coordinación integral de clientes corporativos (Cassinelli, Ceresita, Alianza Lima). Dirección de arte, diseño publicitario y edición audiovisual para campañas de alto alcance.
                  </p>
                </motion.div>

                {/* Item 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative flex flex-col gap-1.5"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-purple-500/30" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-purple-400 tracking-wide">2023 - 2024</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-[0.6875rem] text-purple-300 font-bold uppercase border border-purple-500/20">
                      GASTRONOMÍA &amp; BRANDING
                    </span>
                  </div>
                  <h4 className="font-['Syne'] font-bold text-lg text-white">EL CORDÓN Y LA ROSA</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-pink-300">Marketing &amp; Diseño Gráfico:</strong> Relaciones corporativas, renovación de piezas impresas, cartas gastronómicas y gestión de campañas digitales.
                  </p>
                </motion.div>

                {/* Item 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative flex flex-col gap-1.5"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-cyan-400 tracking-wide">2021 - 2023</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-[0.6875rem] text-cyan-300 font-bold uppercase border border-cyan-500/20">
                      INMOBILIARIA
                    </span>
                  </div>
                  <h4 className="font-['Syne'] font-bold text-lg text-white">VILANOVA ASESORÍA INMOBILIARIA</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-cyan-300">Community Manager &amp; Content Creator:</strong> Creación de dossiers corporativos, catálogo de proyectos inmobiliarios y generación de pautas Meta Ads.
                  </p>
                </motion.div>

                {/* Item 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative flex flex-col gap-1.5"
                >
                  <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/40" />
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs text-white/50 tracking-wide">2018 - 2019</span>
                  <h4 className="font-['Syne'] font-bold text-lg text-white">MARBELLA INMOBILIARIA • OH!25</h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-white/70 font-normal">
                    Diseño digital, contenidos sociales y soporte gráfico en proyectos publicitarios.
                  </p>
                </motion.div>

              </div>
            </div>
          </FadeInUp>

          {/* Column 2: Educación + Software + Idiomas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Formación Académica Card */}
            <ScaleIn delay={0.2}>
              <div className="bg-[#0f0b1e]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-4 hover:border-pink-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Syne'] font-extrabold text-xl text-white uppercase">Educación</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-pink-400 font-bold">2022 - 2025</span>
                    <h4 className="font-['Outfit'] font-bold text-base text-white">Zegel IPAE</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70">Bachiller Profesional en Gestión Estratégica de Marketing</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="font-['Plus_Jakarta_Sans'] text-[0.6875rem] text-purple-300 font-bold">2018 - 2021</span>
                    <h4 className="font-['Outfit'] font-bold text-base text-white">SENATI</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70">Carrera Técnica Profesional en Diseño Gráfico Digital</p>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Software Proficiency */}
            <ScaleIn delay={0.3}>
              <div className="bg-[#0f0b1e]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-4 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Grid className="w-5 h-5 text-purple-400" />
                    <h3 className="font-['Syne'] font-extrabold text-base text-white uppercase">Software &amp; Herramientas</h3>
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase text-purple-300 font-mono">Dominio Avanzado</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {['Ps', 'Ai', 'Pr', 'An'].map((sw, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      key={idx}
                      className="flex flex-col items-center gap-1 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-white flex items-center justify-center font-['Syne'] font-extrabold text-base border border-white/20">
                        {sw}
                      </div>
                      <span className="text-[0.6875rem] font-bold text-white/90">
                        {sw === 'Ps' ? 'Photoshop' : sw === 'Ai' ? 'Illustrator' : sw === 'Pr' ? 'Premiere' : 'Animate'}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 text-xs text-white/80 font-medium border-t border-white/10">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Meta Ads Manager</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Office 365</span>
                </div>
              </div>
            </ScaleIn>

            {/* Languages & Interests */}
            <ScaleIn delay={0.4}>
              <div className="bg-[#0f0b1e]/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-purple-300 block mb-2">Idiomas</span>
                  <ul className="text-xs text-white/80 space-y-1.5 font-normal">
                    <li>• <strong className="text-white">Español:</strong> Nativo</li>
                    <li>• <strong className="text-white">Portugués:</strong> Intermedio B2</li>
                    <li>• <strong className="text-white">Inglés:</strong> Básico B10</li>
                  </ul>
                </div>

                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase text-purple-300 block mb-2">Intereses</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Fotografía', 'Música', 'Dibujo', 'Basketball'].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/10 rounded-full text-[0.6875rem] text-purple-100 font-semibold border border-white/10">
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

