import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  Flame,
  Music,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

interface EventItem {
  id: string;
  title: string;
  date: string;
  shortDate: string;
  dayNum: string;
  monthYear: string;
  time: string;
  venueName: string;
  venueAddress: string;
  description: string;
  icon: any;
  colorStr: string; // theme color class e.g., 'red', 'amber', etc.
  borderTheme: string; // tailwind border style
  bgTheme: string; // tailwind bg style
  textTheme: string; // tailwind text style
  badgeTheme: string; // tailwind badge style
  scheduleTime: string; // Google template format
  endTime: string;
}

export default function TimelineSection() {
  const events: EventItem[] = [
    {
      id: "lagan",
      title: "Lagan Ceremony",
      date: "Sunday, 5 July 2026",
      shortDate: "5 JULY",
      dayNum: "05",
      monthYear: "JULY 2026",
      time: "7:30 PM Onwards",
      venueName: "Shringi House",
      venueAddress: "Lane No. 2, Baran Road, Kota, Rajasthan",
      description:
        "The auspicious pre-wedding ceremony marking the formal acceptance of the alliance with traditional tilak and exchange of gifts.",
      icon: Sparkles,
      colorStr: "red",
      borderTheme: "border-red-700/30 hover:border-red-700",
      bgTheme: "bg-gradient-to-br from-red-50/80 to-white",
      textTheme: "text-red-800",
      badgeTheme: "bg-red-100 text-red-800",
      scheduleTime: "20260705T193000",
      endTime: "20260705T223000",
    },
    {
      id: "mata-pujan",
      title: "Mata Pujan",
      date: "Monday, 6 July 2026",
      shortDate: "6 JULY",
      dayNum: "06",
      monthYear: "JULY 2026",
      time: "6:30 AM Onwards",
      venueName: "Shringi House",
      venueAddress: "Lane No. 2, Baran Road, Kota, Rajasthan",
      description:
        "Prayers offered with pure devotion to seek blessing from the Divine Mother for prosperity, peace, and togetherness.",
      icon: Heart,
      colorStr: "rose",
      borderTheme: "border-rose-700/30 hover:border-rose-700",
      bgTheme: "bg-gradient-to-br from-rose-50/80 to-white",
      textTheme: "text-rose-800",
      badgeTheme: "bg-rose-100 text-rose-800",
      scheduleTime: "20260706T063000",
      endTime: "20260706T093000",
    },
    {
      id: "mangal-kalash",
      title: "Mangal Kalash",
      date: "Wednesday, 8 July 2026",
      shortDate: "8 JULY",
      dayNum: "08",
      monthYear: "JULY 2026",
      time: "9:00 AM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "Ceremonial installation of the holy vessel representing health and wellness to welcome the celebratory wedding spirits.",
      icon: Sparkles,
      colorStr: "amber",
      borderTheme: "border-amber-600/30 hover:border-amber-600",
      bgTheme: "bg-gradient-to-br from-amber-50/80 to-white",
      textTheme: "text-amber-800",
      badgeTheme: "bg-amber-100 text-amber-800",
      scheduleTime: "20260708T090000",
      endTime: "20260708T110000",
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      date: "Wednesday, 8 July 2026",
      shortDate: "8 JULY",
      dayNum: "08",
      monthYear: "JULY 2026",
      time: "2:15 PM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "A playful ritual where fresh turmeric paste is lovingly applied on Mayank and Ritika to make them glow for their sacred vows.",
      icon: Sparkles,
      colorStr: "yellow",
      borderTheme: "border-amber-500/30 hover:border-amber-500",
      bgTheme: "bg-gradient-to-br from-yellow-50/50 to-white",
      textTheme: "text-amber-800",
      badgeTheme: "bg-yellow-100 text-amber-900",
      scheduleTime: "20260708T141500",
      endTime: "20260708T170000",
    },
    {
      id: "sangeet",
      title: "Sangeet & Musical Night",
      date: "Wednesday, 8 July 2026",
      shortDate: "8 JULY",
      dayNum: "08",
      monthYear: "JULY 2026",
      time: "7:15 PM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "An evening of celebration, live traditional melodies, beautiful family dances, and immense joy.",
      icon: Music,
      colorStr: "purple",
      borderTheme: "border-purple-700/30 hover:border-purple-700",
      bgTheme: "bg-gradient-to-br from-purple-50/80 to-white",
      textTheme: "text-purple-800",
      badgeTheme: "bg-purple-100 text-purple-800",
      scheduleTime: "20260708T191500",
      endTime: "20260708T233000",
    },
    {
      id: "engagement",
      title: "Engagement & Ring Ceremony",
      date: "Thursday, 9 July 2026",
      shortDate: "9 JULY",
      dayNum: "09",
      monthYear: "JULY 2026",
      time: "9:15 AM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "The beautiful exchange of rings, completing the formal promise to stand by each other forever.",
      icon: Heart,
      colorStr: "indigo",
      borderTheme: "border-indigo-700/30 hover:border-indigo-700",
      bgTheme: "bg-gradient-to-br from-indigo-50/80 to-white",
      textTheme: "text-indigo-800",
      badgeTheme: "bg-indigo-100 text-indigo-800",
      scheduleTime: "20260709T091500",
      endTime: "20260709T104500",
    },
    {
      id: "barat",
      title: "Barat Procession & Nikasi",
      date: "Thursday, 9 July 2026",
      shortDate: "9 JULY",
      dayNum: "09",
      monthYear: "JULY 2026",
      time: "11:00 AM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "The joyous royal wedding procession of the groom accompanied by lively music, dhol beats, and dancing.",
      icon: Sparkles,
      colorStr: "orange",
      borderTheme: "border-orange-600/30 hover:border-orange-600",
      bgTheme: "bg-gradient-to-br from-orange-50/60 to-white",
      textTheme: "text-orange-850",
      badgeTheme: "bg-orange-100 text-orange-800",
      scheduleTime: "20260709T110000",
      endTime: "20260709T130000",
    },
    {
      id: "phere",
      title: "Phere (Holy Matrimony)",
      date: "Thursday, 9 July 2026",
      shortDate: "9 JULY",
      dayNum: "09",
      monthYear: "JULY 2026",
      time: "1:00 PM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "The sacred fire ritual which unites Mayank & Ritika for seven lifetimes with holy vows of fidelity and absolute companionship.",
      icon: Flame,
      colorStr: "red",
      borderTheme: "border-red-800/40 hover:border-red-850",
      bgTheme: "bg-gradient-to-br from-red-50 to-white",
      textTheme: "text-red-900",
      badgeTheme: "bg-red-600 text-white font-extrabold",
      scheduleTime: "20260709T130000",
      endTime: "20260709T163000",
    },
    {
      id: "procession",
      title: "Bride-Groom Procession",
      date: "Thursday, 9 July 2026",
      shortDate: "9 JULY",
      dayNum: "09",
      monthYear: "JULY 2026",
      time: "6:15 PM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "The emotional moment of the bride bade farewell as she starts her primary journey into her new home with Mayank.",
      icon: Sparkles,
      colorStr: "amber",
      borderTheme: "border-amber-600/30 hover:border-amber-600",
      bgTheme: "bg-gradient-to-br from-amber-50/80 to-white",
      textTheme: "text-amber-800",
      badgeTheme: "bg-amber-100 text-amber-900",
      scheduleTime: "20260709T181500",
      endTime: "20260709T190000",
    },
    {
      id: "reception",
      title: "Grand Wedding Reception",
      date: "Thursday, 9 July 2026",
      shortDate: "9 JULY",
      dayNum: "09",
      monthYear: "JULY 2026",
      time: "7:00 PM Onwards",
      venueName: "Parihar Marriage Garden",
      venueAddress: "Bandha Dharm Pura Road, Hadoti Colony, Kota",
      description:
        "A formal celebratory feast to present the newlyweds and celebrate with friends, family, and well-wishers.",
      icon: Star,
      colorStr: "emerald",
      borderTheme: "border-emerald-700/30 hover:border-emerald-700",
      bgTheme: "bg-gradient-to-br from-emerald-50/80 to-white",
      textTheme: "text-emerald-800",
      badgeTheme: "bg-emerald-100 text-emerald-800",
      scheduleTime: "20260709T190000",
      endTime: "20260709T233000",
    },
  ];

  const getGoogleCalendarUrl = (ev: EventItem) => {
    const start = ev.scheduleTime;
    const end = ev.endTime;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Wedding: " + ev.title + " (Mayank & Ritika)")}&dates=${start}/${end}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.venueName + ", " + ev.venueAddress)}&sf=true&output=xml`;
  };

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-cream-base via-cream-dark/20 to-cream-base relative select-none">
      {/* Exquisite ornamental borders & design element backgrounds */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden flex items-center justify-center">
        <svg
          className="w-[900px] h-[900px] text-amber-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.76-.57 3.38-1.54 4.7z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Grand Indian Motifs */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-3">
            <svg
              className="w-8 h-8 text-amber-600 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.25.591 1.813l-3.97 2.87a1 1 0 00-.364 1.118l1.52 4.674c.3.921-.755 1.688-1.538 1.118l-3.971-2.87a1 1 0 00-1.176 0l-3.97 2.87c-.783.57-1.838-.197-1.538-1.118l1.52-4.674a1 1 0 00-.364-1.118l-3.97-2.87c-.768-.563-.369-1.813.591-1.813h4.907a1 1 0 00.95-.69l1.519-4.674z"
              />
            </svg>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-amber-800">
              Shubh Vivah Program
            </span>
            <svg
              className="w-8 h-8 text-amber-600 animate-pulse transform scale-x-[-1]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.25.591 1.813l-3.97 2.87a1 1 0 00-.364 1.118l1.52 4.674c.3.921-.755 1.688-1.538 1.118l-3.971-2.87a1 1 0 00-1.176 0l-3.97 2.87c-.783.57-1.838-.197-1.538-1.118l1.52-4.674a1 1 0 00-.364-1.118l-3.97-2.87c-.768-.563-.369-1.813.591-1.813h4.907a1 1 0 00.95-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-red-850 font-bold tracking-tight">
            Wedding Itinerary
          </h2>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-stone-605 mt-4 max-w-lg mx-auto leading-relaxed uppercase tracking-wider font-semibold">
            Please join us in celebrating every beautiful phase of our forever
            journey.
          </p>
        </div>

        {/* Dynamic Grand Alternate Vertical Timeline Layout */}
        <div className="relative">
          {/* Centered Timeline Axis Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-px bg-gradient-to-b from-amber-500/25 via-amber-500/60 to-amber-500/25 pointer-events-none">
            {/* Hanging marigold bells vector dot representation down the line */}
            <div className="sticky top-1/3 flex flex-col items-center gap-16 pointer-events-none opacity-30">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-orange-500 border border-amber-300"
                />
              ))}
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {events.map((ev, idx) => {
              const IconComponent = ev.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={ev.id}
                  className="relative flex flex-col md:flex-row items-stretch"
                >
                  {/* Timeline bullet tag marker */}
                  <div className="absolute left-4 md:left-1/2 top-8 -ml-3 md:-ml-4 z-20 flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 border-amber-500 shadow flex items-center justify-center text-amber-700">
                      <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Left Side Content (Date column on desktop, Empty if content is on right) */}
                  <div
                    className={`w-full md:w-1/2 pl-12 pr-4 md:pr-12 md:pl-0 text-left md:text-right flex flex-col justify-center ${isEven ? "md:items-end" : "md:hidden"}`}
                  >
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col items-end pr-4 text-amber-900 border-r-2 border-amber-500/30"
                      >
                        <span className="font-serif text-5xl font-extrabold tracking-tighter leading-none select-none text-red-800">
                          {ev.dayNum}
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-705 mt-1.5">
                          {ev.monthYear}
                        </span>
                        <span className="text-[10px] font-bold text-stone-400 mt-1 uppercase tracking-widest block">
                          {ev.date.split(",")[0]}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Card Block Column */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-12 text-left ${isEven ? "" : "md:order-last"}`}
                  >
                    {/* Mobile date marker indicator */}
                    <div className="md:hidden flex items-baseline gap-2 mb-2">
                      <span className="font-serif text-2xl font-black text-red-800">
                        {ev.dayNum}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
                        {ev.monthYear} ({ev.date.split(",")[0]})
                      </span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 80,
                      }}
                      className={`relative bg-white rounded-2xl p-6 md:p-8 border-2 ${ev.borderTheme} ${ev.bgTheme} shadow-md hover:shadow-xl transition-all duration-350 select-none flex flex-col justify-between`}
                    >
                      {/* Mandap Arch decorative top border accent inside the card */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-t-xl" />

                      {/* Traditional vector backdrop watermark */}
                      <div className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] text-stone-800 pointer-events-none max-w-full">
                        <svg
                          className="w-full h-full"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>

                      <div className="space-y-4">
                        {/* Event title, time and custom badge */}
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${ev.badgeTheme}`}
                            >
                              {ev.title === "Phere (Holy Matrimony)"
                                ? "MANGAL PHERE"
                                : "AUSPICIOUS RITUAL"}
                            </span>
                          </div>

                          <h3
                            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${ev.textTheme}`}
                          >
                            {ev.title}
                          </h3>

                          <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm mt-1">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span>{ev.time}</span>
                          </div>
                        </div>

                        {/* Rich Ceremonial Description */}
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                          {ev.description}
                        </p>

                        {/* Traditional Arch Frame Venue info */}
                        <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-500/15 flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                          <div className="text-xs space-y-0.5 text-stone-850">
                            <span className="font-extrabold tracking-wide block">
                              {ev.venueName}
                            </span>
                            <span className="text-[11px] text-stone-500 mt-1 block leading-relaxed">
                              {ev.venueAddress}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Event bottom metadata or Action link */}
                      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest italic font-serif">
                          Mayank &amp; Ritika
                        </span>

                        <a
                          href={getGoogleCalendarUrl(ev)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-xs font-black text-amber-800 hover:text-red-800 flex items-center gap-1 uppercase tracking-widest hover:underline transition-all"
                        >
                          <Calendar className="w-3.5 h-3.5 stroke-[2]" />
                          Add to Calendar
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side Content (Date column on desktop, Empty if content is on left) */}
                  <div
                    className={`w-full md:w-1/2 pr-12 pl-4 md:pl-12 md:pr-0 text-left flex flex-col justify-center ${!isEven ? "md:items-start" : "md:hidden"}`}
                  >
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col items-start pl-4 text-amber-900 border-l-2 border-amber-500/30"
                      >
                        <span className="font-serif text-5xl font-extrabold tracking-tighter leading-none select-none text-red-800">
                          {ev.dayNum}
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-705 mt-1.5">
                          {ev.monthYear}
                        </span>
                        <span className="text-[10px] font-bold text-stone-400 mt-1 uppercase tracking-widest block">
                          {ev.date.split(",")[0]}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traditional Vedic Sanskrit Quote banner */}
        <div className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-amber-50/20 border border-amber-200/20 select-none">
          <div className="inline-flex justify-center items-center gap-2 text-amber-800 opacity-80 mb-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
            <span className="font-serif italic font-extrabold text-sm text-red-900 tracking-wide block">
              "Mangalyam Tantunanena Bhartur Jivana Hetuna, Kanthe Badhnami
              Subhage Tvam Jiva Sharadah Shatam"
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-stone-550 leading-relaxed max-w-md mx-auto">
            "This is a sacred thread designed for secure companion and of
            absolute trust. I bind this, O beautiful lady, around your neck, may
            you live happily for a hundred autumns."
          </p>
        </div>
      </div>
    </section>
  );
}
