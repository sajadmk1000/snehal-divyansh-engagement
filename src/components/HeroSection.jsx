import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-6 pb-12 sm:py-16 text-center bg-[#0a0908]">
      {/* Dark Romantic Couple Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <img
          src="/images/couple/swing_couple.png"
          alt="Snehal & Divyansh"
          className="h-full w-full object-contain object-bottom"
          style={{ filter: 'sepia(0.35) saturate(0.95) contrast(1.05)' }}
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
          className="flex items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          <span className="gold-rule-dark h-px w-10 xs:w-12 sm:w-20" />
          <span className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#d4af37] tracking-[0.3em] uppercase">
            WITH THE BLESSINGS OF LORD GANESHA
          </span>
          <span className="gold-rule-dark h-px w-10 xs:w-12 sm:w-20" />
        </motion.div>

        {/* Groom & Bride Script Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-vibes flex flex-col items-center text-[52px] xs:text-[62px] sm:text-[72px] text-[#f5d77f] drop-shadow-md leading-tight"
        >
          <span className="pb-1">Lt. Snehal</span>

          {/* Polished Gold Intertwined Rings Emblem */}
          <div className="my-2 sm:my-3 flex items-center justify-center relative">
            <div className="absolute h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-radial from-[#f5d77f]/45 via-[#d4af37]/20 to-transparent blur-lg animate-pulse" />
            <img
              src="/gold-rings.png"
              alt="Polished Gold Engagement Rings"
              className="h-10 w-12 sm:h-14 sm:w-16 object-contain drop-shadow-[0_8px_16px_rgba(212,175,55,0.5)]"
            />
          </div>

          <span className="pt-1">Lt. Divyansh</span>
        </motion.h1>

        {/* Invitation Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cormorant mt-6 sm:mt-8 max-w-md text-[16px] xs:text-[18px] sm:text-[20px] font-normal italic leading-[1.6] text-[#c2b5a1] px-2"
        >
          Invite you to join them in celebrating their Sakharpuda &amp; the beautiful beginning of forever
        </motion.p>

        {/* Date & Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="glass-card-dark mt-7 sm:mt-9 inline-flex flex-wrap items-center justify-center gap-3 xs:gap-4 rounded-full px-6 xs:px-8 py-3 sm:py-3.5 border border-[#d4af37]/40 shadow-2xl"
        >
          <span className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#f5d77f] tracking-[0.2em] uppercase">THURSDAY</span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="font-display text-base xs:text-lg font-medium text-[#f7f3eb] text-gold-glow tracking-wider">
            DEC 03, 2026
          </span>
          <span className="h-3 w-px bg-[#d4af37]/50" />
          <span className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#f5d77f] tracking-[0.2em] uppercase">AT 6:30 PM</span>
        </motion.div>
      </div>
    </section>
  );
}
