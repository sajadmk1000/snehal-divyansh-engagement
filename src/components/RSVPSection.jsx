import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, Heart, Sparkles, UserCheck } from 'lucide-react';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending',
    guests: '1',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Golden confetti celebration
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f5d77f', '#d4af37', '#ab924b', '#ffffff'],
    });

    setSubmitted(true);
  };

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#0a0908] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-dark text-[#d4af37]"
          >
            CONFIRMATION &amp; BLESSINGS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-script mt-2 text-5xl sm:text-7xl text-[#f7f3eb] drop-shadow-md"
          >
            Will You Join Us?
          </motion.h2>

          <p className="font-display mt-2 text-base font-light italic text-[#c2b5a1]">
            Let us know so we can celebrate together
          </p>

          <div className="mt-4 flex justify-center">
            <span className="gold-rule-dark h-px w-28" />
          </div>
        </div>

        {/* Simple Native RSVP Card matching tp7.html */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-[#d4af37]/35 shadow-2xl relative"
        >
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f5d77f] mb-2 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3 className="font-display text-3xl font-normal text-[#f7f3eb]">
                Thank You, {formData.name || 'Dear Guest'}!
              </h3>

              <p className="font-sans-clean text-sm text-[#c2b5a1] max-w-md mx-auto leading-luxury-body">
                {formData.status === 'attending'
                  ? 'Your response has been saved. We look forward to celebrating together with you!'
                  : 'Your response has been saved. We will miss your presence and appreciate your prayers.'}
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d4af37]/40 bg-[#141210] px-6 py-3 font-medium text-[#c2b5a1] hover:border-[#d4af37] hover:text-[#f7f3eb]"
                >
                  Edit Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#d4af37] mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[#d4af37]/35 bg-[#141210] px-4 py-3.5 text-sm text-[#f7f3eb] placeholder-[#857a6b] focus:border-[#f5d77f] focus:outline-none focus:ring-1 focus:ring-[#f5d77f]"
                />
              </div>

              {/* Attendance Selection Buttons (Matching tp7.html) */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#d4af37] mb-2">
                  Attendance
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'attending' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all ${
                      formData.status === 'attending'
                        ? 'border-[#f5d77f] bg-[#d4af37] text-[#141210] font-bold shadow-md'
                        : 'border-[#d4af37]/30 bg-[#141210] text-[#c2b5a1]'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${formData.status === 'attending' ? 'fill-[#141210] text-[#141210]' : ''}`} />
                    Joyfully Attend
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'declined' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all ${
                      formData.status === 'declined'
                        ? 'border-[#f5d77f] bg-[#d4af37] text-[#141210] font-bold shadow-md'
                        : 'border-[#d4af37]/30 bg-[#141210] text-[#c2b5a1]'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {/* Guest Count Selection Ticker */}
              {formData.status === 'attending' && (
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#d4af37] mb-2">
                    Number of Attendees
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-xl border border-[#d4af37]/35 bg-[#141210] px-4 py-3.5 text-sm text-[#f7f3eb] focus:border-[#f5d77f] focus:outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">4+ Family Members</option>
                  </select>
                </div>
              )}

              {/* Send Response Submit Button (Matching tp7.html) */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#f5d77f] bg-gradient-to-r from-[#ab924b] via-[#d4af37] to-[#8c7336] py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#141210] shadow-xl transition-all duration-300 hover:shadow-2xl active:scale-95"
              >
                <UserCheck className="h-4 w-4" />
                SEND RESPONSE
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
