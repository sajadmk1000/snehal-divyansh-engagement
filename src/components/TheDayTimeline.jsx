import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Utensils, GlassWater, Music, Heart } from 'lucide-react';

export default function TheDayTimeline() {
  const scheduleEvents = [
    {
      time: '11:00 AM',
      title: 'NIKAH CEREMONY',
      location: 'Madavoor Palace Main Auditorium',
      desc: 'The sacred solemnization of marriage binding two souls in eternal grace & blessings.',
      icon: Heart,
    },
    {
      time: '12:00 PM',
      title: 'WELCOME REFRESHMENTS',
      location: 'Palace Courtyard',
      desc: 'Cooling traditional rose sherbet, tender coconut, and sweet treats upon arrival.',
      icon: GlassWater,
    },
    {
      time: '12:30 PM ONWARDS',
      title: 'GRAND WEDDING FEAST',
      location: 'Grand Banquet Dining Hall',
      desc: 'Relish traditional Malabar wedding delicacies and feast together in celebration.',
      icon: Utensils,
    },
    {
      time: '03:00 PM',
      title: 'PHOTO SESSION',
      location: 'Garden Lawn',
      desc: 'Capturing unforgettable memories, family portraits, and warm wishes.',
      icon: Camera,
    },
    {
      time: '04:00 PM - 07:00 PM',
      title: 'EVENING RECEPTION',
      location: 'Palace Ballroom',
      desc: 'An evening of joy, blessings, music, and celebration with family & guests.',
      icon: Music,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-3 sm:px-6 bg-[#0a0908] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header Title (SS3 Style Script Title) */}
        <div className="text-center mb-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-dark text-[#d4af37]"
          >
            ORDER OF CELEBRATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-script mt-2 text-5xl sm:text-7xl text-[#f5d77f] drop-shadow-md pr-0 sm:pr-12"
          >
            the day
          </motion.h2>
          <div className="mt-4 flex justify-center pr-0 sm:pr-12">
            <span className="gold-rule-dark h-px w-32" />
          </div>
        </div>

        {/* SS3 Style Left Timeline Structure */}
        <div className="relative pl-10 sm:pl-16">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-4 sm:left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20" />

          <div className="space-y-10 sm:space-y-12">
            {scheduleEvents.map((evt, index) => {
              const Icon = evt.icon;

              return (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Gold Circle Node */}
                  <div className="absolute -left-10 sm:-left-16 top-1 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#141210] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#f5d77f]" />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card-dark rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:border-[#d4af37]/60">
                    <span className="font-display text-base sm:text-lg font-medium text-[#f5d77f] text-gold-glow">
                      {evt.time}
                    </span>

                    <h3 className="font-display mt-1 text-xl sm:text-2xl font-semibold uppercase tracking-wider text-[#f7f3eb]">
                      {evt.title}
                    </h3>

                    <p className="font-sans-clean mt-2 text-xs sm:text-sm font-light leading-luxury-body text-[#c2b5a1]">
                      {evt.desc}
                    </p>

                    <p className="eyebrow-dark mt-3 text-[0.65rem] sm:text-[0.7rem] text-[#857a6b]">
                      📍 {evt.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
