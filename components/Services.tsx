'use client';

import { motion } from 'framer-motion';

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 px-8 bg-surface overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Left Column: Text Content */}
                <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl mb-8 text-foreground"
                    >
                        Hair & Beauty Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-sans text-lg/loose text-[#555] mb-12 font-light"
                    >
                        At Cielo Hair & Beauty, we offer a curated selection of premium hair and beauty
                        treatments designed to enhance your natural radiance. From expert precision cutting
                        and bespoke colouring to rejuvenating beauty therapies, every service is tailored
                        to your unique style.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-4 w-full"
                    >
                        {[
                            { label: 'Hair Styling, Cutting & Blow Wave', price: 'From $30' },
                            { label: 'Colour, Foils & Keratin Treatments', price: 'From $49' },
                            { label: 'Brow Bar, Lash & Eye Care', price: 'From $15' },
                            { label: 'Facials, Waxing & Wellness', price: 'From $8' },
                            { label: 'Manicure & Pedicure', price: 'From $45' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-black/5">
                                <div className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                                    <span className="font-serif text-xl text-foreground">{item.label}</span>
                                </div>
                                <span className="font-sans text-sm font-semibold text-primary ml-4 whitespace-nowrap">{item.price}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Stacked Images */}
                <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
                    {/* Image 1 (Bottom Layer - Large Vertical) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute right-0 top-0 w-[65%] h-[85%] z-10 shadow-2xl"
                        style={{
                            backgroundImage: "url('/services/hair_blowwave.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    {/* Image 2 (Middle Layer - Offset Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: -3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute left-0 bottom-10 w-[55%] h-[60%] z-20 shadow-2xl grayscale-[20%]"
                        style={{
                            backgroundImage: "url('/services/hair_colour.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    {/* Image 3 (Top Layer - Small Detail) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute left-[30%] top-[40%] w-[40%] h-[30%] z-30 shadow-2xl border-4 border-white"
                        style={{
                            backgroundImage: "url('/services/beauty_brow.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>

            </div>
        </section>
    );
}
