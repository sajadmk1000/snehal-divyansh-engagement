import React, { useState } from 'react';
import EnvelopeEntry from './components/EnvelopeEntry';
// import FloatingRings from './components/FloatingRings';
import MusicPlayer from './components/MusicPlayer';
import BackgroundParticles from './components/BackgroundParticles';
import HeroSection from './components/HeroSection';
import SacredBlessing from './components/SacredBlessing';
import TheDayTimeline from './components/TheDayTimeline';
// import AllDetails from './components/AllDetails';
import VenueMap from './components/VenueMap';
import CountdownTimer from './components/CountdownTimer';
import OurFamilies from './components/OurFamilies';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [autoStartAudioTrigger, setAutoStartAudioTrigger] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setAutoStartAudioTrigger(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0908] text-[#f7f3eb] font-sans-clean overflow-x-hidden selection:bg-[#d4af37]/40 selection:text-[#fff]">
      {/* Background Stardust Particles */}
      <BackgroundParticles />

      {/* Floating 2 Intertwined Golden Rings Scroll Tracker (Commented out for now) */}
      {/* <FloatingRings isEnvelopeOpen={isEnvelopeOpen} /> */}

      {/* 3D Interactive Envelope Cover Screen with Wax Seal (tp7.html Style) */}
      <EnvelopeEntry isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />

      {/* Audio Player & Floating Sound Control Button */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        autoStartTrigger={autoStartAudioTrigger}
      />

      {/* Main Story Flow Content (Matching Reference Site tp7.html Content Hierarchy) */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isEnvelopeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Section 1: Hero Announcement */}
        <HeroSection />

        {/* Section 2: Sacred Verses & Henna Hands */}
        <SacredBlessing />

        {/* Section 3: The Day Timeline Schedule */}
        <TheDayTimeline />

        {/* Section 4: Essential Details (Commented out for now) */}
        {/* <AllDetails /> */}

        {/* Section 5: Venue Map & Directions */}
        <VenueMap />

        {/* Section 6: Live Countdown Ticker */}
        <CountdownTimer />

        {/* Section 7: Our Families */}
        <OurFamilies />

        {/* Section 8: Simple Native RSVP Confirmation */}
        <RSVPSection />

        {/* Footer & Monogram Seal */}
        <Footer />
      </main>
    </div>
  );
}
