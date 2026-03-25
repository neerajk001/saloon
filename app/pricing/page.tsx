'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
    {
        id: 'hair',
        label: 'Hair Services',
        icon: '✂️',
        image: '/services/hair_blowwave.png',
        note: 'From (prices may vary)',
        items: [
            {
                name: 'Shampoo & Blow Wave',
                price: '$39',
                desc: 'Relaxing shampoo followed by a professional salon blow-wave finish.',
                image: '/services/hair_blowwave.png'
            },
            {
                name: 'Hair Spa Treatment',
                price: '$69',
                desc: 'Deeply nourishing spa treatment combined with a relaxing scalp massage.',
                image: '/services/hair_spa.png'
            },
            {
                name: 'Head Massage',
                price: '$49',
                desc: 'Soothing scalp massage to relieve tension and stimulate healthy hair growth.',
                image: '/services/head_massage.png'
            },
            {
                name: 'Wash Straightening',
                price: '$49',
                desc: 'Wash and professional straightening blow-dry for silky, smooth results.',
                image: '/services/wash_straightening.png'
            },
            {
                name: 'Wash Cut Blow-wave',
                price: '$69',
                desc: 'Full wash, precision cut and a flawless blow-wave finish.',
                image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: "Men's Cut",
                price: '$35',
                desc: 'Sharp, clean cut scissor or clipper styled perfectly for men.',
                image: '/services/hair_mens.png'
            },
            {
                name: "Kid's Cut",
                price: '$30',
                desc: 'A gentle and fun haircut experience designed especially for children.',
                image: '/services/kids_cut.png'
            },
        ]
    },
    {
        id: 'colour',
        label: 'Colour & Treatments',
        icon: '🎨',
        image: '/services/hair_colour.png',
        note: 'From (additional charges may apply)',
        items: [
            {
                name: 'Retouch',
                price: '$99',
                desc: 'Root touch-up to seamlessly blend grown-out colour back to perfection.',
                image: '/services/hair_retouch.png'
            },
            {
                name: 'Full Colour',
                price: '$119',
                desc: 'Rich, even colour applied from roots to ends for a complete transformation.',
                image: '/services/hair_colour.png'
            },
            {
                name: 'Half Head Foils',
                price: '$149',
                desc: 'Highlights focused on the crown and hairline for a natural sun-kissed lift.',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Full Head Foils',
                price: '$199',
                desc: 'Maximum brightness and dimension applied throughout the entire head.',
                image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Toner',
                price: '$49',
                desc: 'A toning gloss treatment to neutralise unwanted warmth or brassiness.',
                image: '/services/hair_toner.png'
            },
            {
                name: 'Hair Botox Treatment',
                price: '$299',
                desc: 'Intensive treatment to deeply restore hydration, elasticity and shine.',
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Permanent Straightening',
                price: '$299',
                desc: 'Long-lasting chemical straightening for permanently smooth, frizz-free hair.',
                image: '/services/hair_keratin.png'
            },
            {
                name: 'Nanoplasty',
                price: '$349',
                desc: 'Advanced nano hair treatment for intensely smooth, glossy, frizz-free results.',
                image: '/services/wash_straightening.png'
            },
            {
                name: 'Perm',
                price: '$119',
                desc: 'Beautiful bouncy curls or waves added with a professional perm service.',
                image: '/services/hair_perm.png'
            },
        ]
    },
    {
        id: 'brow',
        label: 'Brow Bar & Eye Care',
        icon: '👁️',
        image: '/services/beauty_brow.png',
        note: 'From',
        items: [
            {
                name: 'Eyebrows Shape & Tint',
                price: '$39',
                desc: 'Shape and tint for beautifully defined, full-looking brows.',
                image: '/services/beauty_brow.png'
            },
            {
                name: 'Keratin Lash Lift & Tint',
                price: '$69',
                desc: 'Lift, curl and tint your lashes for a stunning mascara-free flutter.',
                image: '/services/lash_lift.png'
            },
            {
                name: 'Brow Shape & Lamination',
                price: '$65',
                desc: 'Laminate and shape for a fuller, fluffy, perfectly defined brow look.',
                image: '/services/brow_lamination.png'
            },
            {
                name: 'Henna & Shape',
                price: '$55',
                desc: 'Natural henna tint with precision brow shaping — long lasting colour.',
                image: 'https://images.unsplash.com/photo-1596704017614-205d6cb82e2e?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Brow & Lash Package',
                price: '$99',
                desc: 'Complete brow & lash combo package for a totally polished, refreshed look.',
                image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Eyebrows Threading',
                price: '$15',
                desc: 'Traditional precision cotton threading for clean, perfectly sculpted brows.',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=900&auto=format&fit=crop'
            },
        ]
    },
    {
        id: 'waxing',
        label: 'Waxing',
        icon: '🌸',
        image: '/services/beauty_waxing.png',
        note: 'From',
        items: [
            {
                name: 'Full Arms',
                price: '$35',
                desc: 'Smooth, long-lasting hair removal covering the full arms.',
                image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Underarm',
                price: '$20',
                desc: 'Quick and effective underarm waxing for lasting smoothness.',
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Half Leg',
                price: '$35',
                desc: 'Waxing from the knee down for silky smooth lower legs.',
                image: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Full Leg & Bikini',
                price: '$89',
                desc: 'Complete full leg wax with a clean, neat bikini line included.',
                image: '/services/beauty_waxing.png'
            },
            {
                name: 'Full Face',
                price: '$49',
                desc: 'Full face waxing for smooth, peach-fuzz free, radiant skin.',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Upper Lip',
                price: '$8',
                desc: 'Quick, precise upper lip hair removal for a clean, smooth finish.',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Chin',
                price: '$10',
                desc: 'Targeted chin waxing to keep your skin clean and smooth.',
                image: 'https://images.unsplash.com/photo-1596704017614-205d6cb82e2e?q=80&w=900&auto=format&fit=crop'
            },
        ]
    },
    {
        id: 'facials',
        label: 'Facials & Wellness',
        icon: '💆',
        image: '/services/beauty_facial.png',
        note: 'From',
        items: [
            {
                name: 'Mini Facial',
                price: '$59',
                desc: 'Express facial cleanse and hydration boost — results in under 30 minutes.',
                image: '/services/beauty_facial.png'
            },
            {
                name: 'Dermaplanning',
                price: '$79',
                desc: 'Exfoliation treatment that removes dead skin and peach fuzz for a glowing complexion.',
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Brightening Facial',
                price: '$89',
                desc: 'Targeted brightening to visibly reduce dullness and uneven skin tone.',
                image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Anti-Ageing Facial',
                price: '$99',
                desc: 'Firming and lifting treatment to smooth fine lines and restore youthful radiance.',
                image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Organic Facial',
                price: '$99',
                desc: 'Pure, naturally-derived facial using certified organic and botanical products.',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Spa Stress Therapy (60 Min)',
                price: '$89',
                desc: 'Full body relaxation massage and spa experience for total mind and body wellbeing.',
                image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=900&auto=format&fit=crop'
            },
            {
                name: 'Manicure',
                price: '$45',
                desc: 'Professional nail shaping, cuticle care and polish application for hands.',
                image: '/services/manicure_pedicure.png'
            },
            {
                name: 'Pedicure',
                price: '$50',
                desc: 'Relaxing foot soak, nail care and polish for perfectly pampered feet.',
                image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop'
            },
        ]
    },
];

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ item, index }: { item: typeof categories[0]['items'][0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-gray-100">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    {item.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-serif text-xl text-foreground mb-2">{item.name}</h4>
                <p className="font-sans text-sm text-[#666] mb-6 flex-grow leading-relaxed">{item.desc}</p>
                <a
                    href="/#book"
                    className="w-full py-3 border border-foreground text-foreground text-center text-xs uppercase tracking-[0.15em] hover:bg-foreground hover:text-white transition-colors rounded-full"
                >
                    Book Now
                </a>
            </div>
        </motion.div>
    );
}

