import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.attending) {
      return;
    }

    setSubmitted(true);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#F5D77F', '#D4AF37', '#AB924B']
    });

    const attendanceText = formData.attending === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline';
    const messageText = `Namaste! 🙏 I would like to confirm my RSVP for the Engagement of Lt. Snehal & Lt. Divyansh:\n\n*Guest Name:* ${formData.name}\n*Number of Guests:* ${formData.guests}\n*Attendance:* ${attendanceText}`;
    const whatsappUrl = `https://wa.me/919175341340?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="rsvp"
      className="relative w-full py-14 xs:py-18 sm:py-22 px-4 xs:px-6 flex flex-col items-center justify-center bg-[#0a0908] overflow-hidden"
    >
      <div className="w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[400px] md:max-w-[460px] flex flex-col items-center text-center">
        
        {/* Star Line Top Divider SVG */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 w-full max-w-[260px] mb-6 xs:mb-7"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#d4af37]/60" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f5d77f] shrink-0">
            <path d="M12 2L13.8 10.2L22 12L13.8 13.8L12 22L10.2 13.8L2 12L10.2 10.2L12 2Z" stroke="#f5d77f" strokeWidth="1.2" fill="none"/>
          </svg>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#d4af37]/60" />
        </motion.div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center w-full mb-7 xs:mb-8"
        >
          <span 
            className="font-sans-clean font-medium text-[11px] xs:text-xs text-[#d4af37] uppercase tracking-[0.3em] whitespace-nowrap mb-2"
          >
            ATTENDANCE CONFIRMATION
          </span>

          <h2 className="font-vibes text-[44px] xs:text-[52px] sm:text-[58px] text-[#f5d77f] leading-tight select-none mb-3 xs:mb-4 drop-shadow-md">
            Kindly RSVP
          </h2>

          <p className="font-cormorant text-[15px] xs:text-[16px] sm:text-[17px] text-[#c2b5a1] w-full max-w-[340px] md:max-w-md leading-[1.6] text-center">
            We look forward to celebrating this blessed day with you. Please confirm your attendance below.
          </p>
        </motion.div>

        {/* RSVP Form */}
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[320px] p-6 rounded-[24px] bg-[#16120e] border border-[#d4af37]/40 flex flex-col items-center gap-3 text-center my-2 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5d77f] to-[#d4af37] text-[#0a0908] flex items-center justify-center text-xl font-bold shadow-md">
              ✓
            </div>
            <h3 className="font-vibes text-3xl text-[#f5d77f]">Dhanyavaad!</h3>
            <p className="font-cormorant text-base text-[#f7f3eb]">
              Your response has been submitted. We look forward to seeing you!
            </p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full max-w-[315px] xs:max-w-[330px] md:max-w-[420px] flex flex-col gap-4 xs:gap-5 text-left"
          >
            {/* Field 1: Guest Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-sans-clean text-[11px] xs:text-[11.5px] font-medium text-[#d4af37] tracking-[0.15em] uppercase">
                Guest Name
              </label>
              <input 
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[48px] xs:h-[50px] rounded-[18px] px-4 font-sans-clean text-[13px] text-[#f7f3eb] placeholder:text-[#857a6b] border border-[#d4af37]/35 bg-[#14100c] outline-none focus:border-[#f5d77f] transition-colors"
              />
            </div>

            {/* Field 2: Number of guests */}
            <div className="flex flex-col gap-1.5 w-full relative">
              <label className="font-sans-clean text-[11px] xs:text-[11.5px] font-medium text-[#d4af37] tracking-[0.15em] uppercase">
                Number of Guests
              </label>
              
              <div 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full h-[48px] xs:h-[50px] rounded-[18px] px-4 font-sans-clean text-[13px] text-[#f7f3eb] border bg-[#14100c] flex items-center justify-between cursor-pointer select-none transition-colors ${
                  dropdownOpen ? 'border-[#f5d77f]' : 'border-[#d4af37]/35'
                }`}
              >
                <span>{formData.guests} {Number(formData.guests) === 1 ? 'Guest' : 'Guests'}</span>
                <svg 
                  className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {dropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10 cursor-default" 
                    onClick={() => setDropdownOpen(false)}
                  />
                  
                  <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-[#14100c] border border-[#d4af37]/40 rounded-[18px] py-1.5 shadow-2xl z-20 max-h-[200px] overflow-y-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <div
                        key={num}
                        onClick={() => {
                          setFormData({ ...formData, guests: String(num) });
                          setDropdownOpen(false);
                        }}
                        className={`px-4 py-2.5 text-[13px] font-sans-clean text-[#f7f3eb] cursor-pointer transition-colors ${
                          formData.guests === String(num)
                            ? 'bg-[#d4af37] text-[#0a0908] font-semibold'
                            : 'hover:bg-[#d4af37]/20 hover:text-[#f5d77f]'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Field 3: Will you attend? */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-sans-clean text-[11px] xs:text-[11.5px] font-medium text-[#d4af37] tracking-[0.15em] uppercase">
                Will you attend?
              </label>
              <div className="grid grid-cols-2 gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`h-[48px] xs:h-[50px] rounded-[18px] font-sans-clean text-[12.5px] xs:text-[13px] font-medium transition-all cursor-pointer border ${
                    formData.attending === 'yes'
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f5d77f] text-[#0a0908] border-transparent font-semibold shadow-md'
                      : 'bg-[#14100c] border-[#d4af37]/35 text-[#f7f3eb] hover:border-[#d4af37]'
                  }`}
                >
                  Joyfully accept
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`h-[48px] xs:h-[50px] rounded-[18px] font-sans-clean text-[12.5px] xs:text-[13px] font-medium transition-all cursor-pointer border ${
                    formData.attending === 'no'
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f5d77f] text-[#0a0908] border-transparent font-semibold shadow-md'
                      : 'bg-[#14100c] border-[#d4af37]/35 text-[#f7f3eb] hover:border-[#d4af37]'
                  }`}
                >
                  Regretfully decline
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-3 xs:mt-4">
              <motion.button 
                type="submit"
                whileHover={!formData.name.trim() || !formData.attending ? {} : { scale: 1.04 }}
                whileTap={!formData.name.trim() || !formData.attending ? {} : { scale: 0.96 }}
                className={`w-full max-w-[210px] h-[44px] xs:h-[46px] rounded-full font-sans-clean font-semibold text-[12.5px] xs:text-[13px] tracking-[0.1em] uppercase flex items-center justify-center transition-all border-none ${
                  !formData.name.trim() || !formData.attending
                    ? 'bg-[#d4af37]/30 text-[#857a6b] cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#b8923f] text-[#0a0908] shadow-[0_6px_20px_rgba(212,175,55,0.35)] cursor-pointer'
                }`}
                disabled={!formData.name.trim() || !formData.attending}
              >
                <span>Confirm RSVP</span>
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
