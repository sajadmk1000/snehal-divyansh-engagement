import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Sparkles } from 'lucide-react';

export default function RoyalGates() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative flex min-h-[100vh] flex-col items-center justify-between overflow-hidden px-4 py-16 bg-[#f4efe4]"
      aria-label="The gates of union"
    >
      {/* Header Title */}
      <div className="relative z-30 pt-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-[#7c6d59]"
        >
          the gates of union
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display mt-2 text-2xl font-light text-[#1f1a14] sm:text-4xl"
        >
          A door opens where mercy dwells
        </motion.p>
      </div>

      {/* 3D Arch Gates Viewport Container */}
      <div
        className="relative z-20 my-8 flex h-[68vh] w-full max-w-[42rem] items-center justify-center"
        style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}
      >
        {/* Interior Sanctuary Revealed Behind Doors */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-t-[12rem] sm:rounded-t-[16rem] border border-[#d4af37]/40 shadow-2xl">
          <img
            src="/royal-gate-bg.jpg"
            alt="Royal sanctuary light"
            className="h-full w-full object-cover filter saturate-90 brightness-105 transition-transform duration-1000 scale-105"
          />
          {/* Inner Light Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14]/60 via-transparent to-[#faf6ee]/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <Sparkles className="h-8 w-8 text-[#f5e6ca] animate-pulse mb-3" />
            <span className="eyebrow text-[#f5e6ca] tracking-[0.3em] mb-2">Welcome to our celebration</span>
            <h3 className="font-script text-5xl sm:text-7xl text-[#f3e5ab] drop-shadow-lg">
              Amal & Minsha
            </h3>
            <p className="font-display mt-3 text-lg font-light italic text-[#f5e6ca] max-w-sm">
              Joined in love, faith & everlasting unity
            </p>
          </div>
        </div>

        {/* 3D Folding Royal Doors Container */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-full w-full cursor-pointer items-stretch justify-center"
          style={{ transformStyle: 'preserve-3d' }}
          role="button"
          tabIndex={0}
          aria-label={isOpen ? 'Click to close the gates' : 'Click to open the gates'}
        >
          {/* Left Arch Door */}
          <motion.div
            animate={{
              rotateY: isOpen ? -115 : 0,
              opacity: isOpen ? 0.3 : 1,
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-1/2 overflow-hidden rounded-tl-[12rem] sm:rounded-tl-[16rem] border-r border-[#d4af37]"
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              background:
                'linear-gradient(105deg, #f7f0e2 0%, #efe4cf 22%, #e8d9b8 48%, #f3ead8 72%, #ebe0c8 100%)',
              boxShadow:
                'inset -20px 0 35px rgba(180,150,90,0.2), -10px 8px 30px rgba(40,30,15,0.15)',
            }}
          >
            {/* Door Panel Wood & Gold Moldings */}
            <div className="pointer-events-none absolute inset-[6%] rounded-tl-[10rem] border border-[#d4af37]/40" />
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[15%] h-[32%] rounded-t-full border border-[#d4af37]/35 shadow-inner" />
            <div className="pointer-events-none absolute bottom-[12%] left-[12%] right-[12%] h-[32%] border border-[#d4af37]/35 shadow-inner" />

            {/* SVG Filigree Pattern */}
            <svg viewBox="0 0 120 220" className="pointer-events-none absolute inset-0 h-full w-full text-[#9e823f]">
              <path d="M60 40 C82 58 82 86 60 106 C38 86 38 58 60 40 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <circle cx="60" cy="120" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
            </svg>

            {/* Left Door Knob / Handle */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <span className="block h-9 w-9 rounded-full border border-[#9e823f] bg-gradient-to-br from-[#f3e6c4] via-[#d4af37] to-[#8c7336] shadow-lg" />
            </div>
          </motion.div>

          {/* Right Arch Door */}
          <motion.div
            animate={{
              rotateY: isOpen ? 115 : 0,
              opacity: isOpen ? 0.3 : 1,
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-1/2 overflow-hidden rounded-tr-[12rem] sm:rounded-tr-[16rem] border-l border-[#d4af37]"
            style={{
              transformOrigin: 'right center',
              transformStyle: 'preserve-3d',
              background:
                'linear-gradient(255deg, #f7f0e2 0%, #efe4cf 22%, #e8d9b8 48%, #f3ead8 72%, #ebe0c8 100%)',
              boxShadow:
                'inset 20px 0 35px rgba(180,150,90,0.2), 10px 8px 30px rgba(40,30,15,0.15)',
            }}
          >
            {/* Door Panel Wood & Gold Moldings */}
            <div className="pointer-events-none absolute inset-[6%] rounded-tr-[10rem] border border-[#d4af37]/40" />
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[15%] h-[32%] rounded-t-full border border-[#d4af37]/35 shadow-inner" />
            <div className="pointer-events-none absolute bottom-[12%] left-[12%] right-[12%] h-[32%] border border-[#d4af37]/35 shadow-inner" />

            {/* SVG Filigree Pattern */}
            <svg viewBox="0 0 120 220" className="pointer-events-none absolute inset-0 h-full w-full text-[#9e823f]" style={{ transform: 'scaleX(-1)' }}>
              <path d="M60 40 C82 58 82 86 60 106 C38 86 38 58 60 40 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <circle cx="60" cy="120" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
            </svg>

            {/* Right Door Knob / Handle */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <span className="block h-9 w-9 rounded-full border border-[#9e823f] bg-gradient-to-br from-[#f3e6c4] via-[#d4af37] to-[#8c7336] shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Prompt Badge */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative z-30 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-[#fffdf8]/90 px-6 py-2.5 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:bg-[#fffdf8] hover:shadow-lg"
      >
        <KeyRound className="h-4 w-4 text-[#9e823f] transition-transform duration-300 group-hover:rotate-45" />
        <span className="eyebrow text-[#1f1a14] font-medium tracking-[0.25em]">
          {isOpen ? 'Tap to close gates' : 'Tap to open royal gates'}
        </span>
      </motion.button>
    </section>
  );
}
