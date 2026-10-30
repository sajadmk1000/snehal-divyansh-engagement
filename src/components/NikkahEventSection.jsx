import React from 'react';
import { motion } from 'framer-motion';
import { GoldOrnamentWingLeft, GoldOrnamentWingRight } from './GoldOrnamentDivider';

export const NikkahEventSection = () => {
  const mapUrl = "https://maps.app.goo.gl/ixWmxvL7pEW8gfGFA?g_st=ac";

  return (
    <section 
      id="nikkah-section"
      className="relative w-full py-14 xs:py-18 sm:py-22 px-4 xs:px-5 flex flex-col items-center justify-center bg-[#0c0a08] overflow-hidden"
    >
      <div className="w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[400px] flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2 w-full mb-7 xs:mb-8"
        >
          {/* Header Subhead flanked by Gold Wings */}
          <div className="flex items-center justify-center gap-3 xs:gap-4 w-full px-1">
            <GoldOrnamentWingLeft className="w-14 xs:w-16 sm:w-20 h-auto opacity-90 shrink-0" />
            
            <span 
              className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#d4af37] tracking-[0.3em] uppercase whitespace-nowrap"
            >
              SAKHARPUDA
            </span>
            
            <GoldOrnamentWingRight className="w-14 xs:w-16 sm:w-20 h-auto opacity-90 shrink-0" />
          </div>

          <h2 className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] leading-tight select-none mt-1 drop-shadow-md">
            Save Our Date
          </h2>
        </motion.div>

        {/* Nikkah Event Card - Dark Luxury Glassmorphic Styling */}
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full max-w-[335px] xs:max-w-[350px] rounded-[28px] xs:rounded-[32px] overflow-hidden flex flex-col items-center text-center border border-[#d4af37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.1)]"
          style={{
            background: 'linear-gradient(180deg, rgba(28, 22, 17, 0.95) 0%, rgba(14, 11, 8, 0.98) 100%)'
          }}
        >
          {/* Couple Image */}
          <div className="w-full h-[240px] xs:h-[260px] relative overflow-hidden bg-[#15100a] shrink-0">
            <img 
              src="/images/couple/ring_ceremony.jpg" 
              alt="Snehal & Divyansh ring ceremony" 
              className="w-full h-full object-cover select-none block pointer-events-none hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: 'center 66%', filter: 'sepia(0.25) saturate(0.95) contrast(1.05) brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140f0a] via-transparent to-black/20" />
          </div>

          {/* Card Details Container */}
          <div className="w-full px-6 xs:px-7 pt-7 xs:pt-8 pb-8 xs:pb-9 flex flex-col items-center text-center">
            
            {/* Ceremony Subhead */}
            <p 
              className="font-sans-clean font-medium text-[11px] text-[#d4af37] uppercase mb-3 tracking-[0.3em]"
            >
              ENGAGEMENT CEREMONY AT
            </p>

            {/* Venue Heading */}
            <h3 
              className="font-display font-medium text-[30px] xs:text-[34px] text-[#f7f3eb] leading-[1.15] mb-5 text-gold-glow"
            >
              Saraswati Lawn
            </h3>

            {/* Date Details */}
            <div className="flex items-center justify-center gap-2 mb-2.5 xs:mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5d77f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-cormorant text-[16px] xs:text-[17px] font-normal text-[#f7f3eb]">
                Thursday, 03 Dec 2026
              </span>
            </div>

            {/* Time & Location Details */}
            <div className="flex items-center justify-center gap-4 xs:gap-5 text-[14px] xs:text-[15px] font-cormorant font-normal text-[#c2b5a1] mb-6 xs:mb-7">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5d77f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                6:30 PM – 8:30 PM
              </span>
              
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5d77f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Tasgaon
              </span>
            </div>

            {/* Address & Landmark */}
            <p className="font-cormorant text-[14px] xs:text-[15px] italic text-[#c2b5a1] leading-[1.5] -mt-3 mb-6 xs:mb-7 max-w-[280px]">
              Tasgaon–Vita Road, Tasgaon
              <br />
              Beside Saraswati Furniture, opp. Ayyangar Bakery
            </p>

            {/* Open In Map Button - Metallic Gold Button */}
            <motion.a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full max-w-[210px] xs:max-w-[220px] h-[42px] xs:h-[44px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#b8923f] text-[#0c0a08] font-sans-clean font-semibold text-[12.5px] xs:text-[13px] tracking-[0.1em] uppercase flex items-center justify-center shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all cursor-pointer no-underline"
            >
              <span>View Map Location</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NikkahEventSection;
