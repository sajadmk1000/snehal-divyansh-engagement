import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-6 pb-10 sm:py-16 text-center bg-[#0a0908]">
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

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center justify-center my-auto">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-4 sm:mb-6"
        >
          <span className="gold-rule-dark h-px w-10 xs:w-12 sm:w-24" />
          <span className="eyebrow-dark tracking-eyebrow text-[#d4af37] text-[10px] xs:text-xs">
            WITH THE BLESSINGS OF ALLAH
          </span>
          <span className="gold-rule-dark h-px w-10 xs:w-12 sm:w-24" />
        </motion.div>

        {/* Groom & Bride Script Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-script flex flex-col items-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#f7f3eb] text-subtle-glow leading-tight"
        >
          <span className="pb-1">Amal Ameen</span>

          {/* Polished Gold Intertwined Rings Emblem */}
          <div className="my-2 sm:my-3 flex items-center justify-center relative">
            <div className="absolute h-12 w-12 sm:h-18 sm:w-18 rounded-full bg-radial from-[#f5d77f]/45 via-[#d4af37]/20 to-transparent blur-lg animate-pulse" />
            <img
              src="/gold-rings.png"
              alt="Polished Gold Wedding Rings"
              className="h-10 w-12 sm:h-14 sm:w-16 object-contain drop-shadow-[0_8px_16px_rgba(212,175,55,0.5)]"
            />
          </div>

          <span className="pt-1">Minsha</span>
        </motion.h1>

        {/* Invitation Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display mt-5 sm:mt-8 max-w-lg text-base xs:text-lg font-light italic leading-luxury-body text-[#c2b5a1] sm:text-2xl px-2"
        >
          Invite you to join them in celebrating their blessed Nikah &amp; eternal union of love
        </motion.p>

        {/* Date & Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="glass-card-dark mt-6 sm:mt-8 inline-flex flex-wrap items-center justify-center gap-3 xs:gap-4 rounded-full px-6 xs:px-8 py-3 sm:py-3.5 border border-[#d4af37]/40 shadow-2xl"
        >
          <span className="eyebrow-dark text-[11px] xs:text-xs text-[#f5d77f]">SATURDAY</span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="font-display text-lg xs:text-xl font-medium text-[#f7f3eb] text-gold-glow">
            SEPT 05, 2026
          </span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="eyebrow-dark text-[11px] xs:text-xs text-[#f5d77f]">AT 11:00 AM</span>
        </motion.div>
      </div>
    </section>
  );
}
