import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileData from '../data/profile.json';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-slate-900 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-600/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-6">
                        Bienvenido a mi universo
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
                        Hola, soy <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{profileData.name}</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-bold text-slate-300 mb-8 h-12 md:h-16">
                        <TypeAnimation
                            sequence={[
                                profileData.titles[0],
                                2000,
                                profileData.titles[1],
                                2000,
                                profileData.titles[2],
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                        {profileData.about}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#projects" className="group relative flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                            Ver proyectos
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 text-slate-200 border border-slate-700 px-8 py-4 rounded-full font-semibold transition-all">
                            Contáctame
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
