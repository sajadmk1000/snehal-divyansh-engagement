import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 3 Dec 2026, 6:30 PM IST (= 13:00 UTC)
const ENGAGEMENT_TIME = Date.UTC(2026, 11, 3, 13, 0, 0);

const getTimeLeft = () => {
  const difference = Math.max(0, ENGAGEMENT_TIME - Date.now());
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const MARATHI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
const toMarathiDigits = (value) => String(value).replace(/\d/g, (d) => MARATHI_DIGITS[d]);

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="countdown"
      className="relative w-full py-14 xs:py-18 sm:py-22 px-5 flex flex-col items-center justify-center overflow-hidden text-[#F2E5C7]"
      style={{
        background: 'linear-gradient(145.85deg, #3a2309 0%, #4a2903 47.21%, #3a2309 95.71%)'
      }}
    >
      <div className="w-full max-w-sm md:max-w-xl lg:max-w-2xl flex flex-col items-center text-center gap-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2.5 w-full"
        >
          <span 
            className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#d4af37] tracking-[0.3em] uppercase whitespace-nowrap"
          >
            शुभ मुहूर्तापर्यंत
          </span>

          <h2 className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] leading-tight mt-1 drop-shadow-md">
            शुभदिनाची उलटगणती
          </h2>
        </motion.div>

        {/* 4 Timer Boxes Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-2.5 md:gap-4 lg:gap-5 w-full max-w-[325px] md:max-w-[400px] lg:max-w-[500px] mx-auto justify-items-center my-1"
        >
          {[
            { label: 'दिवस', value: timeLeft.days },
            { label: 'तास', value: timeLeft.hours },
            { label: 'मिनिटे', value: timeLeft.minutes },
            { label: 'सेकंद', value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[100px] lg:h-[100px] rounded-[16px] flex flex-col items-center justify-center gap-0.5 border border-[#d4af37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.5)] relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2A1502 0%, #1c0d01 100%)'
              }}
            >
              <span className="font-display font-medium text-[24px] md:text-[28px] lg:text-[34px] text-[#f5d77f] leading-none">
                {toMarathiDigits(String(item.value).padStart(2, '0'))}
              </span>
              <span className="font-sans-clean font-medium text-[8.5px] md:text-[9.5px] lg:text-[10.5px] tracking-[0.2em] text-[#d4af37] uppercase mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Subtitle Date */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-cormorant text-[16px] xs:text-[17px] text-[#f7f3eb] tracking-[0.1em] text-center mt-1"
        >
          गुरुवार, ०३ डिसेंबर २०२६, सायं. ६.३० वा.
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
