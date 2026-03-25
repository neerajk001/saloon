export default function CallToAction() {
    return (
        <section id="book" className="py-32 px-8 bg-secondary text-center">
            <div className="max-w-[800px] mx-auto">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                    Cielo Hair & Beauty
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
                    Ready for Your Experience?
                </h2>
                <p className="font-sans text-lg text-[#555] mb-12 max-w-[600px] mx-auto font-light">
                    Book your next hair or beauty appointment online — fast, easy and available 24/7.
                    We look forward to welcoming you to Cielo.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center gap-3 px-12 py-4 bg-foreground text-white font-sans text-sm uppercase tracking-[0.15em] transition-all duration-300 shadow-md hover:bg-primary hover:-translate-y-1 hover:shadow-xl rounded-full"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book an Appointment
                </a>
                <p className="font-sans text-xs text-neutral-400 mt-6">
                    Powered by Fresha — opens in a new tab
                </p>
            </div>
        </section>
    );
}
