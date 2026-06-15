import React from 'react';

export default function GaneshaHeader() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 px-4 text-center select-none relative overflow-hidden">
      {/* Decorative hanging marigold and bell ornaments */}
      <div className="absolute top-0 left-6 sm:left-12 flex flex-col items-center animate-sway-slow origin-top">
        <div className="w-0.5 h-12 sm:h-20 bg-amber-500/50" />
        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-md shadow-amber-500/20" />
        <div className="w-[14px] h-[14px] rounded-full bg-red-600 -mt-1 shadow-md" />
        <div className="w-3 h-3 rounded-full bg-amber-400 -mt-0.5" />
        {/* Brass Bell */}
        <svg className="w-6 h-6 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a3 3 0 0 1 3 3v1h1a5 5 0 0 1 5 5v4.5l1.5 3a1 1 0 0 1-.5 1.5H3a1 1 0 0 1-.5-1.5l1.5-3V11a5 5 0 0 1 5-5h1V5a3 3 0 0 1 3-3zm0 20a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
        </svg>
      </div>

      <div className="absolute top-0 right-6 sm:right-12 flex flex-col items-center animate-sway-slow origin-top [animation-delay:1.5s]">
        <div className="w-0.5 h-16 sm:h-24 bg-amber-500/50" />
        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-md" />
        <div className="w-[14px] h-[14px] rounded-full bg-red-600 -mt-1 shadow-md" />
        <div className="w-3 h-3 rounded-full bg-amber-400 -mt-0.5" />
        {/* Brass Bell */}
        <svg className="w-6 h-6 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a3 3 0 0 1 3 3v1h1a5 5 0 0 1 5 5v4.5l1.5 3a1 1 0 0 1-.5 1.5H3a1 1 0 0 1-.5-1.5l1.5-3V11a5 5 0 0 1 5-5h1V5a3 3 0 0 1 3-3zm0 20a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
        </svg>
      </div>

      {/* Styled Ganesha Icon */}
      <div className="relative p-2 bg-gradient-to-b from-amber-50 to-amber-100/40 rounded-full border border-amber-200/50 shadow-inner group transition-all duration-500 hover:scale-105 hover:border-amber-400/60">
        <svg 
          id="ganesha-svg" 
          className="w-16 h-16 sm:w-20 sm:h-20 text-red-700 group-hover:text-amber-700 transition-colors duration-300"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          viewBox="0 0 64 64"
        >
          {/* Detailed Artistic Ganesha lines */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 8 C32 8, 30 14, 32 18 C34 14, 32 8, 32 8 Z" fill="currentColor" className="text-red-600/30" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 18 L32 26" />
          {/* Ear Left */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M26 18 C20 18, 16 26, 26 30 C27 30.5, 28 30.5, 27 28 C26 25, 28 20, 31 19.5" />
          {/* Ear Right */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M38 18 C44 18, 48 26, 38 30 C37 30.5, 36 30.5, 37 28 C38 25, 36 20, 33 19.5" />
          {/* Head & Crown */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M26 18 C28 15, 36 15, 38 18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M29 15 C29 11, 35 11, 35 15" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M31 11 L32 7 L33 11 Z" fill="currentColor" />
          {/* Forehead Tilak */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M30 21 L34 21 M29 23 L35 23" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 19 L32 25" stroke="red" strokeWidth="2.5" />
          {/* Trunk */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 26 C28 26, 24 30, 24 35 C24 42, 38 46, 38 37 C38 35, 36 34, 34 34 C33 34, 32.5 35, 33.5 36.5 C34.5 38, 33 40, 30 39" />
          {/* Tusk Left */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M27 28 L25 29" strokeWidth="2" />
          {/* Tusk Right */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M37 28 L39 28.5" />
          {/* Modak on trunk */}
          <circle cx="30" cy="38" r="1.5" fill="currentColor" className="text-amber-500" />
        </svg>
      </div>

      <div className="mt-3">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-red-800/80 uppercase font-serif">
          ॥ श्री गणेशाय नमः ॥
        </p>
      </div>
    </div>
  );
}
