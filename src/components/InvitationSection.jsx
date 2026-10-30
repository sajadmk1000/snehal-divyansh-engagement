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
            सस्नेह निमंत्रण
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
          <span className="block text-[#f7f3eb]">॥ श्री गणेशाय नमः ॥</span>
          <span className="block text-[#c2b5a1] mt-3">श्री गणेशाच्या कृपाशीर्वादाने, खालील उभयतांच्या साखरपुडा समारंभास आपण सहकुटुंब उपस्थित राहून शुभाशीर्वाद द्यावेत, ही नम्र विनंती.</span>
        </motion.p>

        {/* Groom & Bride Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center w-full mb-8 xs:mb-10"
        >
          {/* Bride Name */}
          <h3 
            className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] text-center leading-[1.05] mb-2 drop-shadow-md"
          >
            ले. स्नेहल
          </h3>
          <p className="font-cormorant text-[15px] xs:text-[16px] text-[#c2b5a1] text-center leading-snug mb-3 max-w-[300px]">
            सौ. लक्ष्मी संपतराव पाटील व श्री. संपतराव बापू पाटील यांची कन्या
          </p>

          {/* Ampersand symbol */}
          <span className="font-vibes text-[34px] xs:text-[38px] text-[#d4af37] text-center leading-none mb-2">
            आणि
          </span>

          {/* Groom Name */}
          <h3 
            className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] text-center leading-[1.05] mt-1 drop-shadow-md"
          >
            ले. दिव्यांश
          </h3>
          <p className="font-cormorant text-[15px] xs:text-[16px] text-[#c2b5a1] text-center leading-snug mt-2 max-w-[300px]">
            सौ. उमावती शर्मा व श्री. ब्रह्मदेव शर्मा यांचे सुपुत्र
          </p>

          <p className="font-cormorant text-[15px] xs:text-[16px] italic text-[#c2b5a1] mt-5 max-w-[300px] leading-relaxed">
            आपली स्नेहपूर्ण उपस्थिती आणि शुभाशीर्वाद या नव्या प्रवासाची सुरुवात अविस्मरणीय करतील.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
