import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, MapPin, Car, Compass } from 'lucide-react';

export default function AllDetails() {
  const detailsList = [
    {
      title: 'DRESS CODE',
      icon: Shirt,
      desc: 'Semi-formal & traditional elegant attire. Pastel & gold accents are welcome to match our royal wedding theme.',
    },
    {
      title: 'VENUE & TRAVEL',
      icon: MapPin,
      desc: 'Madavoor Palace Auditorium, Narikkuni, Kozhikode, Kerala. Easily accessible via State Highway with dedicated guest valet parking.',
    },
    {
      title: 'HOSPITALITY & ASSISTANCE',
      icon: Compass,
      desc: 'Our family team is at your service for travel assistance and venue navigation during the event.',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a0908] via-[#141210] to-[#0a0908] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header Title (SS4 Style Script Title) */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-dark text-[#d4af37]"
          >
            ESSENTIAL INFORMATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-script mt-2 text-6xl text-[#f5d77f] drop-shadow-md sm:text-7xl"
          >
            All the details
          </motion.h2>

          <div className="mt-4 flex justify-center">
            <span className="gold-rule-dark h-px w-32" />
          </div>
        </div>

        {/* SS4 Style Vertical Node Line & Cards */}
        <div className="relative pl-12 sm:pl-16">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-5 sm:left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20" />

          <div className="space-y-12">
            {detailsList.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Gold Node */}
                  <div className="absolute -left-12 sm:-left-16 top-1 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#141210] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <Icon className="h-5 w-5 text-[#f5d77f]" />
                  </div>

                  <div className="glass-card-dark rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#d4af37]/60">
                    <h3 className="font-display text-xl font-semibold tracking-wider uppercase text-[#f5d77f] text-gold-glow">
                      {item.title}
                    </h3>
                    <p className="font-sans-clean mt-2 text-sm font-light leading-luxury-body text-[#c2b5a1]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
