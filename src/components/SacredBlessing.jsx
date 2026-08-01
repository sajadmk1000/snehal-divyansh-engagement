import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function SacredBlessing() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 bg-gradient-to-b from-[#0a0908] via-[#141210] to-[#0a0908] text-center">
      {/* Background Stardust Radial Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 bg-radial from-[#d4af37]/20 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl pr-0 md:pr-12">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="gold-rule-dark h-px w-16 sm:w-28" />
          <Heart className="h-4 w-4 text-[#d4af37] fill-[#d4af37]/40" />
          <span className="gold-rule-dark h-px w-16 sm:w-28" />
        </motion.div>

        {/* Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl leading-[2.5] text-[#f5d77f] sm:text-5xl sm:leading-[2.6] text-gold-glow"
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
        </motion.div>

        {/* Arabic Verse (Surah Ar-Rum 30:21) */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-8"
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl leading-[2.4] text-[#c2b5a1] sm:text-3xl sm:leading-[2.5]"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </motion.div>

        {/* English Translation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="font-display text-xl font-light italic leading-luxury-body text-[#f7f3eb] sm:text-3xl sm:leading-luxury-body">
            “And among His signs is that He created for you spouses from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.”
          </h2>
          <p className="eyebrow-dark mt-4 text-[#d4af37]">Surah Ar-Rum · 30:21</p>
        </motion.div>

        {/* Henna Hands Photo Banner Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 relative mx-auto max-w-md overflow-hidden rounded-3xl border border-[#d4af37]/35 shadow-2xl"
        >
          <img
            src="/henna-hands.jpg"
            alt="Intricate Henna hands holding with gold rings"
            className="h-60 w-full object-cover filter contrast-105 saturate-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="font-script text-3xl text-[#f5d77f]">Bound by Faith & Blessings</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
