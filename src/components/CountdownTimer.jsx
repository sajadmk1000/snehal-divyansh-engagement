import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-09-05T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Amal+Ameen+%26+Minsha&dates=20260905T053000Z/20260905T113000Z&details=Nikah+Mubarak+Celebration+of+Amal+Ameen+%26+Minsha&location=Madavoor+Palace+Auditorium,+Narikkuni,+Kerala`;

  const downloadICS = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Amal and Minsha Wedding//EN
BEGIN:VEVENT
UID:amal-minsha-wedding-2026
DTSTAMP:20260801T000000Z
DTSTART:20260905T053000Z
DTEND:20260905T113000Z
SUMMARY:The Wedding of Amal Ameen & Minsha
DESCRIPTION:Nikah Mubarak & Wedding Celebration at Madavoor Palace Auditorium
LOCATION:Madavoor Palace Auditorium, Narikkuni, Kozhikode, Kerala
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Amal_and_Minsha_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timerUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0908] text-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark text-[#d4af37]"
        >
          COUNTING DOWN TO ETERNITY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display mt-2 text-3xl font-light text-[#f7f3eb] sm:text-5xl"
        >
          Saturday, September 05, 2026
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans-clean mt-2 text-base font-light text-[#c2b5a1]"
        >
          Madavoor Palace Auditorium, Narikkuni
        </motion.p>

        {/* Dark Glass Countdown Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 max-w-2xl mx-auto">
          {timerUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass-card-dark-gold flex flex-col items-center justify-center rounded-2xl p-5 sm:p-7 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-4xl font-semibold text-[#f5d77f] sm:text-5xl text-gold-glow">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="eyebrow-dark mt-2 text-[0.65rem] text-[#c2b5a1] tracking-widest">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#f5d77f] bg-gradient-to-r from-[#ab924b] via-[#d4af37] to-[#8c7336] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Add to Google Calendar
          </a>

          <button
            type="button"
            onClick={downloadICS}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/40 bg-[#141210] px-6 py-3.5 text-sm font-medium text-[#f7f3eb] shadow-lg transition-all duration-300 hover:border-[#d4af37] hover:bg-[#1a1714] active:scale-95"
          >
            <Download className="h-4 w-4 text-[#d4af37]" />
            Download iCal Event
          </button>
        </motion.div>
      </div>
    </section>
  );
}
