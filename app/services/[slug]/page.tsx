import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const servicesData: Record<string, { title: string; description: string; highlights: string[]; image: string }> = {
    'hair-styling': {
        title: 'Precision Hair Styling',
        description: 'Our expert stylists combine technical precision with artistic vision to create cuts that enhance your natural features and reflect your personal style. From classic shapes to modern textures, we deliver a look that is uniquely yours.',
        highlights: ['Consultation tailored to your face shape', 'Precision cutting techniques', 'Blow-dry and finishing included', 'Advice on home care and styling'],
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop'
    },
    'colouring': {
        title: 'Bespoke Colouring',
        description: 'Transform your look with our custom colouring services. Using only premium products, our colourists create stunning, multi-dimensional shades that maintain the health and shine of your hair.',
        highlights: ['Ammonia-free options available', 'Custom colour mixing', 'Balayage and Ombre techniques', 'Post-colour gloss treatments'],
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop'
    },
    'beauty-treatments': {
        title: 'Rejuvenating Beauty',
        description: 'Immerse yourself in our range of restorative beauty treatments. Designed to relax and rejuvenate, our therapies use high-performance ingredients to leave you feeling refreshed and glowing.',
        highlights: ['Deep cleansing facials', 'Relaxing facial massages', 'Premium skincare products', 'Holistic wellness approach'],
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop'
    },
    'grooming': {
        title: 'Luxury Grooming',
        description: 'Refined grooming services for the modern individual. We offer detailed cuts, beard shaping, and skincare treatments in a relaxed, masculine environment.',
        highlights: ['Precision clipper & scissor cuts', 'Hot towel shaves', 'Beard trim & shape', 'Scalp treatments'],
        image: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2670&auto=format&fit=crop'
    }
};

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-center bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

                <div className="relative z-10 text-center px-8 translate-y-8 animate-fade-up">
                    <span className="block font-sans text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
                        Signature Service
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                        {service.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-8 max-w-[900px] mx-auto">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-sm font-sans uppercase tracking-widest text-primary hover:text-foreground transition-colors mb-8">
                        ← Back to Home
                    </Link>
                    <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-12">
                        {service.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-foreground mb-6 font-semibold">
                            Highlights
                        </h3>
                        <ul className="space-y-4">
                            {service.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 font-sans text-neutral-600 font-light text-lg border-b border-black/5 pb-4 last:border-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start p-8 bg-surface border border-black/5 rounded-2xl">
                        <h3 className="font-serif text-2xl text-foreground mb-4">
                            Ready to transform?
                        </h3>
                        <p className="font-sans text-neutral-500 mb-8 font-light">
                            Book your {service.title.toLowerCase()} appointment today using our secure online system.
                        </p>
                        <a href="#book" className="w-full py-4 bg-foreground text-white text-center font-sans uppercase tracking-[0.1em] text-sm hover:bg-primary transition-all">
                            Book This Service
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
