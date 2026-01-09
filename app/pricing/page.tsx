'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const fullMenu = [
    {
        category: "Hair Styling & Cuts",
        items: [
            { name: 'Ladies Cut & Finish', price: '$85 – $120', desc: 'Consultation, wash, precision cut and professional blow-dry finish.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576' },
            { name: 'Mens Cut & Style', price: '$55 – $75', desc: 'Precision clipper or scissor over comb cut with styling.', image: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2670' },
            { name: 'Blow Dry & Style', price: '$55 – $85', desc: 'Professional wash and blow-dry styling for any occasion.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669' },
        ]
    },
    {
        category: "Colouring",
        items: [
            { name: 'Full Head Foils', price: '$210 – $260', desc: 'Maximum brightness and dimension throughout the entire head.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669' },
            { name: 'Half Head Foils', price: '$160 – $190', desc: 'Placement focused on the hairline and crown for a natural lift.', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670' },
            { name: 'Balayage / Ombre', price: '$240 – $320', desc: 'Hand-painted custom technique for a seamless sun-kissed look.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669' },
            { name: 'Global Colour', price: '$130 – $170', desc: 'Rich, solid colour application from roots to ends.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574' },
        ]
    },
    {
        category: "Treatments",
        items: [
            { name: 'Keratin Treatment', price: '$300 – $450', desc: 'Long-lasting smoothing treatment to eliminate frizz.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669' },
            { name: 'Deep Conditioning', price: '$45 – $65', desc: 'Intensive moisture mask for dry or damaged hair.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670' },
        ]
    },
    {
        category: "Beauty & Threading",
        items: [
            { name: 'Eyebrow Threading', price: '$25 – $35', desc: 'Precision shaping using traditional cotton thread methods.', image: 'https://images.unsplash.com/photo-1596704017614-205d6cb82e2e?q=80&w=2670' }, // Placeholder
            { name: 'Signature Facial', price: '$130 – $160', desc: 'Deep cleanse, exfoliation, mask and massage tailored to your skin.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670' },
        ]
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="bg-black pt-32 pb-20 px-8 text-center text-white">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Full Service Menu</h1>
                <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto font-light">
                    Explore our comprehensive range of treatments. Each service is tailored to your individual needs.
                </p>
            </section>

            {/* Menu Sections */}
            <section className="py-20 px-6 max-w-[1200px] mx-auto">
                {fullMenu.map((section, sIndex) => (
                    <div key={sIndex} className="mb-24 last:mb-0">
                        <h3 className="font-serif text-3xl text-foreground mb-12 text-center border-b border-black/5 pb-4">
                            {section.category}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="group flex flex-col bg-surface rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="h-48 overflow-hidden bg-gray-100 relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        />
                                        <div className="absolute bottom-0 right-0 bg-white/90 px-4 py-1 text-xs font-bold tracking-widest uppercase">
                                            {item.price}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="font-serif text-xl text-foreground mb-2">{item.name}</h4>
                                        <p className="font-sans text-sm text-[#666] mb-6 flex-grow leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <a
                                            href="#book"
                                            className="w-full py-3 mt-auto border border-foreground text-foreground text-center text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-white transition-colors"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
