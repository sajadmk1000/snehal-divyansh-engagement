import React from 'react';
import { motion } from 'framer-motion';

export const FooterSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1 }}
      className="relative w-full py-16 px-5 text-white overflow-hidden min-h-[580px] flex flex-col items-center justify-center bg-[#070504]"
    >
      {/* Background Stage Image */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-25 filter contrast-110"
        style={{ backgroundImage: `url('/images/footer/footer_stage_bg.jpg')` }}
      />

      {/* Darkened vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0a0908]/90 via-[#070504]/70 to-[#040302]/95" />

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center gap-5">

        {/* Label: FOREVER & ALWAYS */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans-clean font-normal text-[10px] text-[#d4af37] uppercase text-center tracking-[0.40em] leading-[15px]"
        >
          FOREVER &amp; ALWAYS
        </motion.p>

        {/* BEST WISHES FROM & Family and Friends */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-1.5 my-1"
        >
          <span
            className="font-cormorant font-medium text-[13px] uppercase text-[#d4af37] text-center tracking-[0.35em] leading-[20px]"
          >
            BEST WISHES FROM
          </span>

          <h3
            className="font-vibes font-normal text-[48px] text-[#f5d77f] text-center leading-[52px] drop-shadow-md"
          >
            Family &amp; Friends
          </h3>
        </motion.div>

        {/* Islamic Du'a Prayer Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-cormorant italic text-[clamp(14px,4.5vw,18px)] text-[#f7f3eb]/95 w-full max-w-[340px] text-center leading-[26px] px-2 my-2"
        >
          <span className="block">With love, prayers, and deep gratitude.</span>
          <span className="block">May Allah bless this union with</span>
          <span className="block">Barakah, Mercy, Harmony and</span>
          <span className="block">Eternal happiness. Aameen!</span>
        </motion.p>

        {/* Footer Credit Line from card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 pt-4 border-t border-[#d4af37]/25 w-full max-w-[280px]"
        >
          <p className="font-sans-clean text-xs text-[#d4af37] tracking-[0.25em] uppercase font-medium">
            Sharing the happiness : Family
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
