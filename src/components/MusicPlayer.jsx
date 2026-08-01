import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ isPlaying, setIsPlaying, autoStartTrigger }) {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);
  const audioRef = useRef(null);

  // Exact Loop Window: 1:00 (60 seconds) to 1:40 (100 seconds)
  const LOOP_START_SEC = 60;
  const LOOP_END_SEC = 100;

  // Initialize Web Audio Synth Fallback with Oriental Maqam Hijaz/Bayati Harmonics
  const startNasheedSynthPad = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (oscillatorsRef.current.length > 0) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Serene Oriental Maqam Hijaz / Bayati Nasheed Frequencies
      const freqs = [293.66, 311.13, 369.99, 392.00, 440.00, 587.33];
      const oscs = freqs.map((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.18 + idx * 0.04;
        lfoGain.gain.value = 1.2;
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.value = 0.16 / freqs.length;
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        return { osc, lfo, oscGain };
      });

      oscillatorsRef.current = oscs;
    } catch (e) {
      console.warn('Audio Context initialization error:', e);
    }
  }, []);

  const stopNasheedSynthPad = useCallback(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      try {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          oscillatorsRef.current.forEach(({ osc, lfo }) => {
            try {
              osc.stop();
              lfo.stop();
            } catch (_) {}
          });
          oscillatorsRef.current = [];
        }, 1100);
      } catch (_) {}
    }
  }, []);

  // Enforce Loop Window (1:00 to 1:40)
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const curr = audioRef.current.currentTime;
      if (curr >= LOOP_END_SEC || curr < LOOP_START_SEC) {
        audioRef.current.currentTime = LOOP_START_SEC;
      }
    }
  };

  // Play audio strictly starting at 1:00 timestamp
  const playAudioTrack = useCallback(() => {
    if (audioRef.current) {
      if (audioRef.current.currentTime < LOOP_START_SEC || audioRef.current.currentTime >= LOOP_END_SEC) {
        audioRef.current.currentTime = LOOP_START_SEC;
      }

      const promise = audioRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setAudioLoaded(true);
          })
          .catch((err) => {
            console.warn('HTML5 Audio autoplay restricted on mobile:', err);
            startNasheedSynthPad();
          });
      }
    } else {
      startNasheedSynthPad();
    }
  }, [startNasheedSynthPad]);

  // Handle Manual Play/Pause Button
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopNasheedSynthPad();
    } else {
      setIsPlaying(true);
      playAudioTrack();
    }
  };

  // Trigger when user taps "OPEN" on the envelope cover
  useEffect(() => {
    if (autoStartTrigger) {
      setIsPlaying(true);
      playAudioTrack();
    }
  }, [autoStartTrigger, setIsPlaying, playAudioTrack]);

  return (
    <>
      {/* Maher Zain - Baraka Allahu Lakuma (Looped strictly 1:00 to 1:40) */}
      <audio
        ref={audioRef}
        preload="auto"
        src="/nasheed.mp3"
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={() => setAudioLoaded(true)}
        onError={() => {
          if (audioRef.current) {
            audioRef.current.src = 'https://archive.org/download/Maher_Zean_www.suratmp3.com/Baraka_Allahu_Lakuma.mp3';
          }
        }}
      />

      {/* Floating Sound Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={togglePlay}
          className="group relative flex h-13 w-13 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#1e1812]/80 text-[#dfc48c] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#f3e5ab] hover:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          aria-label={isPlaying ? 'Mute Baraka Allahu Lakuma Nasheed' : 'Play Baraka Allahu Lakuma Nasheed'}
        >
          {isPlaying && (
            <span className="absolute inset-0 animate-ping rounded-full border border-[#d4af37]/40 opacity-75" />
          )}

          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              <Volume2 className="h-5 w-5 text-[#d4af37]" />
              <span className="relative flex h-2.5 w-1 items-end gap-0.5 ml-1">
                <span className="h-full w-0.5 animate-bounce bg-[#d4af37] [animation-delay:-0.3s]" />
                <span className="h-full w-0.5 animate-bounce bg-[#d4af37] [animation-delay:-0.15s]" />
                <span className="h-full w-0.5 animate-bounce bg-[#d4af37]" />
              </span>
            </div>
          ) : (
            <VolumeX className="h-5 w-5 text-[#a38a4d]" />
          )}

          {/* Tooltip */}
          <span className="pointer-events-none absolute right-15 whitespace-nowrap rounded-md border border-[#d4af37]/30 bg-[#1e1812]/90 px-3 py-1.5 font-sans-clean text-xs font-light text-[#f5e6ca] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            {isPlaying ? 'Mute Nasheed' : 'Play (1:00 - 1:40 Loop)'}
          </span>
        </button>
      </div>
    </>
  );
}
