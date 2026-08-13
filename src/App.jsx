import React, { useState, useEffect } from 'react';
import Envelope from './components/Envelope';
import FallingLeaves from './components/FallingLeaves';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import NikkahEventSection from './components/NikkahEventSection';
import InvitationSection from './components/InvitationSection';
import CountdownSection from './components/CountdownSection';
import RSVPSection from './components/RSVPSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [autoStartAudioTrigger, setAutoStartAudioTrigger] = useState(false);

  /*
   * Lock scrolling until user opens the envelope
   */
  useEffect(() => {
    if (!envelopeOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [envelopeOpened]);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    setAutoStartAudioTrigger(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0908] text-[#f7f3eb] font-cormorant selection:bg-[#d4af37]/30 selection:text-[#f7f3eb] overflow-x-hidden w-full flex flex-col justify-start items-center">
      {/* Global Falling Leaves & Dust Particles */}
      {envelopeOpened && <FallingLeaves />}

      {/* Background Audio Player with Floating Music Toggle Button */}
      {envelopeOpened && (
        <MusicPlayer
          isPlaying={isPlayingMusic}
          setIsPlaying={setIsPlayingMusic}
          autoStartTrigger={autoStartAudioTrigger}
        />
      )}

      {/* Interactive Envelope Overlay */}
      <Envelope onOpen={handleEnvelopeOpen} />

      {/* Main Website Flow - Pre-rendered directly in DOM for 0ms Instant Load without lag */}
      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero Announcement */}
        <HeroSection />

        {/* Section 2: Save the Date & Nikkah Ceremony Card */}
        <NikkahEventSection />

        {/* Section 3: Formal Cordial Invitation */}
        <InvitationSection />

        {/* Section 4: Live Countdown Ticker */}
        <CountdownSection />

        {/* Section 5: RSVP Confirmation Form */}
        <RSVPSection />

        {/* Section 6: Footer & Family Credits */}
        <FooterSection />
      </main>
    </div>
  );
}
