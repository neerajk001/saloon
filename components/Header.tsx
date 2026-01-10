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
        <header className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 bg-white/90 backdrop-blur-md border-b border-black/5">
            <div className="relative flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Logo */}
                <div className="font-serif text-2xl md:text-3xl tracking-wide text-foreground z-50">
                    <Link href="/" onClick={closeMenu}>Cielo</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-primary font-semibold transition-opacity duration-300 whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="#about" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        About Us
                    </Link>
                    <Link href="#services" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="/pricing" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 flex items-center gap-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Menu <ChevronDown size={14} />
                    </Link>
                    <Link href="#gallery" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Gallery
                    </Link>
                    <Link href="#contact" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Book Button */}
                <div className="z-10 hidden md:block">
                    <Link href="#book" className="px-6 py-2 bg-foreground text-white font-sans text-sm uppercase tracking-wider transition-all hover:bg-primary">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
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
                            className="fixed inset-0 z-[60] bg-white w-screen h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 px-6 md:hidden"
                        >
                            <nav className="flex flex-col items-center gap-8 w-full">
                                <Link onClick={closeMenu} href="/" className="font-sans text-lg uppercase tracking-[0.1em] text-primary font-medium">
                                    Home
                                </Link>
                                <Link onClick={closeMenu} href="#about" className="font-sans text-lg uppercase tracking-[0.1em] text-foreground/80">
                                    About Us
                                </Link>
                                <Link onClick={closeMenu} href="#services" className="font-sans text-lg uppercase tracking-[0.1em] text-foreground/80">
                                    Services
                                </Link>
                                <Link onClick={closeMenu} href="/pricing" className="font-sans text-lg uppercase tracking-[0.1em] text-foreground/80">
                                    Prices & Menu
                                </Link>
                                <Link onClick={closeMenu} href="#gallery" className="font-sans text-lg uppercase tracking-[0.1em] text-foreground/80">
                                    Gallery
                                </Link>
                                <Link onClick={closeMenu} href="#contact" className="font-sans text-lg uppercase tracking-[0.1em] text-foreground/80">
                                    Contact
                                </Link>

                                <div className="mt-8 w-full max-w-xs">
                                    <Link onClick={closeMenu} href="#book" className="block w-full py-4 bg-foreground text-white text-center font-sans uppercase tracking-widest hover:bg-primary">
                                        Book Appointment
                                    </Link>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
