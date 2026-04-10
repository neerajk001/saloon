export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black bg-cover bg-center px-4 md:px-8 py-20 md:py-24 text-center overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop')"
            }}
        >
            <div className="max-w-full md:max-w-[800px] z-10 opacity-0 translate-y-8 animate-fade-up w-full flex flex-col items-center justify-center">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 -tracking-[0.02em] leading-tight whitespace-nowrap">
                    Elevated Hair & Beauty Experience
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 w-full px-2 sm:px-4 max-w-xs sm:max-w-md md:max-w-2xl mb-8 md:mb-10">
                    <div className="relative md:overflow-hidden group md:rounded-sm">
                        {/* Background blur and gradient layer */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-sm rounded-sm"></div>
                        {/* Card content */}
                        <div className="relative z-10 text-white px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-7 md:rounded-sm md:border md:border-white/15 flex flex-col items-center justify-start md:min-h-[320px] transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl md:hover:border-white/30 md:hover:shadow-black/40">
                            <p className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.12em] text-white/60 mb-2 md:mb-3">Book appointment</p>
                            <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-white mb-3 md:mb-5 font-light">Tauranga</h3>
                            <p className="font-sans text-xs md:text-sm text-white/75 leading-relaxed mb-2">223 Chadwick Road, Greerton</p>
                            <p className="font-sans text-xs md:text-sm text-white/75 leading-relaxed mb-2">Tauranga 3112</p>
                            <span className="hidden md:block font-sans text-xs md:text-sm text-transparent mb-4 md:mb-5 select-none">07 868 5507</span>
                            <a
                                href="https://www.fresha.com/book-now/cielo-hair-beauty-wyhncpet/all-offer?share=true&pId=2612673"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 md:mt-auto px-3 sm:px-5 md:px-8 py-2 md:py-3 bg-[#f28c28] text-white font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#e47910] text-nowrap font-semibold shadow-md hover:shadow-lg"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                    <div className="relative md:overflow-hidden group md:rounded-sm">
                        {/* Background blur and gradient layer */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-sm rounded-sm"></div>
                        {/* Card content */}
                        <div className="relative z-10 text-white px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-7 md:rounded-sm md:border md:border-white/15 flex flex-col items-center justify-start md:min-h-[320px] transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl md:hover:border-white/30 md:hover:shadow-black/40">
                            <p className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.12em] text-white/60 mb-2 md:mb-3">Book appointment</p>
                            <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-white mb-3 md:mb-5 font-light">Thames</h3>
                            <p className="font-sans text-xs md:text-sm text-white/75 leading-relaxed mb-2">424 Pollen Street</p>
                            <p className="font-sans text-xs md:text-sm text-white/75 leading-relaxed mb-2">Thames 3500</p>
                            <a href="tel:+6478685507" className="font-sans text-xs md:text-sm text-white/80 mb-4 md:mb-5 hover:text-white transition-colors">07 868 5507</a>
                            <a
                                href="https://www.fresha.com/book-now/cielo-hair-l0uwx88v/all-offer?share=true&pId=87091"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 md:mt-auto px-3 sm:px-5 md:px-8 py-2 md:py-3 bg-[#f28c28] text-white font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#e47910] text-nowrap font-semibold shadow-md hover:shadow-lg"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
