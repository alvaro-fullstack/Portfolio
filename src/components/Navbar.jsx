import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Á.M.Á.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl text-slate-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-xl py-4 flex flex-col items-center gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium hover:text-emerald-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
