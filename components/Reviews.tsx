'use client';

import { motion } from 'framer-motion';
import { CircleUserRound, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aroha Williams',
    location: 'Papamoa',
    text: 'Best salon experience I have had in years. The colour blend was perfect and still looks fresh weeks later.'
  },
  {
    name: 'Liam Thompson',
    location: 'Greerton',
    text: 'Friendly team, on-time service, and a really sharp cut. Easy booking and a great atmosphere in the studio.'
  },
  {
    name: 'Sophie McKenzie',
    location: 'Mount Maunganui',
    text: 'I came in for a treatment and left feeling amazing. The staff explained every step and the result was stunning.'
  },
  {
    name: 'Wiremu Rangi',
    location: 'Katikati',
    text: 'Professional service from start to finish. Super clean, welcoming, and the attention to detail is top class.'
  },
  {
    name: 'Emily Ngata',
    location: 'Waihi',
    text: 'Loved the whole experience. The stylist listened carefully and gave exactly the look I wanted.'
  },
  {
    name: 'Jack O\'Connor',
    location: 'Paeroa',
    text: 'Great value and quality. Booking was easy and the final style lasted really well for my event.'
  }
];

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            Client Love
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            What People Across New Zealand Say
          </h2>
          <p className="font-sans text-lg text-[#555] max-w-2xl mx-auto font-light">
            Real feedback from clients who trust Cielo Hair & Beauty for their hair and beauty care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="p-8 bg-surface rounded-2xl border border-black/5 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>

              <p className="font-sans text-[#555] leading-relaxed mb-6">
                {review.text}
              </p>

              <div className="border-t border-black/10 pt-4">
                <div className="flex items-center gap-3 mb-1">
                  <CircleUserRound size={22} className="text-primary/80" />
                  <h3 className="font-serif text-xl text-foreground">{review.name}</h3>
                </div>
                <p className="font-sans text-sm text-neutral-500">{review.location}, New Zealand</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
