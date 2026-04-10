'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesMenu from '@/components/ServicesMenu';

const services = [
    {
        slug: 'hair-styling',
        title: 'Hair Styling, Cutting & Blow Wave',
        description: 'Expert precision cutting and professional blow-dry services tailored to your unique style.',
        price: 'From $30',
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576'
    },
    {
        slug: 'colouring',
        title: 'Colour, Foils & Keratin Treatments',
        description: 'Bespoke colouring services with premium products and advanced colour techniques.',
        price: 'From $49',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669'
    },
    {
        slug: 'beauty-treatments',
        title: 'Brow Bar, Lash & Eye Care',
        description: 'Professional brow shaping, lash services, and specialized eye treatments.',
        price: 'From $15',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574'
    },
    {
        slug: 'grooming',
        title: 'Facials, Waxing & Wellness',
        description: 'Rejuvenating facials, professional waxing, and holistic wellness treatments.',
        price: 'From $8',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669'
    },
    {
        slug: 'nails',
        title: 'Manicure & Pedicure',
        description: 'Premium nail care services with luxurious finishes and long-lasting results.',
        price: 'From $45',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2670'
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            <div className="pt-32 pb-24">
                <div className="max-w-[1200px] mx-auto px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                            Our Services
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                            Hair & Beauty Services
                        </h1>
                        <p className="font-sans text-lg text-[#555] max-w-2xl mx-auto font-light">
                            At Cielo Hair & Beauty, we offer a curated selection of premium hair and beauty treatments designed to enhance your natural radiance.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group"
                            >
                                <Link href={`/services/${service.slug}`}>
                                    <div className="overflow-hidden rounded-2xl mb-6 h-[280px]">
                                        <motion.div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${service.image}')` }}
                                        />
                                    </div>
                                    
                                    <div className="flex flex-col gap-3">
                                        <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="font-sans text-[#666] text-base leading-relaxed line-clamp-2">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                            <span className="font-sans font-semibold text-primary">
                                                {service.price}
                                            </span>
                                            <span className="font-sans text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Learn More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <ServicesMenu />

            <Footer />
        </main>
    );
}
