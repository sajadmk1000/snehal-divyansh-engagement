import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Heart, Clock, MapPin } from 'lucide-react';

export default function EventTimeline() {
  const events = [
    {
      title: 'Nikah Ceremony',
      time: '11:00 AM',
      location: 'Madavoor Palace Auditorium',
      desc: 'The sacred solemnization of marriage binding two souls in eternal grace & blessings.',
      icon: Heart,
      badge: 'Main Ritual',
    },
    {
      title: 'Grand Wedding Feast',
      time: '12:30 PM Onwards',
      location: 'Banquet Hall',
      desc: 'Join us to relish traditional delicacies and share in our celebration of love and warmth.',
      icon: Utensils,
      badge: 'Lunch Feast',
    },
    {
      title: 'Reception & Blessings',
      time: '04:00 PM - 07:00 PM',
      location: 'Palace Courtyard',
      desc: 'An evening of joy, photos, laughter, and heartfelt blessings with family & friends.',
      icon: Sparkles,
      badge: 'Evening Celebration',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#faf6ee] overflow-hidden">
      {/* Decorative Gold Radial Beam */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-radial from-[#f5e6ca]/40 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-[#9e823f]"
          >
            order of celebration
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display mt-2 text-3xl font-light text-[#1f1a14] sm:text-5xl"
          >
            Event Timeline
          </motion.h2>

          <div className="mt-4 flex justify-center">
            <span className="gold-rule h-px w-24" />
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div className="mt-16 relative">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((evt, idx) => {
              const Icon = evt.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.9, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#fffdf8] shadow-lg">
                    <Icon className="h-5 w-5 text-[#9e823f]" />
                  </div>

                  {/* Card Content Box */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-card group rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-[#d4af37]/30">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#f5e6ca]/60 px-3 py-1 font-sans-clean text-xs font-medium text-[#7c6d59]">
                          <Clock className="h-3.5 w-3.5 text-[#9e823f]" />
                          {evt.time}
                        </span>
                        <span className="eyebrow text-[0.65rem] text-[#9e823f] tracking-[0.2em]">
                          {evt.badge}
                        </span>
                      </div>

                      <h3 className="font-display mt-4 text-2xl font-normal text-[#1f1a14]">
                        {evt.title}
                      </h3>

                      <p className="font-sans-clean mt-2 text-sm font-light leading-relaxed text-[#4a4034]">
                        {evt.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs text-[#9e823f]">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{evt.location}</span>
                      </div>
                    </div>
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
