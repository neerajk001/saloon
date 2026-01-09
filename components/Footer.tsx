import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white py-16 px-8 text-center">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
                <div className="font-serif text-2xl tracking-[0.05em] text-white">Cielo</div>

                <div className="flex gap-6">
                    <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary text-white">
                        <Instagram size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary text-white">
                        <Facebook size={20} />
                    </a>
                </div>

                <p className="font-sans text-xs opacity-40 mt-4">
                    &copy; {new Date().getFullYear()} Cielo Hair & Beauty. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
