import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingRings({ isEnvelopeOpen }) {
  const ringRef = useRef(null);

  useEffect(() => {
    if (!ringRef.current) return;

    const isMobile = window.innerWidth < 640;
    const rightSideX = isMobile ? '35vw' : '26vw';
    const timelineRightX = isMobile ? '33vw' : '24vw';
    const detailsLeftX = isMobile ? '-33vw' : '-22vw';
    const rsvpRightX = isMobile ? '30vw' : '20vw';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2, // Silky liquid interpolation
          invalidateOnRefresh: true,
        },
      });

      // Initial State: Hidden at top (Hero shows native inline ring between names)
      gsap.set(ringRef.current, {
        x: '0vw',
        y: '0px',
        scale: isMobile ? 0.75 : 0.9,
        rotationZ: 0,
        opacity: 0,
      });

      // Step 1: Scroll starts -> Fade in floating rings and glide diagonally to Right (Sacred Blessings)
      tl.to(ringRef.current, {
        x: rightSideX,
        y: '30px',
        scale: isMobile ? 0.8 : 0.95,
        rotationZ: 18,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
      })
      // Step 2: Sacred Blessings -> The Day Timeline (Top Right Edge - SS3)
      .to(ringRef.current, {
        x: timelineRightX,
        y: '-90px',
        scale: isMobile ? 0.8 : 0.9,
        rotationZ: -12,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
      })
      // Step 3: Timeline -> All Details (Bottom Left Corner - SS4)
      .to(ringRef.current, {
        x: detailsLeftX,
        y: '80px',
        scale: isMobile ? 0.8 : 0.9,
        rotationZ: 20,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
      })
      // Step 4: Details -> RSVP Arch Card (Top Right Arch Edge - SS5)
      .to(ringRef.current, {
        x: rsvpRightX,
        y: '-70px',
        scale: isMobile ? 0.75 : 0.85,
        rotationZ: -10,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
      })
      // Step 5: Approach Footer -> Glide to center and hand off to Footer native inline ring!
      .to(ringRef.current, {
        x: '0vw',
        y: '100px',
        scale: isMobile ? 0.7 : 0.8,
        rotationZ: 0,
        opacity: 0, // Seamlessly fades into Footer native inline ring between names!
        ease: 'power1.out',
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-40 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isEnvelopeOpen ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/* Soft Metallic Gold Light Aura Behind Rings */}
        <div className="absolute h-20 w-20 rounded-full bg-radial from-[#f5d77f]/45 via-[#d4af37]/20 to-transparent blur-lg animate-pulse" />

        {/* User's Exact Polished Gold Wedding Rings Transparent PNG */}
        <img
          src="/gold-rings.png"
          alt="Polished Gold Wedding Rings"
          className="h-20 w-24 sm:h-24 sm:w-28 object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.5)]"
        />
      </div>
    </div>
  );
}
