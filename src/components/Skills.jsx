import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../data/skills.json';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('frontend');
    const categories = Object.keys(skillsData);

    return (
        <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Habilidades Técnicas</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === cat
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="max-w-4xl mx-auto min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {skillsData[activeTab].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold text-white">{skill.name}</span>
                                        <span className="text-emerald-400 font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-black/50">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full relative"
                                        >
                                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
