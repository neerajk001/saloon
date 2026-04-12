'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="pt-32 pb-24">
                <div className="max-w-[1200px] mx-auto px-8">
                    {/* Back Button */}
                    <div className="mb-12">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-2 group text-primary font-sans text-xs uppercase tracking-[0.2em] hover:text-foreground transition-colors"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Intro Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                                Our Story
                            </span>
                            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-tight">
                                Where Style <br />Meets Care
                            </h1>
                            <p className="font-sans text-lg text-neutral-600 leading-relaxed font-light mb-6">
                                At Cielo, we believe that true beauty is born from a sense of wellbeing. 
                                Our sanctuary is designed to be a retreat from the everyday, where expert artistry meets intuitive care.
                            </p>
                            <p className="font-sans text-lg text-neutral-600 leading-relaxed font-light">
                                We are dedicated to enhancing your natural style with treatments that not only look beautiful but feel restorative. 
                                Whether you're visiting us in Thames or Tauranga, our mission remains the same: 
                                to provide a luxury experience that celebrates your unique identity.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 h-[500px]">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="rounded-2xl overflow-hidden shadow-xl mt-12"
                            >
                                <img src="/beuty1.JPG" alt="Salon detail" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12"
                            >
                                <img src="/beuty2.JPG" alt="Salon interior" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>

                    {/* What We Do Section */}
                    <div className="py-24 border-y border-black/5 mb-32">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">What We Do</h2>
                            <p className="font-sans text-neutral-500 max-w-2xl mx-auto uppercase tracking-widest text-xs">Crafting confidence through professional care</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <h3 className="font-serif text-2xl mb-4">Precision Styling</h3>
                                <p className="font-sans text-neutral-600 font-light leading-relaxed">Expert cutting and styling tailored to your face shape and lifestyle, ensuring a look that's effortlessly you.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-2xl mb-4">Bespoke Colour</h3>
                                <p className="font-sans text-neutral-600 font-light leading-relaxed">Multi-dimensional colouring techniques using premium formulas that protect hair health while delivering vibrant results.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-2xl mb-4">Holistic Beauty</h3>
                                <p className="font-sans text-neutral-600 font-light leading-relaxed">Restorative treatments for brows, lashes, and skin that enhance your natural features and promote inner calm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Locations Section */}
                    <div id="locations">
                        <div className="text-center mb-16">
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Visit Us</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Locations</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Thames */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100 flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-serif text-3xl mb-4">Thames</h3>
                                <p className="font-sans text-neutral-600 mb-6 leading-relaxed text-lg">
                                    424 Pollen Street<br />
                                    Thames 3500
                                </p>
                                <div className="flex flex-col gap-4 mt-auto w-full max-w-xs">
                                    <a href="tel:+6478685507" className="flex items-center justify-center gap-2 font-sans py-3 px-6 rounded-xl border border-neutral-200 hover:border-primary hover:text-primary transition-all">
                                        <Phone size={18} />
                                        07 868 5507
                                    </a>
                                    <a 
                                        href="https://www.fresha.com/book-now/cielo-hair-l0uwx88v/all-offer?share=true&pId=87091" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 font-sans py-3 px-6 rounded-xl bg-foreground text-white hover:bg-primary transition-all"
                                    >
                                        Book Online
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Tauranga */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100 flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-serif text-3xl mb-4">Tauranga</h3>
                                <p className="font-sans text-neutral-600 mb-6 leading-relaxed text-lg">
                                    223 Chadwick Road, Greerton<br />
                                    Tauranga 3112
                                </p>
                                <div className="flex flex-col gap-4 mt-auto w-full max-w-xs">
                                    <a href="tel:+6478685507" className="flex items-center justify-center gap-2 font-sans py-3 px-6 rounded-xl border border-neutral-200 hover:border-primary hover:text-primary transition-all">
                                        <Phone size={18} />
                                        07 868 5507
                                    </a>
                                    <a 
                                        href="https://www.fresha.com/book-now/cielo-hair-beauty-wyhncpet/all-offer?share=true&pId=2612673" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 font-sans py-3 px-6 rounded-xl bg-foreground text-white hover:bg-primary transition-all"
                                    >
                                        Book Online
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
