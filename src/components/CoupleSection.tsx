import React, { useState } from "react";
import BrideGroomSketch from "./BrideGroomSketch";

export default function CoupleSection() {
  const [activeTab, setActiveTab] = useState<"both" | "groom" | "bride">(
    "both",
  );

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-b from-cream-base via-cream-light to-cream-base relative select-none">
      {/* Decorative gold background medallion */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] text-amber-600"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />
          <polygon
            points="50,15 54,35 75,35 58,48 65,70 50,56 35,70 42,48 25,35 46,35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header invitation intro */}
        <div className="text-center mb-6">
          <p className="font-serif italic text-lg sm:text-xl text-amber-700 font-medium">
            With the blessings of our ancestors and parents,
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-red-800 font-semibold tracking-wide mt-2">
            The Brides &amp; Grooms Families
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-stone-600 mt-4 leading-relaxed px-4">
            We cordially invite you to grace the wedding celebrations of our
            beloved children. Share in our joy as they embark on this beautiful
            lifetime journey together.
          </p>
        </div>

        {/* Hand-drawn Artistic Sketch Centerpiece */}
        <BrideGroomSketch />

        {/* Dynamic Controls representing the Sides of the Family */}
        <div className="flex justify-center gap-2 mb-8 bg-cream-dark/60 p-1.5 rounded-full max-w-sm mx-auto border border-amber-200/40">
          {(["both", "groom", "bride"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-red-800 text-white shadow-md"
                  : "text-stone-600 hover:text-red-800 hover:bg-cream-light/80"
              }`}
            >
              {tab === "both"
                ? "The Couple"
                : tab === "groom"
                  ? "Groom's Family"
                  : "Bride's Family"}
            </button>
          ))}
        </div>

        {/* Couple & Lineage Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Mayank (Groom) Lineage Card */}
          {(activeTab === "both" || activeTab === "groom") && (
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-200/30 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-amber-400/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${activeTab === "groom" ? "md:col-span-2 max-w-lg mx-auto w-full" : ""}`}
            >
              {/* Corner decor */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 mt-3 ml-3" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 mt-3 mr-3" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/30 mb-3 ml-3" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 mb-3 mr-3" />

              <div>
                <span className="text-[10px] text-amber-700 tracking-[0.3em] font-semibold uppercase block text-center mb-2">
                  The Groom
                </span>
                <h3 className="font-hand text-5xl sm:text-6xl text-red-800 text-center leading-none group-hover:scale-105 transition-transform duration-500">
                  Mayank
                </h3>
                <div className="w-16 h-px bg-amber-500/40 mx-auto my-4" />

                <div className="space-y-6 mt-6">
                  {/* Grandparents */}
                  <div className="text-center">
                    <p className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mb-1">
                      Grandson of
                    </p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Smt. Shanti Devi Shringi
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">&amp;</p>
                    <p className="font-serif text-base text-stone-500 italic">
                      Late Sh. Devi Shankar Ji Shringi
                    </p>
                  </div>

                  {/* Parents */}
                  <div className="text-center pt-2 border-t border-dashed border-amber-200/20">
                    <p className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mb-1">
                      Son of
                    </p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Smt. Minakshi Shringi
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">&amp;</p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Sh. C. P. Shringi
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 text-xs text-amber-800/80 italic font-serif">
                Currently residing in Kota, Rajasthan
              </div>
            </div>
          )}

          {/* Ritika (Bride) Lineage Card */}
          {(activeTab === "both" || activeTab === "bride") && (
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-200/30 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-amber-400/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${activeTab === "bride" ? "md:col-span-2 max-w-lg mx-auto w-full" : ""}`}
            >
              {/* Corner decor */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 mt-3 ml-3" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 mt-3 mr-3" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/30 mb-3 ml-3" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 mb-3 mr-3" />

              <div>
                <span className="text-[10px] text-amber-700 tracking-[0.3em] font-semibold uppercase block text-center mb-2">
                  The Bride
                </span>
                <h3 className="font-hand text-5xl sm:text-6xl text-red-800 text-center leading-none group-hover:scale-105 transition-transform duration-500">
                  Ritika
                </h3>
                <div className="w-16 h-px bg-amber-500/40 mx-auto my-4" />

                <div className="space-y-6 mt-6">
                  {/* Grandparents */}
                  <div className="text-center">
                    <p className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mb-1">
                      Granddaughter of
                    </p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Smt. Geeta Ojha
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">&amp;</p>
                    <p className="font-serif text-base text-stone-500 italic">
                      Late Sh. Banshi Lal Ojha
                    </p>
                  </div>

                  {/* Parents */}
                  <div className="text-center pt-2 border-t border-dashed border-amber-200/20">
                    <p className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mb-1">
                      Daughter of
                    </p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Smt. Renu Ojha
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">&amp;</p>
                    <p className="font-serif text-base text-stone-800 font-semibold">
                      Sh. Kapil Ojha
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 text-xs text-amber-800/80 italic font-serif">
                Currently residing in Chittorgarh, Rajasthan
              </div>
            </div>
          )}
        </div>

        {/* Central visual vector panel showcasing hands or couple */}
        <div className="mt-12 bg-white/60 p-4 rounded-xl border border-amber-200/20 max-w-lg mx-auto text-center shadow-inner">
          <div className="flex justify-center items-center gap-3">
            {/* Peacock SVG Left */}
            <svg
              className="w-8 h-8 text-amber-600/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 17.93V15h-2v4.93c-2.31-.42-4.14-2.11-4.73-4.39C7.45 15 8 14.28 8 13.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5c0 1.93 1.25 3.5 3 4.15v2.28A8.014 8.014 0 0 1 4 12c0-4.08 3.05-7.44 7-7.93V10h2V4.07c3.95.49 7 3.85 7 7.93 0 3.82-2.67 7.02-6.25 7.78z" />
            </svg>
            <span className="text-red-800 font-serif font-black text-xl">
              &#10084;
            </span>
            <span className="font-serif font-semibold italic text-stone-700 text-sm">
              Two souls, one destiny. Bonded by love &amp; family.
            </span>
            <span className="text-red-800 font-serif font-black text-xl">
              &#10084;
            </span>
            {/* Peacock SVG Right */}
            <svg
              className="w-8 h-8 transform scale-x-[-1] text-amber-600/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 17.93V15h-2v4.93c-2.31-.42-4.14-2.11-4.73-4.39C7.45 15 8 14.28 8 13.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5c0 1.93 1.25 3.5 3 4.15v2.28A8.014 8.014 0 0 1 4 12c0-4.08 3.05-7.44 7-7.93V10h2V4.07c3.95.49 7 3.85 7 7.93 0 3.82-2.67 7.02-6.25 7.78z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
