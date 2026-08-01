import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function VenueMap() {
  const mapUrl = 'https://maps.google.com/?q=Madavoor+Palace+Auditorium+Narikkuni';

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#faf6ee] via-[#fffdf8] to-[#faf6ee] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-[#9e823f]"
          >
            location & directions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display mt-2 text-3xl font-light text-[#1f1a14] sm:text-5xl"
          >
            The Destination
          </motion.h2>

          <div className="mt-4 flex justify-center">
            <span className="gold-rule h-px w-24" />
          </div>
        </div>

        {/* Venue Card & Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-[#fffdf8] shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#fffdf8] to-[#f5e6ca]/30">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#f5e6ca]/60 text-[#9e823f] shadow-sm mb-6">
                  <MapPin className="h-6 w-6" />
                </div>

                <span className="eyebrow text-xs text-[#9e823f]">Grand Venue</span>
                <h3 className="font-display mt-2 text-3xl font-medium text-[#1f1a14]">
                  Madavoor Palace Auditorium
                </h3>

                <p className="font-sans-clean mt-3 text-base font-light text-[#4a4034] leading-relaxed">
                  Narikkuni, Kozhikode District
                  <br />
                  Kerala 673585
                </p>

                <div className="mt-6 space-y-2 text-sm text-[#7c6d59]">
                  <div className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[#9e823f]" />
                    <span>Easily accessible via State Highway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-[#9e823f]" />
                    <span>Ample valet & guest parking available</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#d4af37] bg-[#9e823f] px-6 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#8c7336] hover:shadow-xl active:scale-95"
                >
                  <Navigation className="h-4 w-4" />
                  Get Live Directions on Google Maps
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Interactive Map Frame */}
            <div className="lg:col-span-7 relative min-h-[320px] bg-[#f4efe4]">
              <iframe
                title="Madavoor Palace Auditorium Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.839843657788!2d75.8762!3d11.3414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65eb8d6a8f7c9%3A0x6b772c91cf972d0!2sMadavoor%20Palace%20Auditorium!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full filter contrast-95 saturate-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
