import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const Verses = ({ onProceed }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onProceed();
    }, 9000); // 9 seconds auto proceed

    return () => clearTimeout(timer);
  }, [onProceed]);

  return (
    <motion.section
      onClick={onProceed}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[60] w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden select-none cursor-pointer"
    >
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-[#0c0a08]/95 backdrop-blur-md z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2.5, ease: 'easeInOut' }}
      />

      {/* TOP ROTATING MANDALA */}
      <div className="absolute top-0 left-0 w-full h-[220px] overflow-hidden pointer-events-none z-10">
        <motion.img
          src="/images/envelope/full_mandala.png"
          alt="Top Mandala"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 1.2, delay: 0.15, ease: 'easeOut' },
            scale: { duration: 1.2, delay: 0.15, ease: 'easeOut' },
            rotate: { duration: 55, delay: 1, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute left-1/2 top-0 w-[320px] h-[650px] sm:w-[380px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* CENTER VERSE CONTENT */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center max-w-lg text-center gap-5 sm:gap-7 my-auto px-6">
        {/* Arabic Calligraphy Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="space-y-3"
        >
          <div className="font-arabic text-2xl sm:text-3xl text-[#f5d77f] leading-loose dir-rtl tracking-wide drop-shadow-md">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </div>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-75" />
        </motion.div>

        {/* English Quran Verse */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: 'easeOut' }}
          className="font-cormorant text-sm sm:text-base md:text-lg text-[#f7f3eb]/90 leading-relaxed font-medium max-w-md drop-shadow-sm"
        >
          "And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them; and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought."
        </motion.p>

        {/* Surah Reference */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.75, ease: 'easeOut' }}
          className="font-sans-clean text-[10px] sm:text-xs text-[#d4af37] uppercase tracking-[0.3em] font-semibold"
        >
          — [Surah Ar-Rum 30:21] —
        </motion.span>

        {/* TAP TO CONTINUE Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
          className="mt-6 font-sans-clean text-[9px] sm:text-[10px] text-[#c2b5a1] uppercase tracking-[0.4em]"
        >
          Tap anywhere to continue
        </motion.div>
      </div>

      {/* BOTTOM ROTATING MANDALA */}
      <div className="absolute bottom-0 left-0 w-full h-[900px] overflow-hidden pointer-events-none z-10">
        <motion.img
          src="/images/envelope/full_mandala.png"
          alt="Bottom Mandala"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 1.2, delay: 0.15, ease: 'easeOut' },
            scale: { duration: 1.2, delay: 0.15, ease: 'easeOut' },
            rotate: { duration: 55, delay: 1, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute left-1/2 bottom-0 w-full h-[900px] max-w-full -translate-x-1/2 translate-y-1/2 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </motion.section>
  );
};

export default Verses;
