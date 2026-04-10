'use client';

import { motion } from 'framer-motion';

const videos = [
    { id: 1, videoUrl: '/video1.mp4' },
    { id: 2, videoUrl: '/video2.mp4' },
    { id: 3, videoUrl: '/video3.mp4' },
    { id: 4, videoUrl: '/IMG_186710013.MOV' }
];

export default function FeaturedVideos() {
    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                        Visual Stories
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                        Featured Videos
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {videos.map((video, idx) => (
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
        </section>
    );
}
