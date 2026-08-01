import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center bg-[#0a0908]">
      {/* Dark Romantic Muslim Couple Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-25">
        <img
          src="/muslim-couple.jpg"
          alt="Amal Ameen & Minsha"
          className="h-full w-full object-cover filter contrast-110 saturate-90 scale-105"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0908]/80 to-[#0a0908]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="gold-rule-dark h-px w-12 sm:w-24" />
          <span className="eyebrow-dark tracking-eyebrow text-[#d4af37]">
            TOGETHER WITH THEIR FAMILIES
          </span>
          <span className="gold-rule-dark h-px w-12 sm:w-24" />
        </motion.div>

        {/* Groom & Bride Script Typography with Capital Initial Letters */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-script flex flex-col items-center text-6xl sm:text-8xl md:text-9xl text-[#f7f3eb] text-subtle-glow leading-none"
        >
          <span className="pb-2">Amal Ameen</span>

          {/* 100% Bulletproof Native Inline Gold Rings Placement */}
          <div className="my-4 sm:my-6 flex items-center justify-center relative">
            <div className="absolute h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-radial from-[#f5d77f]/45 via-[#d4af37]/20 to-transparent blur-lg animate-pulse" />
            <img
              src="/gold-rings.png"
              alt="Polished Gold Wedding Rings"
              className="h-14 w-16 sm:h-20 sm:w-24 object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.5)]"
            />
          </div>

          <span className="pt-2">Minsha</span>
        </motion.h1>

        {/* Invitation Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display mt-8 max-w-lg text-lg font-light italic leading-luxury-body text-[#c2b5a1] sm:text-2xl"
        >
          Invite you to join them in celebrating their blessed Nikah & eternal union of love
        </motion.p>

        {/* Date & Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="glass-card-dark mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-full px-8 py-3.5 border border-[#d4af37]/40 shadow-2xl"
        >
          <span className="eyebrow-dark text-xs text-[#f5d77f]">SATURDAY</span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="font-display text-xl font-medium text-[#f7f3eb] text-gold-glow">
            SEPT 05, 2026
          </span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="eyebrow-dark text-xs text-[#f5d77f]">AT 11:00 AM</span>
        </motion.div>
      </div>
    </section>
  );
}
