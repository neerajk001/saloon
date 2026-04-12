'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const galleryImages = [
    { id: 1, src: '/salon1%20(1).JPG', alt: 'Salon Gallery 1', span: 'col-span-1 row-span-2' },
    { id: 2, src: '/salon1%20(2).JPG', alt: 'Salon Gallery 2', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/salon1%20(3).JPG', alt: 'Salon Gallery 3', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/hair1.JPG', alt: 'Hair 1', span: 'col-span-1 row-span-2' },
    { id: 5, src: '/hair2.JPG', alt: 'Hair 2', span: 'col-span-1 row-span-1' },
    { id: 6, src: '/hair3.jpeg', alt: 'Hair 3', span: 'col-span-1 row-span-1' },
    { id: 7, src: '/hair4.JPG', alt: 'Hair 4', span: 'col-span-1 row-span-2' },
    { id: 8, src: '/hair5.JPG', alt: 'Hair 5', span: 'col-span-1 row-span-1' },
    { id: 9, src: '/hair6.JPG', alt: 'Hair 6', span: 'col-span-1 row-span-1' },
    { id: 10, src: '/salon1%20(4).JPG', alt: 'Salon Gallery 4', span: 'col-span-1 row-span-2' },
    { id: 11, src: '/salon1%20(5).JPG', alt: 'Salon Gallery 5', span: 'col-span-1 row-span-1' },
];

const galleryVideos = [
    { id: 1, videoUrl: '/video1.mp4' },
    { id: 2, videoUrl: '/video2.mp4' },
    { id: 3, videoUrl: '/video3.mp4' },
    { id: 4, videoUrl: '/IMG_186710013.MOV' }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            <div className="pt-32 pb-24">
                <div className="max-w-[1200px] mx-auto px-8">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-2 group text-primary font-sans text-xs uppercase tracking-[0.2em] hover:text-foreground transition-colors"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                            Portfolio
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                            Our Gallery
                        </h1>
                        <p className="font-sans text-lg text-[#555] max-w-2xl mx-auto font-light">
                            Explore our collection of beautiful salon work and transformations
                        </p>
                    </motion.div>

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
            </div>

            {/* Videos Section */}
            <div className="py-24 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-8">
                    {/* Videos Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                            Visual Stories
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                            Featured Videos
                        </h2>
                    </motion.div>

                    {/* Video Grid - Zig Zag */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {galleryVideos.map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 40, rotate: -2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.12 }}
                                className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                                    idx % 2 === 1 ? 'lg:-translate-y-8' : 'lg:translate-y-0'
                                }`}
                            >
                                <video
                                    src={video.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
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
                            <img
                                src={selectedImage}
                                alt="Gallery Fullscreen"
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
