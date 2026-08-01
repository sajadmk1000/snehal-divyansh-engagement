import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function EnvelopeEntry({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleWaxSealClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#090807] px-4"
        >
          {/* Subtle Stardust Glow Background */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-radial from-[#1e1a14] via-[#090807] to-[#040403]" />

          {/* Luxury Envelope Card Container */}
          <div className="relative z-10 flex h-[82vh] w-full max-w-[28rem] sm:max-w-[32rem] flex-col items-center justify-between rounded-3xl border border-[#d4af37]/35 bg-[#141210] p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            {/* Top Flap Decorative V-Shape */}
            <div className="relative w-full text-center">
              <p className="eyebrow-dark flex items-center justify-center gap-2 pt-2 text-[#d4af37]">
                <Sparkles className="h-3.5 w-3.5" />
                ROYAL WEDDING INVITATION
                <Sparkles className="h-3.5 w-3.5" />
              </p>
              <div className="mt-3 flex justify-center">
                <span className="gold-rule-dark h-px w-36" />
              </div>
            </div>

            {/* Middle Section: Envelope Flap & Wax Seal */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              {/* Triangular Envelope Flap Lines */}
              <svg viewBox="0 0 300 200" className="h-44 w-64 text-[#d4af37]/30" fill="none">
                <path d="M10 10 L150 110 L290 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M10 190 L150 110 L290 190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <rect x="10" y="10" width="280" height="180" rx="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              </svg>

              {/* Central Gold Wax Seal Button with 2 Rings Emblem */}
              <motion.button
                type="button"
                onClick={handleWaxSealClick}
                animate={isOpening ? { scale: [1, 1.25, 0], rotate: [0, 15, -15, 0] } : {}}
                transition={{ duration: 1 }}
                className="group relative -mt-32 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#f5d77f] bg-gradient-to-br from-[#f5d77f] via-[#d4af37] to-[#735b22] shadow-[0_10px_30px_rgba(212,175,55,0.4)] animate-wax-pulse focus:outline-none"
                aria-label="Tap gold wax seal to open the wedding invitation"
              >
                {/* Concentric Gold Ring Pulse */}
                <span className="pointer-events-none absolute inset-[-8px] animate-ping rounded-full border border-[#f5d77f]/40 opacity-75" />

                {/* Wax Seal 2 Intertwined Rings Emblem */}
                <div className="flex flex-col items-center justify-center text-[#1a140a]">
                  <svg viewBox="0 0 100 70" className="h-10 w-14 text-[#1a140a]" fill="none">
                    <circle cx="36" cy="35" r="22" stroke="currentColor" strokeWidth="4.5" />
                    <circle cx="64" cy="35" r="22" stroke="currentColor" strokeWidth="4.5" />
                    <path d="M32 16 L36 10 L40 16 Z" fill="currentColor" />
                  </svg>
                  <span className="font-sans-clean text-[0.6rem] font-bold tracking-widest uppercase mt-0.5">
                    UNSEAL
                  </span>
                </div>
              </motion.button>

              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="eyebrow-dark mt-8 text-[0.7rem] text-[#c2b5a1]"
              >
                Tap the wax seal to open
              </motion.p>
            </div>

            {/* Bottom Invitation Title */}
            <div className="text-center pb-2">
              <h2 className="font-script text-4xl text-[#f7f3eb] drop-shadow-md">
                Amal Ameen & Minsha
              </h2>
              <p className="font-display text-sm font-light italic text-[#c2b5a1] mt-1">
                Together with their families
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
