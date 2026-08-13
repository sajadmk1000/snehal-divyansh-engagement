import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountdownSection = () => {
  const targetDate = new Date('2026-09-05T11:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="countdown"
      className="relative w-full py-16 xs:py-20 sm:py-24 px-5 flex flex-col items-center justify-center overflow-hidden text-[#F2E5C7]"
      style={{
        background: 'linear-gradient(145.85deg, #4D300E 0%, #613706 47.21%, #4D300E 95.71%)'
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
            className="font-mona font-normal text-[10px] uppercase text-[#F2E5C7] tracking-[0.25em] whitespace-nowrap"
          >
            UNTIL WE BECOME ONE
          </span>
 
          <h2 className="font-vibes font-normal text-[46px] md:text-[54px] lg:text-[60px] text-[#F2E5C7] leading-tight mt-1">
            Countdown to our<br />Special Day
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
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[100px] lg:h-[100px] rounded-[14px] flex flex-col items-center justify-center gap-0.5 border border-[#7A4B13]/60 shadow-[0_8px_20px_rgba(0,0,0,0.35)] relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #3D2206 0%, #2A1502 100%)'
              }}
            >
              <span className="font-mona font-normal text-[24px] md:text-[28px] lg:text-[34px] text-[#F2E5C7] leading-none">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-mona font-normal text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.16em] text-[#F2E5C7]/80 uppercase mt-0.5">
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
          className="font-mona font-normal text-[14px] text-[#F2E5C7] tracking-[0.05em] text-center mt-1"
        >
          05 Sept 2026. 11:00 AM
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
