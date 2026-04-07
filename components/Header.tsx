'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 w-auto z-50 py-1.5 md:py-2 bg-[#2C2C2C]/80 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="relative flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Logo */}
                <div className="z-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                    <Link href="/" onClick={closeMenu}>
                        <img src="/logo.png" alt="Cielo Logo" className="h-14 md:h-16 w-auto" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white font-semibold transition-opacity duration-300 whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="#about" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        About Us
                    </Link>
                    <Link href="#services" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="/pricing" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 flex items-center gap-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Menu <ChevronDown size={14} />
                    </Link>
                    <Link href="#gallery" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Gallery
                    </Link>
                    <Link href="#contact" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Book Button */}
                <div className="z-10 hidden md:block">
                    <Link href="#book" className="px-6 py-2 border border-white/80 text-white font-sans text-sm uppercase tracking-wider transition-all hover:bg-white hover:text-black">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-white"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md w-screen h-[100dvh] flex items-center justify-center md:hidden"
                        >
                            {/* Menu Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] w-full h-full flex flex-col items-center justify-center px-8"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeMenu}
                                    className="absolute top-6 right-6 z-[70] p-3 text-white/80 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full"
                                    aria-label="Close menu"
                                >
                                    <X size={28} strokeWidth={2} />
                                </button>

                                {/* Navigation Links */}
                                <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="/" 
                                            className="block font-sans text-2xl uppercase tracking-[0.15em] text-primary font-semibold py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            Home
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="#about" 
                                            className="block font-sans text-xl uppercase tracking-[0.12em] text-white/70 py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            About Us
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="#services" 
                                            className="block font-sans text-xl uppercase tracking-[0.12em] text-white/70 py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            Services
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="/pricing" 
                                            className="block font-sans text-xl uppercase tracking-[0.12em] text-white/70 py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            Prices & Menu
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="#gallery" 
                                            className="block font-sans text-xl uppercase tracking-[0.12em] text-white/70 py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            Gallery
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        <Link 
                                            onClick={closeMenu} 
                                            href="#contact" 
                                            className="block font-sans text-xl uppercase tracking-[0.12em] text-white/70 py-3 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95"
                                        >
                                            Contact
                                        </Link>
                                    </motion.div>
                                </nav>

                                {/* CTA Button */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                    className="mt-12 w-full max-w-xs"
                                >
                                    <Link 
                                        onClick={closeMenu} 
                                        href="#book" 
                                        className="block w-full py-5 bg-primary text-white text-center font-sans text-lg uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-2xl"
                                    >
                                        Book Appointment
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
