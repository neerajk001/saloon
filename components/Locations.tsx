export default function Locations() {
    return (
        <section id="locations" className="py-32 px-8 bg-background">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="font-serif text-5xl text-center mb-16 text-foreground">Our Locations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Thames Location */}
                    <div className="bg-white p-12 border border-border text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-primary group">
                        <h3 className="font-serif text-3xl mb-6 text-foreground">Thames</h3>
                        <p className="font-sans text-base text-gray-600 mb-2 leading-relaxed">424 Pollen Street<br />Thames 3500</p>
                        <a href="tel:+6478685507" className="font-sans text-base text-gray-600 mb-8 block leading-relaxed hover:text-black">07 868 5507</a>
                        <a href="https://www.fresha.com/book-now/cielo-hair-l0uwx88v/all-offer?share=true&pId=87091" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-surface text-foreground font-sans text-sm uppercase tracking-[0.1em] border border-border transition-all duration-300 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground">
                            Book Thames
                        </a>
                    </div>

                    {/* Tauranga Location */}
                    <div className="bg-white p-12 border border-border text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-primary group">
                        <h3 className="font-serif text-3xl mb-6 text-foreground">Tauranga</h3>
                        <p className="font-sans text-base text-gray-600 mb-2 leading-relaxed">223 Chadwick Road, Greerton<br />Tauranga 3112</p>
                        <a href="tel:+6478685507" className="font-sans text-base text-gray-600 mb-8 block leading-relaxed hover:text-black">07 868 5507</a>
                        <a href="https://www.fresha.com/book-now/cielo-hair-beauty-wyhncpet/all-offer?share=true&pId=2612673" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-surface text-foreground font-sans text-sm uppercase tracking-[0.1em] border border-border transition-all duration-300 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground">
                            Book Tauranga
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
