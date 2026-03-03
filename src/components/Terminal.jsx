import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileData from '../data/profile.json';
import skillsData from '../data/skills.json';

export default function Terminal() {
    const [history, setHistory] = useState([
        { type: 'output', text: 'Bienvenido a la terminal interactiva.\nEscribe "help" para ver los comandos disponibles.' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let newHistory = [...history, { type: 'input', text: `guest@portfolio:~$ ${input}` }];

            switch (cmd) {
                case 'help':
                    newHistory.push({ type: 'output', text: 'Comandos disponibles:\n  help    - Muestra este mensaje\n  whoami  - Información sobre mí\n  skills  - Listar mis habilidades técnicas\n  clear   - Limpiar la output de la terminal\n  sudo    - Ejecutar un comando como superusuario' });
                    break;
                case 'whoami':
                    newHistory.push({ type: 'output', text: `${profileData.name}\n${profileData.titles.join(' | ')}\n\n${profileData.about}` });
                    break;
                case 'skills':
                    const frontend = skillsData.frontend.map(s => s.name).join(', ');
                    const backend = skillsData.backend.map(s => s.name).join(', ');
                    const tools = skillsData.tools.map(s => s.name).join(', ');
                    newHistory.push({ type: 'output', text: `Frontend : ${frontend}\nBackend  : ${backend}\nTools    : ${tools}` });
                    break;
                case 'clear':
                    newHistory = [];
                    break;
                case 'sudo':
                    newHistory.push({ type: 'output', text: 'el usuario no está en el archivo sudoers. Este incidente será reportado. 🛑' });
                    break;
                case '':
                    break;
                default:
                    const baseCmd = cmd.split(' ')[0];
                    newHistory.push({ type: 'output', text: `bash: ${baseCmd}: comando no encontrado` });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <section id="terminal-section" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terminal Interactiva</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-slate-400">Un pequeño easter egg para devs. ¡Anímate y escribe algo!</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-slate-700 font-mono text-sm sm:text-base selection:bg-emerald-500/30"
                    onClick={() => document.getElementById('terminal-input').focus()}
                >
                    {/* Terminal Header */}
                    <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="ml-4 text-slate-400 text-xs select-none">bash - guest@portfolio</div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 h-80 overflow-y-auto text-slate-300 custom-scrollbar">
                        {history.map((line, idx) => (
                            <div key={idx} className={`mb-2 leading-relaxed ${line.type === 'input' ? 'text-emerald-400 font-bold' : 'text-slate-300 whitespace-pre-wrap'}`}>
                                {line.text}
                            </div>
                        ))}
                        <div className="flex gap-3 text-emerald-400 font-bold items-center mt-2 group">
                            <span className="shrink-0 flex items-center gap-2">
                                <span className="text-blue-400">guest</span><span className="text-slate-500">@</span><span className="text-purple-400">portfolio</span><span className="text-slate-400">:</span><span className="text-blue-400">~</span>$
                            </span>
                            <input
                                id="terminal-input"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none flex-grow text-slate-300 font-normal caret-emerald-500 focus:ring-0"
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </div>
                        <div ref={bottomRef} className="h-4" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
