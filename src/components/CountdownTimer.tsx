import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-07-09T09:15:00+05:30'); // Indian Standard Time (Kota, Rajasthan)
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
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
    { label: 'Days', value: timeLeft.days, color: 'from-amber-600 to-amber-700' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-red-700 to-red-800' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-amber-600 to-amber-700' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-red-700 to-red-800' },
  ];

  return (
    <div className="w-full flex flex-col items-center py-6 px-4 select-none relative z-10">
      {/* Decorative floral elements around timer */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500/60" />
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-amber-800/80 font-serif">
          {timeLeft.isOver ? 'The Auspicious Day Has Arrived' : 'Counting Down To The Joy'}
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500/60" />
      </div>

      {timeLeft.isOver ? (
        <div className="text-center py-4 px-8 bg-amber-50 rounded-2xl border border-amber-200/50 shadow-md animate-pulse-soft max-w-md">
          <p className="font-serif text-2xl text-red-800 font-bold">शुभ विवाह</p>
          <p className="text-sm text-amber-700 mt-2 font-medium">Mayank & Ritika are united in holy matrimony!</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg w-full">
          {timeBlocks.map((block) => (
            <div 
              key={block.label} 
              className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-amber-200/30 p-2 sm:p-4 shadow-md shadow-amber-900/5 relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500" />
              
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-red-800 tabular-nums">
                {String(block.value).padStart(2, '0')}
              </span>
              
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-800/70 uppercase mt-1">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
