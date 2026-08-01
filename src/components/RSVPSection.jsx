import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageSquare, Heart, Sparkles } from 'lucide-react';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending',
    guests: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Golden confetti explosion
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f5d77f', '#d4af37', '#ab924b', '#ffffff'],
    });

    setSubmitted(true);
  };

  const sendWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Heartiest Congratulations Amal Ameen & Minsha! 💐✨\n\n*Name:* ${formData.name || 'Guest'}\n*Status:* ${formData.status === 'attending' ? 'Gladly Attending 🎉' : 'Regretfully Unable to Attend 🕊️'}\n*Guests:* ${formData.guests}\n*Message:* "${formData.message || 'Wishing you both a lifetime of happiness, peace, and love!'}"`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a0908] via-[#141210] to-[#0a0908] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-dark text-[#d4af37]"
          >
            RECEPTION & CONFIRMATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-script mt-2 text-6xl text-[#f5d77f] drop-shadow-md sm:text-7xl"
          >
            Send Your Blessings
          </motion.h2>

          <p className="font-display mt-2 text-base font-light italic text-[#c2b5a1]">
            Please honor us with your presence and warm prayers
          </p>

          <div className="mt-4 flex justify-center">
            <span className="gold-rule-dark h-px w-28" />
          </div>
        </div>

        {/* SS5 Inspired Arch Top Luxury Card Container with Top Right Ring Placement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="glass-card-dark rounded-t-[10rem] sm:rounded-t-[14rem] rounded-b-3xl p-8 sm:p-12 shadow-2xl border border-[#d4af37]/35 relative overflow-hidden"
        >
          {/* Decorative Arch Header (SS5 Style) */}
          <div className="text-center pt-8 pb-6 relative">
            <h3 className="font-display text-5xl font-light tracking-widest text-[#f7f3eb] text-gold-glow">
              RSVP
            </h3>
            <p className="font-script mt-2 text-2xl text-[#f5d77f]">
              by August 20th, 2026
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f5d77f] mb-2 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h4 className="font-display text-3xl font-normal text-[#f7f3eb]">
                Thank You, {formData.name || 'Dear Guest'}!
              </h4>

              <p className="font-sans-clean text-sm text-[#c2b5a1] max-w-md mx-auto leading-luxury-body">
                Your response and prayers have been received with gratitude. We look forward to celebrating together!
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={sendWhatsAppMessage}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#25D366] bg-[#25D366] px-6 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-[#1ebd59] active:scale-95"
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Wishes via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d4af37]/40 bg-[#141210] px-6 py-3.5 font-medium text-[#c2b5a1] hover:border-[#d4af37] hover:text-[#f7f3eb]"
                >
                  Edit Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              {/* Guest Full Name */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#c2b5a1] mb-2">
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

              {/* Attendance Selection */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#c2b5a1] mb-2">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'attending' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                      formData.status === 'attending'
                        ? 'border-[#f5d77f] bg-[#d4af37]/25 text-[#f7f3eb] shadow-md'
                        : 'border-[#d4af37]/30 bg-[#141210] text-[#c2b5a1]'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${formData.status === 'attending' ? 'fill-[#f5d77f] text-[#f5d77f]' : ''}`} />
                    Joyfully Attend
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'declined' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                      formData.status === 'declined'
                        ? 'border-[#f5d77f] bg-[#d4af37]/25 text-[#f7f3eb] shadow-md'
                        : 'border-[#d4af37]/30 bg-[#141210] text-[#c2b5a1]'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {formData.status === 'attending' && (
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#c2b5a1] mb-2">
                    Number of Guests
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

              {/* Warm Message / Prayers */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#c2b5a1] mb-2">
                  Warm Wishes & Prayers
                </label>
                <textarea
                  rows={3}
                  placeholder="Write your prayers and blessings for Amal & Minsha..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#d4af37]/35 bg-[#141210] px-4 py-3.5 text-sm text-[#f7f3eb] placeholder-[#857a6b] focus:border-[#f5d77f] focus:outline-none focus:ring-1 focus:ring-[#f5d77f]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#f5d77f] bg-gradient-to-r from-[#ab924b] via-[#d4af37] to-[#8c7336] py-4 text-base font-medium text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] active:scale-95"
              >
                <Sparkles className="h-5 w-5" />
                Confirm RSVP & Send Wishes
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
