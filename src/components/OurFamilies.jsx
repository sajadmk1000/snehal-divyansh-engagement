import React from 'react';
import { motion } from 'framer-motion';

export default function OurFamilies() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#0a0908] overflow-hidden text-center">
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark text-[#d4af37]"
        >
          TOGETHER WITH OUR FAMILIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-script mt-2 text-5xl sm:text-7xl text-[#f7f3eb] drop-shadow-md"
        >
          Our Families
        </motion.h2>

        <div className="mt-4 mb-12 flex justify-center">
          <span className="gold-rule-dark h-px w-32" />
        </div>

        {/* Groom's Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-dark rounded-3xl p-8 sm:p-10 border border-[#d4af37]/35 relative"
        >
          <span className="eyebrow-dark text-xs text-[#d4af37] tracking-widest uppercase">
            GROOM'S FAMILY
          </span>
          <h3 className="font-script mt-2 text-4xl sm:text-5xl text-[#f7f3eb]">
            Amal Ameen
          </h3>
          <p className="font-display mt-2 text-sm italic text-[#c2b5a1]">
            Son of
          </p>
          <p className="font-display mt-1 text-xl font-medium text-[#f5d77f]">
            Mohammed Aboobacker <br />
            <span className="text-base text-[#c2b5a1] font-light">&amp;</span> Fathimath Zuhra
          </p>

          <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
            <p className="eyebrow-dark text-[0.65rem] text-[#857a6b] tracking-wider uppercase mb-2">
              GRANDPARENTS
            </p>
            <p className="font-display text-sm italic text-[#c2b5a1] leading-relaxed">
              Aboobacker Musliyar (Late) &amp; Aisha Ibrahim
              <br />
              Koyakutty Haji (Late) &amp; Halima Koyakutty
            </p>
          </div>
        </motion.div>

        {/* Decorative Separator Ribbon */}
        <div className="my-8 flex justify-center items-center text-[#d4af37] text-xl opacity-60">
          ────୨ৎ────
        </div>

        {/* Bride's Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card-dark rounded-3xl p-8 sm:p-10 border border-[#d4af37]/35 relative"
        >
          <span className="eyebrow-dark text-xs text-[#d4af37] tracking-widest uppercase">
            BRIDE'S FAMILY
          </span>
          <h3 className="font-script mt-2 text-4xl sm:text-5xl text-[#f7f3eb]">
            Minsha
          </h3>
          <p className="font-display mt-2 text-sm italic text-[#c2b5a1]">
            Daughter of
          </p>
          <p className="font-display mt-1 text-xl font-medium text-[#f5d77f]">
            Abdurahiman Musliyar <br />
            <span className="text-base text-[#c2b5a1] font-light">&amp;</span> Sainaba Abdurahiman
          </p>

          <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
            <p className="eyebrow-dark text-[0.65rem] text-[#857a6b] tracking-wider uppercase mb-2">
              GRANDPARENTS
            </p>
            <p className="font-display text-sm italic text-[#c2b5a1] leading-relaxed">
              Abdul Rahman (Late) &amp; Zainab Abdul Rahman
              <br />
              Omar Saqafi (Late) &amp; Ruqayyah Omar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
