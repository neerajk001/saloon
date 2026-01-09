export default function CallToAction() {
    return (
        <section id="book" className="py-32 px-8 bg-secondary text-center">
            <div className="max-w-[800px] mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Ready for Your Experience?</h2>
                <p className="font-sans text-lg text-[#555] mb-12 max-w-[600px] mx-auto">
                    Secure your preferred time at our Thames or Tauranga locations.
                    We look forward to welcoming you to Cielo.
                </p>
                <a href="#locations" className="inline-block px-12 py-4 bg-foreground text-white font-sans text-base uppercase tracking-[0.1em] transition-all duration-300 shadow-md hover:bg-primary hover:-translate-y-1 hover:shadow-xl">
                    Book Your Appointment
                </a>
            </div>
        </section>
    );
}
