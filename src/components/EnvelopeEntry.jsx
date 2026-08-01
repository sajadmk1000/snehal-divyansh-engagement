import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeEntry({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#090807] px-4"
        >
          {/* Subtle Stardust Glow Background */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-radial from-[#221c15] via-[#090807] to-[#040403]" />

          {/* 3D Envelope Perspective Container */}
          <div
            className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
              isOpening ? 'scale-105 opacity-90' : 'scale-100'
            }`}
            style={{ perspective: '1200px' }}
          >
            {/* Outer Envelope Wrap */}
            <div
              onClick={handleOpenClick}
              className={`relative flex h-[15rem] w-[21rem] sm:h-[18rem] sm:w-[26rem] cursor-pointer items-center justify-center rounded-2xl border border-[#d4af37]/45 bg-gradient-to-br from-[#2a1d12] via-[#1c130b] to-[#120b06] shadow-[0_30px_90px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-transform duration-700 hover:scale-[1.02] ${
                isOpening ? 'open' : ''
              }`}
            >
              {/* Inner Gold Foil Border */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#d4af37]/35 shadow-[inset_0_0_30px_rgba(212,175,55,0.06)]" />

              {/* Envelope Body Content (Monogram & Subtitle) */}
              <div className="z-10 flex flex-col items-center justify-center text-center p-6 space-y-3">
                {/* Monogram A & M */}
                <div className="font-script text-5xl sm:text-6xl text-[#f5d77f] drop-shadow-md">
                  A<span className="text-[#d4af37]/50 font-display italic text-3xl sm:text-4xl">&amp;</span>M
                </div>

                <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

                <p className="eyebrow-dark text-xs sm:text-sm tracking-widest text-[#f7f3eb]">
                  Amal Ameen &amp; Minsha
                </p>

                <p className="font-script text-xl sm:text-2xl text-[#f5d77f]">
                  Nikah Mubarak
                </p>
              </div>

              {/* 3D Envelope Flap (Polygon top flap rotating -180deg) */}
              <motion.div
                animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.4, ease: [0.6, 0, 0.2, 1] }}
                style={{ transformOrigin: 'top' }}
                className="absolute left-0 right-0 top-0 h-[56%] z-20 bg-gradient-to-b from-[#3a2819] via-[#24170d] to-[#150d07] border-b border-[#d4af37]/45 rounded-t-2xl shadow-lg"
                css={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              />

              {/* Central Gold Wax Seal Button with 2 Rings Emblem */}
              <motion.div
                animate={
                  isOpening
                    ? { y: -160, scale: 0.4, opacity: 0 }
                    : { y: 0, scale: 1, opacity: 1 }
                }
                transition={{ duration: 1.2, ease: [0.6, 0, 0.2, 1] }}
                className="absolute z-30 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-[#f5d77f] bg-gradient-to-br from-[#f5d77f] via-[#d4af37] to-[#735b22] shadow-[0_10px_35px_rgba(212,175,55,0.5)] animate-wax-pulse"
              >
                {/* Concentric Gold Ring Pulse */}
                <span className="pointer-events-none absolute inset-[-8px] animate-ping rounded-full border border-[#f5d77f]/40 opacity-75" />

                {/* Wax Seal 2 Intertwined Rings Emblem */}
                <div className="flex flex-col items-center justify-center text-[#1a140a]">
                  <svg viewBox="0 0 100 70" className="h-8 w-12 sm:h-10 sm:w-14 text-[#1a140a]" fill="none">
                    <circle cx="36" cy="35" r="22" stroke="currentColor" strokeWidth="4.5" />
                    <circle cx="64" cy="35" r="22" stroke="currentColor" strokeWidth="4.5" />
                    <path d="M32 16 L36 10 L40 16 Z" fill="currentColor" />
                  </svg>
                  <span className="font-sans-clean text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest uppercase mt-0.5">
                    OPEN
                  </span>
                </div>
              </motion.div>

              {/* TAP TO OPEN CTA Button Tag */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-sans-clean text-xs tracking-[0.35em] text-[#d4af37] uppercase flex items-center gap-2"
              >
                <span className="h-px w-5 bg-[#d4af37]" />
                TAP TO OPEN
                <span className="h-px w-5 bg-[#d4af37]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
