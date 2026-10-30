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

    // Start horizontal envelope opening animation
    setIsOpen(true);

    // Call parent immediately to reveal HeroSection & start audio
    onOpen();

    // Unmount component after 10s animation completes
    setTimeout(() => {
      setIsRemoved(true);
    }, 10000);
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
          {/* Dark Luxury Blur Backdrop (Fades out FAST 0.6s on tap) */}
          <motion.div
            className="absolute inset-0 bg-[#090807]/90 backdrop-blur-md z-0"
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* ENVELOPE FRAME CONTAINER - Transparent Wrapper */}
          <div
            className="relative w-full sm:max-w-[430px] sm:h-[92dvh] sm:max-h-[860px] sm:rounded-2xl overflow-hidden bg-transparent flex flex-col justify-between z-10"
            style={{ height: '100dvh', maxWidth: 'min(430px, 48dvh)', containerType: 'inline-size' }}
          >
            {/* ENVELOPE BACKGROUND PAPER (Fades out FAST 0.6s on tap to reveal HeroSection underneath) */}
            <motion.div
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src="/images/envelope/envelope_bg_paper.png"
                alt="निमंत्रण पाकीट"
                className="w-full h-full object-cover block"
              />
            </motion.div>

            {/* Inner Vignette Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/10 pointer-events-none z-30"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* LEFT FLAP ENVELOPE (UNDERNEATH, z-10) - Slides to left over 9.5s, 100% solid, fades ONLY at side end */}
            <motion.div
              className="absolute top-0 left-0 h-full z-10 pointer-events-none flex items-center justify-start"
              initial={{ x: 0, opacity: 1 }}
              animate={isOpen ? { x: '-250%', opacity: [1, 1, 0] } : { x: 0, opacity: 1 }}
              transition={{ 
                x: { duration: 9.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 9.5, times: [0, 0.88, 1.0], ease: 'linear' }
              }}
            >
              <img
                src="/images/envelope/envelope_flap_left.png"
                alt="पाकिटाची डावी बाजू"
                className="h-full w-auto max-w-none block object-cover object-left"
              />

              {/* RESPONSIVE FLUID NAMES AND DATE */}
              <div
                className="absolute left-4 xs:left-6 text-left pointer-events-none z-25 flex flex-col items-start justify-center max-w-[85%]"
                style={{ bottom: '8cqw', left: '4cqw' }}
              >
                <div className="font-script text-[clamp(16px,5.2cqw,24px)] text-[#f5d77f] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide leading-tight">
                  ले. स्नेहल व ले. दिव्यांश
                </div>
                <div className="font-sans-clean text-[clamp(9px,2.5cqw,12px)] text-[#d4af37] tracking-[0.3em] uppercase mt-1 drop-shadow-md whitespace-nowrap">
                  ०३ . १२ . २०२६
                </div>
              </div>
            </motion.div>

            {/* RIGHT FLAP ENVELOPE (ON TOP, z-20) WITH WAX SEAL - Slides to right over 9.5s, 100% solid, fades ONLY at side end */}
            <motion.div
              className="absolute top-0 right-0 h-full z-20 pointer-events-none flex items-center justify-end"
              initial={{ x: 0, opacity: 1 }}
              animate={isOpen ? { x: '250%', opacity: [1, 1, 0] } : { x: 0, opacity: 1 }}
              transition={{ 
                x: { duration: 9.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 9.5, times: [0, 0.88, 1.0], ease: 'linear' }
              }}
            >
              <img
                src="/images/envelope/envelope_flap_right.png"
                alt="पाकिटाची उजवी बाजू"
                className="h-full w-auto max-w-none block object-cover object-right"
              />

              {/* GOLD WAX SEAL MOUNTED AT THE RIGHT FLAP APEX TIP */}
              <div
                className="absolute pointer-events-none z-30"
                style={{ left: '0.5%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative w-[clamp(110px,38cqw,180px)] h-[clamp(110px,38cqw,180px)]" style={{ containerType: 'inline-size' }}>
                  <img
                    src="/images/envelope/am_seal_clean.png"
                    alt="सोनेरी मुद्रा"
                    className="w-full h-full object-contain"
                  />
                  {/* Smooths away the original engraving so the new monogram can be pressed in */}
                  <img
                    src="/images/envelope/am_seal_clean.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ filter: 'blur(5px)', clipPath: 'circle(29% at 49.5% 49%)' }}
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-display font-bold leading-none"
                    style={{
                      fontSize: '27cqw',
                      paddingRight: '1cqw',
                      paddingBottom: '2cqw',
                      color: '#b78338',
                      letterSpacing: '-0.02em',
                      textShadow: '-1px -1px 0 rgba(255, 226, 160, 0.75), 1.5px 1.5px 1px rgba(78, 44, 10, 0.75), 2.5px 2.5px 3px rgba(60, 32, 6, 0.4)',
                    }}
                  >
                    SD
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