// ─── Category Section ─────────────────────────────────────────────────────────

function CategorySection({ cat, catIndex }: { cat: typeof categories[0]; catIndex: number }) {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? cat.items : cat.items.slice(0, 3);
    const remaining = cat.items.length - 3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.08 }}
            className="mb-24 last:mb-0"
        >
            {/* Category Header */}
            <div className="flex items-center gap-6 mb-10">
                <div
                    className="w-16 h-16 rounded-2xl bg-cover bg-center shadow-md flex-shrink-0 border border-black/5"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div>
                    <span className="text-2xl mr-2">{cat.icon}</span>
                    <span className="font-serif text-3xl text-foreground">{cat.label}</span>
                    <p className="font-sans text-xs text-neutral-500 mt-1 uppercase tracking-widest">{cat.note}</p>
                </div>
                <div className="flex-1 h-[1px] bg-black/8 hidden md:block ml-4" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {visible.map((item, i) => (
                        <ServiceCard key={item.name} item={item} index={i} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Expand / Collapse Button */}
            {cat.items.length > 3 && (
                <div className="mt-8 text-center">
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setExpanded(!expanded)}
                        className="inline-flex items-center gap-3 px-8 py-3 border border-black/15 rounded-full font-sans text-xs uppercase tracking-[0.15em] text-foreground hover:bg-foreground hover:text-white hover:border-foreground transition-all duration-300 shadow-sm"
                    >
                        {expanded ? (
                            <>
                                <span>Show Less</span>
                                <svg className="w-4 h-4 rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        ) : (
                            <>
                                <span>Show {remaining} More</span>
                                <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        )}
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#fafaf8]">
            <Header />

            {/* Hero */}
            <section className="relative bg-black pt-36 pb-24 px-8 text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/services/hair_blowwave.png')" }}
                />
                <div className="relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-sans text-xs uppercase tracking-[0.3em] text-white/50 mb-4 block"
                    >
                        Cielo Hair & Beauty
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl mb-6"
                    >
                        Full Service Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-sans text-lg text-white/60 max-w-xl mx-auto font-light"
                    >
                        5 categories · All our treatments with transparent pricing.
                        Additional charges may apply for some services.
                    </motion.p>

                    {/* Category Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3 mt-10"
                    >
                        {categories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white transition-all text-xs uppercase tracking-widest"
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* All Categories */}
            <section className="py-24 px-6 max-w-[1200px] mx-auto">
                {categories.map((cat, i) => (
                    <div key={cat.id} id={cat.id}>
                        <CategorySection cat={cat} catIndex={i} />
                    </div>
                ))}
            </section>

            {/* Disclaimer */}
            <div className="text-center pb-16 px-8">
                <p className="font-sans text-xs text-neutral-400 italic">
                    * There will be additional charges for some services & treatments. Prices are from / starting from listed amounts.
                </p>
            </div>

            <Footer />
        </main>
    );
}
