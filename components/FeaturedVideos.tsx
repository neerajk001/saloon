'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = [
    {
        id: 1,
        title: 'Backstage at Fashion Week',
        thumbnail: 'https://images.unsplash.com/photo-1492106087820-71f171d0832e?q=80&w=2574',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
        id: 2,
        title: 'The Art of Precision Cutting',
        thumbnail: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 3,
        title: 'A Day at Cielo',
        thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];

export default function FeaturedVideos() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                        Visual Stories
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        Featured Videos
                    </h2>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">
                    {/* Main Large Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                        onClick={() => setSelectedVideo(videos[0].videoUrl)}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${videos[0].thumbnail}')` }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Play fill="white" className="ml-1 opacity-90" />
                            </div>
                            <h3 className="font-serif text-3xl font-medium tracking-wide">{videos[0].title}</h3>
                        </div>
                    </motion.div>

                    {/* Right Column: Two Small Videos */}
                    <div className="flex flex-col gap-8 h-full">
                        {videos.slice(1).map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                                className="relative flex-1 min-h-[250px] rounded-2xl overflow-hidden group cursor-pointer shadow-md"
                                onClick={() => setSelectedVideo(video.videoUrl)}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${video.thumbnail}')` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Play size={20} fill="white" className="ml-1 opacity-90" />
                                    </div>
                                    <h3 className="font-serif text-xl font-medium tracking-wide">{video.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-6 right-6 text-white/80 hover:text-white"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`${selectedVideo}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
