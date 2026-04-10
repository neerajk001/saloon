'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isBookPickerOpen, setIsBookPickerOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const bookingLinks = {
        tauranga: 'https://www.fresha.com/book-now/cielo-hair-beauty-wyhncpet/all-offer?share=true&pId=2612673',
        thames: 'https://www.fresha.com/book-now/cielo-hair-l0uwx88v/all-offer?share=true&pId=87091',
    } as const;

    const openBooking = (location: keyof typeof bookingLinks) => {
        window.open(bookingLinks[location], '_blank', 'noopener,noreferrer');
        setIsBookPickerOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!headerRef.current) return;
            if (!headerRef.current.contains(event.target as Node)) {
                setIsBookPickerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <header className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 w-auto z-50 py-1.5 md:py-2 bg-[#2C2C2C]/80 backdrop-blur-sm border border-gray-300/40 rounded-xl">
            <div ref={headerRef} className="relative flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Logo */}
                <div className="z-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                    <Link href="/">
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
                    <Link href="/services" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="/gallery" className="font-sans text-xs md:text-sm uppercase tracking-[0.1em] text-white/80 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Gallery
                    </Link>
                </nav>

                {/* Desktop Book Button */}
                <div className="z-10 hidden md:block">
                    <button
                        type="button"
                        onClick={() => setIsBookPickerOpen((prev) => !prev)}
                        className="px-6 py-2 bg-[#f28c28] text-white font-sans text-sm uppercase tracking-wider transition-all hover:bg-[#e47910] rounded-md"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Center Navigation */}
                <nav className="md:hidden z-10 absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
                    <Link
                        href="/services"
                        className="px-3 py-2 border border-white/30 text-white font-sans text-[11px] uppercase tracking-[0.08em] rounded-md min-w-[88px] text-center"
                    >
                        Services
                    </Link>
                    <Link
                        href="/gallery"
                        className="px-3 py-2 border border-white/30 text-white font-sans text-[11px] uppercase tracking-[0.08em] rounded-md min-w-[88px] text-center"
                    >
                        Gallery
                    </Link>
                </nav>

                {/* Mobile Book Button */}
                <div className="md:hidden z-10 ml-auto">
                    <button
                        type="button"
                        onClick={() => setIsBookPickerOpen((prev) => !prev)}
                        className="px-3 py-2 bg-[#f28c28] text-white font-sans text-[11px] uppercase tracking-[0.08em] rounded-md font-semibold hover:bg-[#e47910] transition-colors"
                    >
                        Book
                    </button>
                </div>

                {isBookPickerOpen && (
                    <div className="absolute right-0 top-full mt-2 w-44 bg-transparent p-0 z-[80]">
                        <div className="flex flex-col gap-1.5">
                            <button
                                type="button"
                                onClick={() => openBooking('tauranga')}
                                className="w-full py-2 bg-[#f28c28]/95 text-white rounded-md font-sans text-[11px] uppercase tracking-wider font-semibold hover:bg-[#e47910] transition-colors"
                            >
                                Book Tauranga
                            </button>
                            <button
                                type="button"
                                onClick={() => openBooking('thames')}
                                className="w-full py-2 bg-[#f28c28]/95 text-white rounded-md font-sans text-[11px] uppercase tracking-wider font-semibold hover:bg-[#e47910] transition-colors"
                            >
                                Book Thames
                            </button>
                        </div>
                    </div>
                )}
                </div>
        </header>
    );
}
