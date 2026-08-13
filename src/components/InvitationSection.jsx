import React from 'react';
import { motion } from 'framer-motion';

export const InvitationSection = () => {
  return (
    <section 
      id="invitation"
      className="relative w-full py-14 xs:py-18 sm:py-22 px-4 xs:px-6 flex flex-col items-center justify-center bg-[#0a0908] overflow-hidden"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 9, 8, 0) 100%), #0a0908'
      }}
    >
      <div className="w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[420px] flex flex-col items-center text-center">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="gold-rule-dark h-px w-8 xs:w-10 sm:w-16" />
          <span className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#d4af37] tracking-[0.3em] uppercase">
            CORDIAL INVITATION
          </span>
          <span className="gold-rule-dark h-px w-8 xs:w-10 sm:w-16" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant font-normal text-[16px] xs:text-[18px] sm:text-[20px] leading-[1.65] text-[#f7f3eb] w-full max-w-[360px] px-2 text-center mb-8 xs:mb-10"
        >
          <span className="block text-[#f7f3eb]">In the name of Allah, the Most Beneficent, the Most Merciful.</span>
          <span className="block text-[#c2b5a1] mt-3">We cordially request the honor of your presence and blessings as we celebrate the sacred Nikah Ceremony of</span>
        </motion.p>

        {/* Groom & Bride Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center w-full mb-8 xs:mb-10"
        >
          {/* Groom Name */}
          <h3 
            className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] text-center leading-[1.05] mb-2 drop-shadow-md"
          >
            Amal Ameen K K
          </h3>

          {/* Ampersand symbol */}
          <span className="font-vibes text-[34px] xs:text-[38px] text-[#d4af37] text-center leading-none mb-2">
            with
          </span>

          {/* Bride Name */}
          <h3 
            className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] text-center leading-[1.05] mt-1 drop-shadow-md"
          >
            Minsha Ali
          </h3>

          <p className="font-cormorant text-[15px] xs:text-[16px] italic text-[#c2b5a1] mt-5 max-w-[300px] leading-relaxed">
            Your prayers and warm presence will make our union truly memorable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
