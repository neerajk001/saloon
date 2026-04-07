export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-black bg-cover bg-center px-4 md:px-8 text-center"
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop')"
            }}
        >
            <div className="max-w-full md:max-w-[800px] z-10 opacity-0 translate-y-8 animate-fade-up w-full flex flex-col items-center justify-center mt-8 md:mt-12">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 -tracking-[0.02em] leading-tight">
                    Elevated Hair & Beauty Experience
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full px-2 sm:px-4 max-w-md sm:max-w-2xl">
                    <div className="bg-white/10 text-white px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-white/30 flex flex-col items-center justify-center">
                        <p className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.12em] text-white/60 mb-2 md:mb-3">Book appointment</p>
                        <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-white mb-3 md:mb-6 font-light">Tauranga</h3>
                        <a
                            href="https://www.fresha.com/book-now/cielo-hair-beauty-wyhncpet/all-offer?share=true&pId=2612673"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 sm:px-5 md:px-8 py-2 md:py-3 bg-white text-black font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-primary text-nowrap font-semibold"
                        >
                            Book Now
                        </a>
                    </div>
                    <div className="bg-white/10 text-white px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-white/30 flex flex-col items-center justify-center">
                        <p className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.12em] text-white/60 mb-2 md:mb-3">Book appointment</p>
                        <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-white mb-3 md:mb-6 font-light">Thames</h3>
                        <a
                            href="https://www.fresha.com/book-now/cielo-hair-l0uwx88v/all-offer?share=true&pId=87091"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 sm:px-5 md:px-8 py-2 md:py-3 bg-white text-black font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-primary text-nowrap font-semibold"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
