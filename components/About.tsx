'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-8 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
                >
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s]"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop')", // Placeholder: Elegant Salon Interior
                        }}
                    />
                </motion.div>

                {/* Right Column: Content */}
                <div className="flex flex-col items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                            About Us
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                            Where Style Meets Care
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="font-sans text-lg text-neutral-600 leading-relaxed font-light"
                    >
                        At Cielo, we believe that true beauty is born from a sense of wellbeing.
                        Our sanctuary is designed to be a retreat from the everyday, where expert artistry meets intuitive care.
                        We are dedicated to enhancing your natural style with treatments that not only look beautiful but feel restorative.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto"
                    >
                        <a href="#services" className="px-8 py-3 bg-secondary text-foreground text-sm uppercase tracking-[0.1em] border border-transparent transition-all duration-300 hover:bg-primary hover:text-white text-center">
                            Our Services
                        </a>
                        <a href="#book" className="px-8 py-3 bg-transparent text-foreground text-sm uppercase tracking-[0.1em] border border-foreground transition-all duration-300 hover:bg-foreground hover:text-white text-center">
                            Book Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
