import React from "react";

export default function GaneshaHeader() {
  return (
    <div className="w-full flex flex-col items-center pt-8 pb-8 px-4 text-center select-none relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-transparent to-transparent">
      {/* Background Divine Glow Effect */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-200/20 blur-3xl pointer-events-none rounded-full" />

      {/* Main Structural Row containing Ornaments & Idol */}
      <div className="w-full max-w-xl flex items-start justify-between sm:justify-center sm:gap-10 md:gap-16 relative z-10">
        {/* Left Ornament */}
        <div
          className="flex flex-col items-center origin-top drop-shadow-md pt-0"
          style={{ animation: "ganeshaSway 4s ease-in-out infinite alternate" }}
        >
          <div className="w-0.5 h-14 sm:h-24 bg-gradient-to-b from-amber-600/30 via-amber-500/60 to-amber-500" />
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-500 shadow-sm ring-1 ring-amber-400" />
          <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full bg-red-600 -mt-1 shadow-sm ring-1 ring-red-500" />
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-400 -mt-0.5 shadow-sm ring-1 ring-amber-300" />
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1.5 transition-transform hover:scale-110 duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a3 3 0 0 1 3 3v1h1a5 5 0 0 1 5 5v4.5l1.5 3a1 1 0 0 1-.5 1.5H3a1 1 0 0 1-.5-1.5l1.5-3V11a5 5 0 0 1 5-5h1V5a3 3 0 0 1 3-3zm0 20a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
          </svg>
        </div>

        {/* Central Expanded Ganesha Container */}
        <div className="relative p-5 bg-gradient-to-b from-amber-50/60 via-white to-amber-100/60 rounded-full border border-amber-200/70 shadow-[inset_0\_2px\_6px\_rgba(251,191,36,0.15),0\_15px\_35px\_-5px\_rgba(251,191,36,0.12)] group transition-all duration-700 hover:scale-105 hover:border-amber-400 hover:shadow-amber-200/50 mx-2">
          {/* Intricate Inner Ring */}
          <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-300/40 group-hover:border-amber-400/60 transition-colors duration-500" />
          <div className="absolute inset-3 rounded-full border border-amber-200/20" />

          {/* Divine SVG Grid (128x128) */}
          <svg
            id="ganesha-svg"
            className="w-24 h-24 sm:w-36 sm:h-36 text-red-700 group-hover:text-amber-800 transition-colors duration-500 relative z-10 filter drop-shadow-[0_3px_5px_rgba(185,28,28,0.12)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 128 128"
          >
            {/* 1. Divine Prabhavali (Radiant Background Halo) */}
            <circle
              cx="64"
              cy="64"
              r="44"
              strokeDasharray="3 6"
              className="text-amber-500/30"
              strokeWidth="1.5"
            />
            <circle
              cx="64"
              cy="64"
              r="40"
              className="text-amber-500/10"
              strokeWidth="1"
            />

            {/* 2. Grand Mukut (Multi-Tier Ornate Crown) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M50 36 C54 32, 74 32, 78 36 L75 26 C70 28, 58 28, 53 26 Z"
              fill="currentColor"
              className="text-red-600/10"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M54 26 C56 21, 72 21, 74 26 L71 16 C68 18, 60 18, 57 16 Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M58 16 L64 6 L70 16 Z"
              fill="currentColor"
            />
            <circle cx="64" cy="4" r="1.5" fill="#f59e0b" />

            {/* 3. Forehead & Divine Markings */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M52 44 C56 40, 72 40, 76 44"
              strokeWidth="2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M54 48 L74 48"
              strokeWidth="1.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M56 51 L72 51"
              strokeWidth="1"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M58 54 L70 54"
              strokeWidth="1"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M64 42 L64 53"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <circle cx="64" cy="47" r="1" fill="#f59e0b" />

            {/* 4. Majestic Ears & Jewelry */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M50 36 C36 34, 28 48, 46 58 C48 59, 50 56, 48 53 C44 48, 46 40, 52 39"
            />
            <circle
              cx="36"
              cy="48"
              r="2"
              fill="currentColor"
              className="text-amber-500"
            />
            <path d="M36 50 L36 54" strokeWidth="1" />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M78 36 C92 34, 100 48, 82 58 C80 59, 78 56, 80 53 C84 48, 82 40, 76 39"
            />
            <circle
              cx="92"
              cy="48"
              r="2"
              fill="currentColor"
              className="text-amber-500"
            />
            <path d="M92 50 L92 54" strokeWidth="1" />

            {/* 5. Tusks */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M54 60 L49 61"
              strokeWidth="2.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M74 60 L81 61.5 L74 62.5"
              fill="currentColor"
              className="text-white"
              strokeWidth="1"
            />

            {/* 6. Trunk Details */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M64 56 C56 56, 48 64, 48 76 C48 90, 78 98, 78 82 C78 76, 72 74, 68 75 C64 76, 64 80, 68 82 C74 85, 70 91, 60 89 C56 88, 55 84, 58 82"
              strokeWidth="2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M60 62 C62 63, 66 63, 68 62"
              strokeWidth="1"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M58 67 C61 68, 65 68, 68 67"
              strokeWidth="1"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M56 72 C60 73, 64 73, 67 72"
              strokeWidth="1"
            />

            {/* 7. Modak */}
            <path
              d="M66 82 C65 80, 69 77, 71 77 C73 77, 77 80, 76 82 Z"
              fill="#f59e0b"
              stroke="#d97706"
              strokeWidth="0.75"
            />
            <path d="M71 77 L71 75" stroke="#d97706" strokeWidth="1" />
          </svg>
        </div>

        {/* Right Ornament */}
        <div
          className="flex flex-col items-center origin-top drop-shadow-md pt-0"
          style={{
            animation: "ganeshaSway 4.5s ease-in-out infinite alternate",
            animationDelay: "0.8s",
          }}
        >
          <div className="w-0.5 h-18 sm:h-28 bg-gradient-to-b from-amber-600/30 via-amber-500/60 to-amber-500" />
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-500 shadow-sm ring-1 ring-amber-400" />
          <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full bg-red-600 -mt-1 shadow-sm ring-1 ring-red-500" />
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-400 -mt-0.5 shadow-sm ring-1 ring-amber-300" />
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1.5 transition-transform hover:scale-110 duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a3 3 0 0 1 3 3v1h1a5 5 0 0 1 5 5v4.5l1.5 3a1 1 0 0 1-.5 1.5H3a1 1 0 0 1-.5-1.5l1.5-3V11a5 5 0 0 1 5-5h1V5a3 3 0 0 1 3-3zm0 20a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
          </svg>
        </div>
      </div>

      {/* Mantra Text Section */}
      <div className="mt-6 relative z-10">
        <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-red-800/90 uppercase font-serif bg-gradient-to-r from-red-900 via-red-700 to-red-900 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(251,191,36,0.25)]">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mt-2 rounded-full" />
      </div>

      {/* Inline Animation Injection */}
      <style>{`
        @keyframes ganeshaSway {
          0% { transform: rotate(-2.5deg); }
          100% { transform: rotate(2.5deg); }
        }
      `}</style>
    </div>
  );
}
