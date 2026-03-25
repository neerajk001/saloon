export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-black bg-cover bg-center px-8 text-center"
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop')"
            }}
        >
            <div className="max-w-[800px] z-10 opacity-0 translate-y-8 animate-fade-up">
                <h1 className="font-serif text-6xl md:text-7xl text-white mb-6 -tracking-[0.02em]">
                    Elevated Hair & Beauty Experience
                </h1>
                <p className="font-sans text-lg md:text-xl text-white/90 mb-12 font-light tracking-wide">
                    Where timeless elegance meets modern artistry in a sanctuary of calm.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="#services"
                        className="px-10 py-4 border border-white bg-transparent text-white font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 shadow-sm hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg"
                    >
                        Explore Services
                    </a>
                    <a
                        href="#book"
                        className="px-10 py-4 bg-white text-black font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 shadow-sm hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg"
                    >
                        Book an Appointment
                    </a>
                </div>
            </div>
        </section>
    );
}
