import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#d4af37]/30 bg-[#070605] py-20 px-4 sm:px-6 text-center text-[#c2b5a1]">
      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        {/* Monogram Gold Seal Container */}
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37] bg-[#141210] shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4">
          <span className="font-script text-2xl text-[#f5d77f]">A & M</span>
        </div>

        {/* Footer Names Stacked Vertically with Rings DIRECTLY INLINE Between Names */}
        <h2 className="font-script flex flex-col items-center text-4xl sm:text-5xl text-[#f7f3eb] drop-shadow-md my-2 leading-none">
          <span className="pb-2">Amal Ameen</span>

          {/* 100% Bulletproof Native Inline Gold Rings Placement */}
          <div className="my-3 sm:my-4 flex items-center justify-center relative">
            <div className="absolute h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-radial from-[#f5d77f]/45 via-[#d4af37]/20 to-transparent blur-lg animate-pulse" />
            <img
              src="/gold-rings.png"
              alt="Polished Gold Wedding Rings"
              className="h-12 w-14 sm:h-16 sm:w-20 object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.5)]"
            />
          </div>

          <span className="pt-2">Minsha</span>
        </h2>

        <p className="font-display mt-6 text-lg font-light italic text-[#c2b5a1]">
          With heartfelt gratitude for your presence and prayers
        </p>

        <div className="my-8 flex justify-center items-center gap-3 w-full">
          <span className="gold-rule-dark h-px w-24" />
          <Heart className="h-4 w-4 text-[#d4af37] fill-[#d4af37]/40" />
          <span className="gold-rule-dark h-px w-24" />
        </div>

        <p className="font-sans-clean text-xs font-light text-[#857a6b] leading-relaxed">
          Nikah Mubarak · Saturday, September 05, 2026
          <br />
          Madavoor Palace Auditorium, Narikkuni, Kozhikode
        </p>
      </div>
    </footer>
  );
}
