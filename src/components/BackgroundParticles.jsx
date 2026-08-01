import React, { useMemo } from 'react';

export default function BackgroundParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.2;
      const duration = Math.random() * 12 + 10;
      const delay = Math.random() * 5;
      const driftX = (Math.random() - 0.5) * 60;

      return {
        id: i,
        size,
        left,
        top,
        opacity,
        duration,
        delay,
        driftX,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Light Beam Ray */}
      <div 
        className="absolute left-1/2 top-[-10%] h-[80vh] w-[min(80vw,36rem)] -translate-x-1/2"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(245,230,202,0.2) 45%, transparent 100%)',
          filter: 'blur(36px)',
          opacity: 0.6,
          animation: 'breathe 8s ease-in-out infinite alternate',
        }}
      />

      {/* Floating Gold Motes */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#dfc48c]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 10px rgba(245,230,202,0.8), 0 0 4px rgba(212,175,55,0.6)',
            animation: `shimmer ${p.duration}s ease-in-out ${p.delay}s infinite, drift ${p.duration * 1.2}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
