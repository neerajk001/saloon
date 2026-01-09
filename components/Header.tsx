import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-black/5">
            <div className="relative flex justify-between items-center max-w-[1200px] mx-auto px-8">
                <div className="font-serif text-3xl tracking-wide text-foreground z-10">
                    <Link href="/">Cielo</Link>
                </div>

                <nav className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" className="font-sans text-sm uppercase tracking-[0.1em] text-primary font-semibold transition-opacity duration-300 whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="#about" className="font-sans text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        About Us
                    </Link>
                    <Link href="#services" className="font-sans text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="#menu" className="font-sans text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 flex items-center gap-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Menu <ChevronDown size={14} />
                    </Link>
                    <Link href="#gallery" className="font-sans text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Gallery
                    </Link>
                    <Link href="#contact" className="font-sans text-sm uppercase tracking-[0.1em] text-foreground/60 transition-opacity duration-300 hover:opacity-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap">
                        Contact Us
                    </Link>
                </nav>

                <div className="z-10 hidden md:block">
                    <Link href="#book" className="px-6 py-2 bg-foreground text-white font-sans text-sm uppercase tracking-wider transition-all hover:bg-primary">
                        Book Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
