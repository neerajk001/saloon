export default function Locations() {
    return (
        <section id="locations" className="py-32 px-8 bg-background">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="font-serif text-5xl text-center mb-16 text-foreground">Our Locations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Thames Location */}
                    <div className="bg-white p-12 border border-border text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-primary group">
                        <h3 className="font-serif text-3xl mb-6 text-foreground">Thames</h3>
                        <p className="font-sans text-base text-gray-600 mb-2 leading-relaxed">123 Pollen Street<br />Thames 3500</p>
                        <a href="tel:+6471234567" className="font-sans text-base text-gray-600 mb-8 block leading-relaxed hover:text-black">+64 7 123 4567</a>
                        <a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-surface text-foreground font-sans text-sm uppercase tracking-[0.1em] border border-border transition-all duration-300 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground">
                            Book Thames
                        </a>
                    </div>

                    {/* Tauranga Location */}
                    <div className="bg-white p-12 border border-border text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-primary group">
                        <h3 className="font-serif text-3xl mb-6 text-foreground">Tauranga</h3>
                        <p className="font-sans text-base text-gray-600 mb-2 leading-relaxed">45 The Strand<br />Tauranga 3110</p>
                        <a href="tel:+6477654321" className="font-sans text-base text-gray-600 mb-8 block leading-relaxed hover:text-black">+64 7 765 4321</a>
                        <a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-surface text-foreground font-sans text-sm uppercase tracking-[0.1em] border border-border transition-all duration-300 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground">
                            Book Tauranga
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
