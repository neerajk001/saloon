'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669', alt: 'Hair Colouring', span: 'col-span-1 row-span-2' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669', alt: 'Bridal Style', span: 'col-span-1 row-span-1' },
    { id: 3, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574', alt: 'Salon Interior', span: 'col-span-1 row-span-1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576', alt: 'Stylist at Work', span: 'col-span-1 row-span-2' }, // Tall
    { id: 5, src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669', alt: 'Model Look', span: 'col-span-1 row-span-1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1596704017614-205d6cb82e2e?q=80&w=2670', alt: 'Details', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                        Portfolio
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        Our Gallery
                    </h2>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`relative rounded-xl overflow-hidden group cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-300 ${img.span}`}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${img.src}')` }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn size={32} className="text-white drop-shadow-md" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="absolute top-6 right-6 z-50">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white/80 hover:text-white"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={40} />
                            </motion.button>
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Use standard img for full quality in lightbox */}
                            <img
                                src={selectedImage}
                                alt="Gallery Fullscreen"
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
