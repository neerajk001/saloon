'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Precision Cutting',
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop',
        slug: 'hair-styling'
    },
    {
        id: 2,
        title: 'Artistic Colouring',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop',
        slug: 'colouring'
    },
    {
        id: 3,
        title: 'Rejuvenating Beauty',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
        slug: 'beauty-treatments'
    },
    {
        id: 4,
        title: 'Luxury Grooming',
        image: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2670&auto=format&fit=crop',
        slug: 'grooming'
    },
    {
        id: 5,
        title: 'Bridal Styling',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop',
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

            {/* 2. Horizontal Image Showcase (Zig-Zag) */}
            <div className="relative w-full mb-16 pl-8">
                <motion.div
                    className="flex gap-8"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror" // moves back and forth subtly or loop
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Duplicating the array to ensure smooth seamless look if we were looping purely, 
                but user requested 'slow motion from right to left' and zig zag. 
                We'll just map the list. */}
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
                                    <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start gap-4">
                                        <p className="font-sans text-sm text-white/90 font-light line-clamp-2">
                                            Experience premium {service.title.toLowerCase()} tailored to your unique style.
                                        </p>
                                        <span className="inline-block px-6 py-2 border border-white/50 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                            Read More
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
                        Experience the art of personalised care.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
