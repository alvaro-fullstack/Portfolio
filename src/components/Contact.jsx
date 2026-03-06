import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import profileData from '../data/profile.json';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch("https://formsubmit.co/ajax/f37fa584a3abf3229ee88e8f234bbfd3", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: formData.name,
                    Email: formData.email,
                    Mensaje: formData.message,
                    _subject: `Nuevo mensaje de Portfolio: ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
            }
        } catch (error) {
            setStatus('Error de red. Por favor, verifica tu conexión.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ponte en Contacto</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 text-lg">
                        ¿Tienes un proyecto en mente o quieres saludar? No dudes en escribirme.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-slate-700/50"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                placeholder="Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                placeholder="juan@ejemplo.com"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                        <textarea
                            id="message"
                            required
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                            placeholder="¿En qué te puedo ayudar?"
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all w-full sm:w-auto hover:shadow-lg hover:shadow-emerald-500/25"
                        >
                            Enviar Mensaje
                            <FiSend />
                        </button>

                        {status && (
                            <span className={`text-sm font-medium ${status.includes('éxito') ? 'text-emerald-400' : 'text-blue-400'}`}>
                                {status}
                            </span>
                        )}
                    </div>
                </motion.form>

            </div>
        </section>
    );
}
