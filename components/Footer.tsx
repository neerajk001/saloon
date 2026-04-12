import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-8 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                
                {/* Brand Column */}
                <div className="flex flex-col items-start gap-6">
                    <Link href="/" className="group">
                        <img src="/gpt.png" alt="Cielo Logo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
                    </Link>
                    <p className="font-sans text-sm text-white/60 leading-relaxed max-w-[260px]">
                        Elevating your natural beauty through expert artistry and restorative care in a serene sanctuary.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/cielo_hair_beauty" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary text-white/80 hover:text-white">
                            <Instagram size={18} />
                        </a>
                        <a href="#" aria-label="Facebook" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary text-white/80 hover:text-white">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-serif text-lg tracking-wider">Quick Links</h4>
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="font-sans text-sm text-white/60 hover:text-primary transition-colors">Home</Link>
                        <Link href="/services" className="font-sans text-sm text-white/60 hover:text-primary transition-colors">Services</Link>
                        <Link href="/gallery" className="font-sans text-sm text-white/60 hover:text-primary transition-colors">Gallery</Link>
                        <Link href="/pricing" className="font-sans text-sm text-white/60 hover:text-primary transition-colors">Pricing</Link>
                    </nav>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-serif text-lg tracking-wider">Contact Us</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3 text-white/60">
                            <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                            <span className="font-sans text-sm">Tauranga & Thames, <br />New Zealand</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                            <Phone size={18} className="text-primary shrink-0" />
                            <a href="tel:000000000" className="font-sans text-sm">Book an Appointment</a>
                        </div>
                        <div className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                            <Mail size={18} className="text-primary shrink-0" />
                            <a href="mailto:hello@cielo.co.nz" className="font-sans text-sm">hello@cielo.co.nz</a>
                        </div>
                    </div>
                </div>

                {/* Newsletter/Hours */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-serif text-lg tracking-wider">Opening Hours</h4>
                    <div className="space-y-2 font-sans text-sm text-white/60">
                        <p className="flex justify-between border-b border-white/5 pb-1"><span>Mon - Fri:</span> <span>9:00am - 6:00pm</span></p>
                        <p className="flex justify-between border-b border-white/5 pb-1"><span>Saturday:</span> <span>10:00am - 4:00pm</span></p>
                        <p className="flex justify-between"><span>Sunday:</span> <span className="text-primary/80">Closed</span></p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/5 text-center">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/30">
                    &copy; {new Date().getFullYear()} Cielo Hair & Beauty. Crafted with Care.
                </p>
            </div>
        </footer>
    );
}
