import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) return;

    // Start envelope animation matching hani project (4.5s)
    setIsOpen(true);

    // Call parent immediately to reveal HeroSection & start audio
    onOpen();

    // Unmount component after 4.7s matching hani project
    setTimeout(() => {
      setIsRemoved(true);
    }, 4700);
  };

  if (isRemoved) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isRemoved && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
          onClick={handleOpen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Dark Luxury Blur Backdrop (Matching hani timing: 1.5s, ease: [0.16, 1, 0.3, 1]) */}
          <motion.div
            className="absolute inset-0 bg-[#090807]/90 backdrop-blur-md z-0"
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* ENVELOPE FRAME CONTAINER - Transparent Wrapper */}
          <div
            className="relative w-full sm:max-w-[430px] sm:h-[92dvh] sm:max-h-[860px] sm:rounded-2xl overflow-hidden bg-transparent flex flex-col justify-between z-10"
            style={{ height: '100dvh', maxWidth: 'min(430px, 48dvh)', containerType: 'inline-size' }}
          >
            {/* BACKGROUND PAPER TEXTURE LAYER (Matching hani timing: 4.5s) */}
            <motion.div
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              initial={{ x: 0, opacity: 1 }}
              animate={isOpen ? { x: '250%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/envelope/envelope_bg_paper.png"
                alt="Envelope Paper Background"
                className="w-full h-full object-cover block"
              />
            </motion.div>

            {/* Inner Vignette Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/10 pointer-events-none z-30"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* LEFT FLAP (UNDERNEATH, z-10) - Matching hani timing: 4.5s */}
            <motion.div
              className="absolute top-0 left-0 h-full z-10 pointer-events-none flex items-center justify-start"
              initial={{ x: 0, opacity: 1 }}
              animate={isOpen ? { x: '-250%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/envelope/envelope_flap_left.png"
                alt="Left Envelope Flap"
                className="h-full w-auto max-w-none block object-cover object-left"
              />

              {/* RESPONSIVE FLUID NAMES AND DATE FOR AMAL AMEEN & MINSHA */}
              <div
                className="absolute left-4 xs:left-6 text-left pointer-events-none z-25 flex flex-col items-start justify-center max-w-[85%]"
                style={{ bottom: '8cqw', left: '4cqw' }}
              >
                <div className="font-script text-[clamp(16px,5.2cqw,24px)] text-[#f5d77f] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide leading-tight">
                  Amal Ameen &amp; Minsha
                </div>
                <div className="font-sans-clean text-[clamp(9px,2.5cqw,12px)] text-[#d4af37] tracking-[0.3em] uppercase mt-1 drop-shadow-md whitespace-nowrap">
                  05 . 09 . 2026
                </div>
              </div>
            </motion.div>

            {/* RIGHT FLAP (ON TOP, z-20) WITH AM GOLD WAX SEAL - Matching hani timing: 4.5s */}
            <motion.div
              className="absolute top-0 right-0 h-full z-20 pointer-events-none flex items-center justify-end"
              initial={{ x: 0, opacity: 1 }}
              animate={isOpen ? { x: '250%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/envelope/envelope_flap_right.png"
                alt="Right Envelope Flap"
                className="h-full w-auto max-w-none block object-cover object-right"
              />

              {/* AUTHENTIC AM GOLD WAX SEAL MOUNTED AT THE RIGHT FLAP APEX TIP */}
              <div
                className="absolute pointer-events-none z-30"
                style={{ left: '0.5%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <img
                  src="/images/envelope/am_seal_clean.png"
                  alt="AM Gold Wax Seal"
                  className="w-[clamp(110px,38cqw,180px)] h-[clamp(110px,38cqw,180px)] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
