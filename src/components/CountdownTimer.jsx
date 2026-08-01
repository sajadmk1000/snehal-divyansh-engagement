import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const targetDate = new Date('2026-09-05T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#0a0908] overflow-hidden text-center">
      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark text-[#c2b5a1]/70"
        >
          05 · SEPTEMBER · 2026 · KOZHIKODE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-script mt-2 text-5xl sm:text-7xl text-[#f7f3eb] drop-shadow-md"
        >
          Counting the Days
        </motion.h2>

        <p className="font-display mt-2 text-sm italic text-[#d4af37]">
          Until we unite in eternal bliss in front of our loved ones
        </p>

        {/* Live Ticker Blocks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto"
        >
          {[
            { label: 'DAYS', val: timeLeft.days },
            { label: 'HOURS', val: timeLeft.hours },
            { label: 'MINUTES', val: timeLeft.minutes },
            { label: 'SECONDS', val: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card-dark flex flex-col items-center justify-center rounded-2xl p-3 sm:p-5 border border-[#d4af37]/35 shadow-xl"
            >
              <span className="font-display text-3xl sm:text-5xl font-light text-[#f5d77f] text-gold-glow">
                {item.val}
              </span>
              <span className="eyebrow-dark mt-2 text-[0.6rem] sm:text-xs text-[#857a6b] tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
