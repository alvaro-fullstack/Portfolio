import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import timelineData from '../data/timeline.json';

export default function About() {
    const cards = [
        { title: 'Frontend', icon: <FiCode className="text-4xl text-blue-400 mb-4" />, desc: 'Interfaces modernas, animadas y responsive usando React, Framer Motion & Tailwind.' },
        { title: 'Backend', icon: <FiServer className="text-4xl text-emerald-400 mb-4" />, desc: 'APIs escalables y lógica de negocio robusta con Python & Node.js.' },
        { title: 'Sistemas', icon: <FiDatabase className="text-4xl text-purple-400 mb-4" />, desc: 'Optimización de bases de datos, deployments en Docker y personalización de ERP en Odoo.' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Sobre Mí</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all group"
                        >
                            <div className="group-hover:-translate-y-2 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mb-12 text-center"
                    >
                        Experiencia y Formación
                    </motion.h3>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        {timelineData.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-emerald-500 group-hover:border-emerald-500/30 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10" />

                                {/* Timeline content box */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/40 transition-all hover:bg-slate-800/60">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                                        <h4 className="font-bold text-lg md:text-xl text-white">{item.role}</h4>
                                        <span className="text-emerald-400 text-xs md:text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full whitespace-nowrap">{item.year}</span>
                                    </div>
                                    <div className="text-blue-400 font-medium mb-4 text-sm md:text-base">{item.company}</div>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
