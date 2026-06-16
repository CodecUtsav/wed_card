import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-07-09T09:15:00+05:30"); // IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isOver: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 select-none relative z-10 antialiased">
      {/* Luxury Ambient Glow Layers */}
      <div className="absolute -top-12 left-1/4 w-80 h-44 bg-amber-200/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-1/4 w-80 h-44 bg-red-200/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header Label Structure */}
      <div className="flex flex-col items-center justify-center gap-2 mb-8 w-full max-w-md">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-1 h-1 bg-amber-600 rotate-45" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-600" />
          <div className="w-2 h-2 border border-amber-600 bg-transparent rotate-45" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-600" />
          <div className="w-1 h-1 bg-amber-600 rotate-45" />
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-semibold text-stone-500 font-sans mt-1">
          {timeLeft.isOver
            ? "The Auspicious Micro-Moment"
            : "Auspicious Muhurat Approaches"}
        </span>
      </div>

      {timeLeft.isOver ? (
        /* Marriage Announcement Card */
        <div
          className="text-center py-8 px-12 bg-gradient-to-b from-stone-50/90 via-white to-amber-50/30 rounded-3xl border border-amber-200/60 shadow-[0_20px_50px_-12px_rgba(217,119,6,0.15)] max-w-md w-full relative overflow-hidden backdrop-blur-md"
          style={{ animation: "premiumPulse 4s ease-in-out infinite" }}
        >
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-400/40 rounded-tl-sm" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-400/40 rounded-tr-sm" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-amber-400/40 rounded-bl-sm" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber-400/40 rounded-br-sm" />

          <p className="font-serif text-3xl sm:text-4xl bg-gradient-to-b from-red-700 to-red-900 bg-clip-text text-transparent font-bold tracking-wider filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            शुभ विवाह
          </p>

          <div className="flex items-center justify-center gap-2 my-4">
            <div className="w-6 h-[1px] bg-amber-400/40" />
            <span className="text-xs text-amber-600/80 font-serif italic">
              Eternal Bond
            </span>
            <div className="w-6 h-[1px] bg-amber-400/40" />
          </div>

          <p className="text-base sm:text-lg text-stone-800 font-serif font-semibold tracking-wide">
            Mayank{" "}
            <span className="text-red-700 font-sans font-light mx-0.5">&</span>{" "}
            Ritika
          </p>
          <p className="text-xs text-stone-500 mt-1.5 font-sans tracking-wide font-medium">
            Are beautifully united in holy matrimony
          </p>
        </div>
      ) : (
        /* Redesigned Premium Structural Tile Grid */
        <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-lg w-full">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-stone-50/40 to-amber-50/20 rounded-2xl border border-stone-200/80 p-3 sm:p-5 shadow-[0_12px_24px_-10px_rgba(185,28,28,0.06),0_4px_12px_-4px_rgba(217,119,6,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] relative overflow-hidden group transition-all duration-500 hover:border-amber-400 hover:shadow-[0_20px_35px_-12px_rgba(217,119,6,0.18)] hover:-translate-y-1"
            >
              {/* Luxury Card Frame Lines (Inner Micro-Border) */}
              <div className="absolute inset-1 rounded-[12px] border border-stone-100 group-hover:border-amber-200/50 transition-colors duration-500 pointer-events-none" />

              {/* Top Accent Ribbon (Refined) */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-red-600 to-amber-400 transform origin-left scale-x-100 group-hover:scale-x-105 transition-transform duration-500" />

              {/* Subtle Radial Mesh Backdrop for Deep Text Contrast */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.02),transparent)] pointer-events-none" />

              {/* Rich Festive Crimson Number Output */}
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-red-700 via-red-800 to-red-950 bg-clip-text text-transparent tabular-nums relative z-10 drop-shadow-[0_1px_0px_rgba(255,255,255,0.85)] group-hover:scale-105 transition-transform duration-500">
                {String(block.value).padStart(2, "0")}
              </span>

              {/* Elegant Accent Dot Divider */}
              <div className="w-1 h-1 rounded-full bg-amber-500/40 my-1 group-hover:bg-red-600/50 transition-colors duration-500 scale-75 group-hover:scale-100" />

              {/* Refined Label Block */}
              <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] text-stone-400 uppercase font-sans relative z-10 transition-colors duration-500 group-hover:text-amber-800">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Embedded High-Fidelity Animations */}
      <style>{`
        @keyframes premiumPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 50px -12px rgba(217,119,6,0.15); }
          50% { transform: scale(1.01); box-shadow: 0 25px 55px -10px rgba(217,119,6,0.2); }
        }
      `}</style>
    </div>
  );
}
