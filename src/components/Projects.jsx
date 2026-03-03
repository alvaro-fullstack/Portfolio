import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projectsData from '../data/projects.json';

export default function Projects() {
    const allTechs = ['Todos', ...new Set(projectsData.flatMap(p => p.technologies))];
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredProjects = activeFilter === 'Todos'
        ? projectsData
        : projectsData.filter(p => p.technologies.includes(activeFilter));

    return (
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Proyectos Destacados</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allTechs.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setActiveFilter(tech)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === tech
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all flex flex-col h-full relative"
                            >
                                {/* Image container */}
                                <div className="relative overflow-hidden aspect-video">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

                                    {/* Hover links overlay */}
                                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository" className="w-12 h-12 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl transition-all transform hover:scale-110">
                                                <FiGithub />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo" className="w-12 h-12 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl transition-all transform hover:scale-110">
                                                <FiExternalLink />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content container */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                    <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
