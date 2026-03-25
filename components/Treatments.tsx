'use client';

import { motion } from 'framer-motion';

const treatments = [
    {
        id: 1,
        title: 'Shampoo & Blow Wave',
        description: 'A relaxing shampoo followed by a professional blow wave finish for smooth, bouncy hair.',
        price: 'From $39',
        image: '/services/hair_blowwave.png'
    },
    {
        id: 2,
        title: 'Full Head Foils',
        description: 'Complete full-head foil colouring for vibrant, dimensional looks and beautiful highlights.',
        price: 'From $199',
        image: '/services/hair_colour.png'
    },
    {
        id: 3,
        title: 'Hair Spa Treatment',
        description: 'A deeply nourishing hair spa experience with scalp massage and premium conditioning.',
        price: 'From $69',
        image: '/services/hair_spa.png'
    },
    {
        id: 4,
        title: "Men's Cut",
        description: 'A sharp, clean cut tailored specifically for men, styled to perfection.',
        price: 'From $35',
        image: '/services/hair_mens.png'
    },
    {
        id: 5,
        title: 'Keratin Smoothing',
        description: 'Long-lasting frizz elimination and silky smoothness with our Nanoplasty treatment.',
        price: 'From $299',
        image: '/services/hair_keratin.png'
    },
    {
        id: 6,
        title: 'Brow Bar & Eye Care',
        description: 'Shape, tint, lift, or laminate — give your brows the attention they deserve.',
        price: 'From $15',
        image: '/services/beauty_brow.png'
    },
    {
        id: 7,
        title: 'Luxury Facials',
        description: 'From brightening to anti-ageing — our expert facials rejuvenate and restore your glow.',
        price: 'From $59',
        image: '/services/beauty_facial.png'
    },
    {
        id: 8,
        title: 'Waxing & Body',
        description: 'Professional waxing for smooth, lasting results — from full arms to full legs and bikini.',
        price: 'From $8',
        image: '/services/beauty_waxing.png'
    },
    {
        id: 9,
        title: 'Manicure & Pedicure',
        description: 'Complete nail care for hands and feet, leaving you polished and pampered.',
        price: 'From $45',
        image: '/services/manicure_pedicure.png'
    },
];

export default function Treatments() {
    return (
        <section className="py-24 md:py-32 bg-surface">
            <div className="max-w-[1200px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                        Our Treatments & Services
                    </h2>
                    <p className="font-sans text-lg text-[#555] font-light max-w-2xl mx-auto">
                        At Cielo Hair & Beauty, every service is crafted with care using premium products and expert technique.
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
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="bg-white group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image & Price */}
                            <div className="relative h-[240px] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.08) }}
                                    className="absolute top-4 right-4 bg-white/85 backdrop-blur-md border border-white/40 text-black px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm"
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
