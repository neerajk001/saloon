'use client';

import { motion } from 'framer-motion';

const treatments = [
    {
        id: 1,
        title: 'Signature Cut & Style',
        description: 'Precision cut tailored to your face shape.',
        price: 'From $110',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Balayage & Gloss',
        description: 'Hand-painted highlights for natural dimension.',
        price: 'From $240',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Deep Conditioning',
        description: 'Restorative treatment for healthy shine.',
        price: 'From $45',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Beard Sculpt & Trim',
        description: 'Detailing and shaping for the modern gentleman.',
        price: 'From $35',
        image: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Bridal Styling',
        description: 'Elegant up-dos and styling for your special day.',
        price: 'Consultation',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Keratin Smoothing',
        description: 'Long-lasting frizz reduction and smoothness.',
        price: 'From $300',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop'
    },
];

export default function Treatments() {
    return (
        <section className="py-24 md:py-32 bg-surface">
            <div className="max-w-[1200px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                        Our Treatments
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                        Carefully Crafted Treatments
                    </h2>
                    <p className="font-sans text-lg text-[#555] font-light max-w-2xl mx-auto">
                        Experience the finest in hair and beauty care, performed by expert stylists using premium products.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image & Price */}
                            <div className="relative h-[250px] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/40 text-black px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm"
                                >
                                    {item.price}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col items-center text-center">
                                <h3 className="font-serif text-xl text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-sm text-[#777] font-light mb-6">
                                    {item.description}
                                </p>
                                <a
                                    href="#book"
                                    className="inline-block px-8 py-2.5 bg-transparent border border-foreground text-foreground text-xs uppercase tracking-[0.1em] transition-all hover:bg-foreground hover:text-white"
                                >
                                    Book Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
