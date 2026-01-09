'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
    { name: 'Ladies Cut & Finish', price: '$85 – $120' },
    { name: 'Mens Cut & Style', price: '$55 – $75' },
    { name: 'Blow Dry & Style', price: '$55 – $85' },
    { name: 'Full Head Foils', price: '$210 – $260' },
    { name: 'Half Head Foils', price: '$160 – $190' },
    { name: 'Balayage / Ombre', price: '$240 – $320' },
    { name: 'Global Colour', price: '$130 – $170' },
    { name: 'Toner / Gloss', price: '$60 – $80' },
    { name: 'Keratin Treatment', price: '$300 – $450' },
    { name: 'Deep Conditioning', price: '$45 – $65' },
    { name: 'Eyebrow Threading', price: '$25 – $35' },
    { name: 'Full Face Threading', price: '$55 – $75' },
    { name: 'Express Facial', price: '$75 – $95' },
    { name: 'Signature Facial', price: '$130 – $160' },
];

export default function ServicesMenu() {
    return (
        <section id="menu" className="py-24 md:py-32 bg-white">
            <div className="max-w-[1000px] mx-auto px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20 animate-fade-up">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        Hair, Beauty, Nails & Makeup
                    </span>
                    <div className="flex items-center gap-6 w-full max-w-2xl justify-center">
                        <div className="h-[1px] bg-black/10 flex-1 hidden sm:block"></div>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground whitespace-nowrap">
                            Our Services Menu
                        </h2>
                        <div className="h-[1px] bg-black/10 flex-1 hidden sm:block"></div>
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                            className="group flex items-end justify-between gap-4 cursor-default"
                        >
                            <span className="font-sans text-sm uppercase tracking-widest text-primary font-medium group-hover:text-primary/80 transition-colors whitespace-nowrap">
                                {item.name}
                            </span>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                                className="h-[1px] mb-1.5 border-b-[2px] border-dotted border-neutral-300 group-hover:border-neutral-400 opacity-50 flex-grow"
                            />

                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
                                className="font-sans text-sm font-medium text-foreground whitespace-nowrap"
                            >
                                {item.price}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <Link
                        href="/pricing"
                        className="inline-block px-10 py-3 bg-primary text-white rounded-full font-sans text-xs uppercase tracking-[0.1em] shadow-md transition-all hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        See All Prices
                    </Link>
                </div>

            </div>
        </section>
    );
}
