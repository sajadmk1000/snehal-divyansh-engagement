import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, setIsPlaying, autoStartTrigger }) {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);
  const audioRef = useRef(null);

  // Initialize Web Audio Synth as soothing fallback pad
  const startSynthPad = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // If already playing synth, return
      if (oscillatorsRef.current.length > 0) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soothing Indian / Oriental Serene Pentatonic Chords (C4, G4, C5, E5, G5)
      const freqs = [261.63, 392.00, 523.25, 659.25, 783.99];
      const oscs = freqs.map((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Soft sine & triangle for warm acoustic tone
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // LFO for subtle breathing pitch/vibrato
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.2 + idx * 0.05;
        lfoGain.gain.value = 1.5;
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.value = 0.18 / freqs.length;
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

  const stopSynthPad = useCallback(() => {
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

  // Handle Play/Pause
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopSynthPad();
    } else {
      setIsPlaying(true);
      startSynthPad();
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Fallback handled by Web Audio Synth
        });
      }
    }
  };

  // Trigger when user taps "Tap to open"
  useEffect(() => {
    if (autoStartTrigger) {
      setIsPlaying(true);
      startSynthPad();
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Web Audio Synth active
        });
      }
    }
  }, [autoStartTrigger, setIsPlaying, startSynthPad]);

  return (
    <>
      {/* High Quality Public Soothing Audio Stream */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soothing-flute-ambient-112349.mp3"
        onCanPlay={() => setAudioLoaded(true)}
      />

      {/* Floating Sound Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={togglePlay}
          className="group relative flex h-13 w-13 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#1e1812]/80 text-[#dfc48c] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#f3e5ab] hover:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          aria-label={isPlaying ? 'Mute soothing background music' : 'Play soothing background music'}
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
            {isPlaying ? 'Mute Audio' : 'Play Music'}
          </span>
        </button>
      </div>
    </>
  );
}
