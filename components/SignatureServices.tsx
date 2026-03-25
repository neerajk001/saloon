'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Hair Styling & Cuts',
        price: 'From $30',
        image: '/services/hair_blowwave.png',
        slug: 'hair-styling'
    },
    {
        id: 2,
        title: 'Colour & Highlights',
        price: 'From $99',
        image: '/services/hair_colour.png',
        slug: 'colouring'
    },
    {
        id: 3,
        title: 'Keratin & Smoothing',
        price: 'From $299',
        image: '/services/hair_keratin.png',
        slug: 'hair-styling'
    },
    {
        id: 4,
        title: 'Brow Bar & Eye Care',
        price: 'From $15',
        image: '/services/beauty_brow.png',
        slug: 'beauty-treatments'
    },
    {
        id: 5,
        title: 'Luxury Facials',
        price: 'From $59',
        image: '/services/beauty_facial.png',
        slug: 'beauty-treatments'
    },
    {
        id: 6,
        title: "Men's Grooming",
        price: 'From $35',
        image: '/services/hair_mens.png',
        slug: 'grooming'
    },
    {
        id: 7,
        title: 'Waxing Services',
        price: 'From $8',
        image: '/services/beauty_waxing.png',
        slug: 'beauty-treatments'
    },
    {
        id: 8,
        title: 'Manicure & Pedicure',
        price: 'From $45',
        image: '/services/manicure_pedicure.png',
        slug: 'beauty-treatments'
    },
    {
        id: 9,
        title: 'Hair Spa & Massage',
        price: 'From $49',
        image: '/services/hair_spa.png',
        slug: 'hair-styling'
    },
];

export default function SignatureServices() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            {/* 1. Section Header */}
            <div className="max-w-[1200px] mx-auto px-8 text-center mb-16">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                    Our Specials
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                    Signature Hair & Beauty Experiences
                </h2>
            </div>

            {/* 2. Horizontal Image Showcase (Scrolling Marquee) */}
            <div className="relative w-full mb-16 pl-8 overflow-hidden">
                <motion.div
                    className="flex gap-8"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...services, ...services].map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={`${service.id}-${index}`}>
                            <motion.div
                                className={`relative w-[300px] h-[400px] flex-shrink-0 bg-cover bg-center rounded-2xl shadow-lg border border-black/5 overflow-hidden group cursor-pointer
                                    ${index % 3 === 0 ? 'mt-0' : index % 3 === 1 ? 'mt-12' : 'mt-6'}
                                `}
                                style={{
                                    backgroundImage: `url('${service.image}')`
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl text-white mb-1">{service.title}</h3>
                                    <span className="font-sans text-sm text-white/80 font-light mb-2">{service.price}</span>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start gap-4">
                                        <p className="font-sans text-sm text-white/90 font-light line-clamp-2">
                                            Experience premium {service.title.toLowerCase()} tailored to your unique style.
                                        </p>
                                        <span className="inline-block px-6 py-2 border border-white/50 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                            Book Now
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* 3. Text Reveal & Action */}
            <div className="max-w-[1200px] mx-auto px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-sans text-lg text-[#555] font-light max-w-2xl text-center mb-10 leading-relaxed">
                        From precision hair styling to rejuvenating beauty treatments, our specials are crafted to elevate your everyday look.
                        Experience the art of personalised care at Cielo Hair & Beauty.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
