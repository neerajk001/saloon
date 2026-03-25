'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const hairServices = [
    { name: 'Shampoo & Blow Wave', price: '$39' },
    { name: 'Hair Spa Treatment', price: '$69' },
    { name: 'Head Massage', price: '$49' },
    { name: 'Wash Straightening', price: '$49' },
    { name: 'Wash Cut Blow-wave', price: '$69' },
    { name: "Men's Cut", price: '$35' },
    { name: "Kid's Cut", price: '$30' },
];

const colourTreatments = [
    { name: 'Retouch', price: '$99' },
    { name: 'Full Colour', price: '$119' },
    { name: 'Half Head Foils', price: '$149' },
    { name: 'Full Head Foils', price: '$199' },
    { name: 'Toner', price: '$49' },
    { name: 'Hair Botox Treatment', price: '$299' },
    { name: 'Permanent Straightening', price: '$299' },
    { name: 'Nanoplasty', price: '$349' },
    { name: 'Perm', price: '$119' },
];

const browEyeCare = [
    { name: 'Eyebrows Shape & Tint', price: '$39' },
    { name: 'Keratin Lash Lift & Tint', price: '$69' },
    { name: 'Brow Shape & Lamination', price: '$65' },
    { name: 'Henna & Shape', price: '$55' },
    { name: 'Brow & Lash Package', price: '$99' },
    { name: 'Eyebrows Threading', price: '$15' },
];

const waxing = [
    { name: 'Full Arms', price: '$35' },
    { name: 'Underarm', price: '$20' },
    { name: 'Half Leg', price: '$35' },
    { name: 'Full Leg & Bikini', price: '$89' },
    { name: 'Full Face', price: '$49' },
    { name: 'Upper Lip', price: '$8' },
    { name: 'Chin', price: '$10' },
];

const facialsMassage = [
    { name: 'Mini Facial', price: '$59' },
    { name: 'Dermaplanning', price: '$79' },
    { name: 'Brightening Facial', price: '$89' },
    { name: 'Anti-Ageing Facial', price: '$99' },
    { name: 'Organic Facial', price: '$99' },
    { name: 'Spa Stress Therapy (60 Min)', price: '$89' },
    { name: 'Manicure', price: '$45' },
    { name: 'Pedicure', price: '$50' },
];

interface MenuSectionProps {
    title: string;
    items: { name: string; price: string }[];
    delay?: number;
}

function MenuSection({ title, items, delay = 0 }: MenuSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
        >
            <h3 className="font-serif text-2xl text-foreground mb-6 pb-4 border-b border-black/10">
                {title}
            </h3>
            <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: delay + index * 0.04 }}
                        className="group flex items-end justify-between gap-4"
                    >
                        <span className="font-sans text-sm text-foreground font-light group-hover:text-primary transition-colors whitespace-nowrap">
                            {item.name}
                        </span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.04 }}
                            className="h-[1px] mb-1.5 border-b border-dotted border-neutral-300 flex-grow opacity-60"
                        />
                        <span className="font-sans text-sm font-semibold text-primary whitespace-nowrap">
                            {item.price}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default function ServicesMenu() {
    return (
        <section id="menu" className="py-24 md:py-32 bg-surface">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        Cielo Hair & Beauty — Price Guide
                    </span>
                    <div className="flex items-center gap-6 w-full max-w-2xl justify-center">
                        <div className="h-[1px] bg-black/10 flex-1 hidden sm:block"></div>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground whitespace-nowrap">
                            Our Services Menu
                        </h2>
                        <div className="h-[1px] bg-black/10 flex-1 hidden sm:block"></div>
                    </div>
                    <p className="font-sans text-sm text-neutral-500 mt-4 font-light">
                        * Additional charges may apply for some services & treatments.
                    </p>
                </div>

                {/* Hair Services */}
                <div className="mb-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4"
                    >
                        Hair Services
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MenuSection title="Hair Services — From" items={hairServices} delay={0} />
                        <MenuSection title="Colour & Treatments" items={colourTreatments} delay={0.1} />
                    </div>
                </div>

                {/* Beauty Services */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 mt-8"
                >
                    Beauty Services
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MenuSection title="Brow Bar & Eye Care" items={browEyeCare} delay={0.2} />
                    <MenuSection title="Waxing" items={waxing} delay={0.3} />
                    <MenuSection title="Facials & Wellness" items={facialsMassage} delay={0.4} />
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/#book"
                        className="inline-block px-10 py-3 bg-primary text-white rounded-full font-sans text-xs uppercase tracking-[0.1em] shadow-md transition-all hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book an Appointment
                    </Link>
                </div>

            </div>
        </section>
    );
}
