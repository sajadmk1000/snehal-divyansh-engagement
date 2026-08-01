import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function EntryOverlay({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#faf6ee]"
        >
          {/* Subtle Background Image with Soft Blur */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/wedding-bg.jpg"
              alt=""
              className="h-full w-full object-cover filter saturate-75 brightness-110"
            />
            <div className="absolute inset-0 bg-radial from-white/70 via-[#faf6ee]/80 to-[#f3ead8]" />
          </div>

          {/* Ethereal Radial Gradient Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 20%, rgba(255, 255, 255, 0.95) 0%, transparent 65%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(245, 230, 202, 0.4) 0%, transparent 60%)',
            }}
          />

          {/* Rotating Geometry Mandala Emblem */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-15" aria-hidden="true">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="h-[85vmin] w-[85vmin] animate-spin-slow text-[#a38a4d]"
            >
              <g stroke="currentColor" strokeWidth="0.45" strokeLinejoin="round">
                <circle cx="100" cy="100" r="86" opacity="0.35" />
                <circle cx="100" cy="100" r="66" opacity="0.25" />
                <g transform="rotate(0 100 100)">
                  <path d="M100 16 L128 62 L100 84 L72 62 Z" opacity="0.7" />
                  <rect x="52" y="52" width="96" height="96" opacity="0.5" />
                </g>
                <g transform="rotate(45 100 100)">
                  <path d="M100 16 L128 62 L100 84 L72 62 Z" opacity="0.7" />
                </g>
                <g transform="rotate(90 100 100)">
                  <path d="M100 16 L128 62 L100 84 L72 62 Z" opacity="0.7" />
                </g>
                <g transform="rotate(135 100 100)">
                  <path d="M100 16 L128 62 L100 84 L72 62 Z" opacity="0.7" />
                </g>
              </g>
            </svg>
          </div>

          {/* Main Card Content */}
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 text-center sm:px-10">
            {/* Header Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="eyebrow text-[#7c6d59]/75 flex items-center gap-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
              a sacred beginning
              <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            </motion.p>

            {/* Bismillah Arabic Script */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.4 }}
              dir="rtl"
              lang="ar"
              className="font-arabic mt-7 text-3xl leading-relaxed text-[#9e823f] sm:mt-9 sm:text-5xl sm:leading-loose text-gold-glow"
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </motion.p>

            {/* Ornamental Gold Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.3 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 flex w-full items-center justify-center gap-3 sm:mt-8"
            >
              <span className="gold-rule h-px w-16 sm:w-32" />
              <div className="h-2 w-2 rotate-45 border border-[#d4af37] bg-[#f5e6ca]" />
              <span className="gold-rule h-px w-16 sm:w-32" />
            </motion.div>

            {/* Couple Names */}
            <motion.h1
              initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, delay: 0.8 }}
              className="mt-6 flex flex-col items-center sm:mt-8"
            >
              <span className="font-script text-6xl text-[#1f1a14] sm:text-8xl md:text-9xl drop-shadow-md">
                Amal Ameen
              </span>
              <span className="font-display mt-1 text-lg font-light italic tracking-[0.35em] text-[#9e823f] sm:text-2xl">
                &
              </span>
              <span className="font-script mt-1 text-6xl text-[#1f1a14] sm:text-8xl md:text-9xl drop-shadow-md">
                Minsha
              </span>
            </motion.h1>

            {/* Subtext Invitation */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="font-display mt-7 max-w-md text-base font-light italic leading-relaxed text-[#4a4034] sm:mt-9 sm:text-xl"
            >
              With hearts full of gratitude, we invite you into our light
            </motion.p>

            {/* Tap to Open Trigger Button */}
            <motion.button
              type="button"
              onClick={onOpen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="group mt-10 inline-flex flex-col items-center gap-4 focus:outline-none sm:mt-12"
              aria-label="Tap to open the wedding invitation"
            >
              <span className="eyebrow tracking-[0.32em] text-[#9e823f] transition-colors duration-300 group-hover:text-[#1f1a14]">
                Tap to open
              </span>

              <span className="relative flex h-16 w-16 items-center justify-center">
                {/* Breathing Concentric Rings */}
                <span className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-[#9e823f]/40" />
                <span className="pointer-events-none absolute inset-[-6px] rounded-full border border-[#d4af37]/30 animate-pulse" />

                {/* Inner Glowing Orb */}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37] bg-[#fffdf8] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <ChevronDown className="h-6 w-6 text-[#9e823f] transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
