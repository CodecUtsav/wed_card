import React from "react";
import GaneshaHeader from "./components/GaneshaHeader";
import CountdownTimer from "./components/CountdownTimer";
import CoupleSection from "./components/CoupleSection";
import TimelineSection from "./components/TimelineSection";
import PhotoGallery from "./components/PhotoGallery";
import LoveStory from "./components/LoveStory";
import MusicToggle from "./components/MusicToggle";
import FallingPetals from "./components/FallingPetals";
import { Calendar, MapPin, Sparkles, Heart, Camera, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-base text-stone-800 font-sans relative overflow-x-hidden bg-paper-texture">
      {/* Visual Floating Petals Overlay */}
      <FallingPetals />

      {/* Floating Traditional Instrumental Music controller */}
      <MusicToggle />

      {/* Absolute top decorative marigold hanging garlands (toran) */}
      <div className="absolute top-0 left-0 right-0 h-4 flex justify-around pointer-events-none z-30 overflow-hidden">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full ${i % 2 === 0 ? "bg-amber-500" : "bg-orange-600"} -mt-1`}
            />
            <div
              className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-orange-600" : "bg-red-700"} -mt-0.5`}
            />
          </div>
        ))}
      </div>

      <main className="relative pt-6">
        {/* HERO SECTION - Page 1 & 2 Invitation Cards mashup */}
        <header className="relative py-12 sm:py-20 px-4 text-center overflow-hidden flex flex-col items-center">
          {/* Shaded background frame mimicking the temple arched architecture */}
          <div className="absolute inset-x-4 top-4 bottom-4 rounded-3xl border border-amber-300/40 opacity-80 pointer-events-none" />

          {/* Lord Ganesha Invocation Header */}
          <GaneshaHeader />

          {/* Monogram logo MR */}
          <div className="w-14 h-14 rounded-full border border-amber-500/50 flex items-center justify-center bg-white shadow-md mt-6 group hover:border-amber-500 transition-colors duration-500">
            <span className="font-serif text-sm tracking-widest font-black text-amber-700">
              M R
            </span>
          </div>

          {/* Core Couples Names Card - Page 1 & 2 inspired formatting */}
          <div className="mt-8 max-w-lg mx-auto space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-800 font-bold">
              Save the Date
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-8 h-[1px] bg-amber-500/40" />
              <p className="text-sm font-semibold text-stone-500 font-serif italic">
                Together with our families
              </p>
              <div className="w-8 h-[1px] bg-amber-500/40" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-red-800 py-3 select-none flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 leading-none">
              <span className="text-shimmer">Mayank</span>
              <span className="font-hand text-4xl sm:text-5xl text-amber-600 font-normal mt-1 sm:mt-0">
                &amp;
              </span>
              <span className="text-shimmer">Ritika</span>
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-600">
              Are Getting Married
            </p>

            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold text-amber-800/90 font-serif mt-3 py-1 px-4 bg-white/40 border border-amber-200/20 rounded-full w-fit mx-auto shadow-inner">
              <Calendar className="w-4 h-4 text-amber-700 mt-0.5" />9 JULY 2026
            </div>
          </div>

          {/* Active Countdown Counter component */}
          <div className="mt-10 w-full max-w-xl mx-auto">
            <CountdownTimer />
          </div>

          {/* Floating background template pillars - pure elegant vector representations */}
          <div className="mt-12 w-full max-w-lg mx-auto relative px-4 flex justify-between items-end opacity-20 select-none">
            {/* Peacock silhouette Left */}
            <svg
              className="w-16 h-16 text-amber-700 animate-float"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 17.93V15h-2v4.93c-2.31-.42-4.14-2.11-4.73-4.39C7.45 15 8 14.28 8 13.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5c0 1.93 1.25 3.5 3 4.15v2.28A8.014 8.014 0 0 1 4 12c0-4.08 3.05-7.44 7-7.93V10h2V4.07c3.95.49 7 3.85 7 7.93 0 3.82-2.67 7.02-6.25 7.78z" />
            </svg>

            {/* Dome architecture vector */}
            <svg
              className="w-24 h-24 text-amber-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-3.13 0-5.87 1.83-7.1 4.5l1.9 1c.95-2 3.08-3.5 5.2-3.5s4.25 1.5 5.2 3.5l1.9-1C17.87 3.83 15.13 2 12 2zm1 9h-2v11h2V11zm-5 2h-2v9h2V13zm10 0h-2v9h2v-9z" />
            </svg>

            {/* Peacock silhouette Right */}
            <svg
              className="w-16 h-16 text-amber-700 transform scale-x-[-1] animate-float [animation-delay:2s]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 17.93V15h-2v4.93c-2.31-.42-4.14-2.11-4.73-4.39C7.45 15 8 14.28 8 13.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5c0 1.93 1.25 3.5 3 4.15v2.28A8.014 8.014 0 0 1 4 12c0-4.08 3.05-7.44 7-7.93V10h2V4.07c3.95.49 7 3.85 7 7.93 0 3.82-2.67 7.02-6.25 7.78z" />
            </svg>
          </div>
        </header>

        {/* SECTION 2 - THE LINEAGE / RECOLLECTION (Page 3 Lineage) */}
        <div id="couple">
          <CoupleSection />
        </div>

        {/* SECTION 2.5 - THE SENTIMENTAL LOVE STORY */}
        <div id="story">
          <LoveStory />
        </div>

        {/* SECTION 2.7 - CELEBRATION PHOTO GALLERY */}
        <div id="gallery">
          <PhotoGallery />
        </div>

        {/* SECTION 3 - TIMELINE OF CEREMONIES (Page 4, 5, 6, 7 Itinerary mapping) */}
        <div id="itinerary">
          <TimelineSection />
        </div>

        {/* ================= FOOTER SECTION ================= */}
        <footer className="relative py-20 px-4 bg-gradient-to-b from-transparent via-stone-50/50 to-amber-50/30 text-center select-none overflow-hidden border-t border-amber-200/30">
          {/* Refined Modular Hanging Festoon/Curtain Overlay */}
          <div className="absolute top-0 inset-x-0 h-6 flex justify-between pointer-events-none opacity-[0.15]">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-16 h-12 rounded-b-full border-b-2 border-dashed border-amber-700 bg-transparent shrink-0"
              />
            ))}
          </div>

          <div className="max-w-xl mx-auto space-y-6 relative z-10 pt-2">
            <span className="text-[10px] sm:text-xs text-amber-700 tracking-[0.4em] font-bold uppercase block font-sans">
              Dhanyavaad
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-black bg-gradient-to-b from-red-700 to-red-900 bg-clip-text text-transparent">
              Thank You
            </h3>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

            <p className="font-serif text-base sm:text-lg text-stone-600 leading-relaxed italic max-w-md mx-auto">
              "We are delighted to share our special day with you. Your presence
              and blessings will be the greatest gift to us."
            </p>

            <div className="pt-4 space-y-2">
              <span className="font-hand text-4xl sm:text-5xl text-red-800 block leading-none filter drop-shadow-sm">
                Mayank &amp; Ritika
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-amber-800/60 block pt-1 font-sans">
                #MayankGetsRiti
              </span>
            </div>

            {/* Premium Photography Partner Promotion Block (With hover effect, without link) */}
            <div className="mt-12 pt-8 border-t border-dashed border-amber-300/40 max-w-sm mx-auto space-y-3">
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-bold block">
                Moments Captured By
              </span>

              {/* Changed from <a> to <div> with cursor-pointer and group animations */}
              <div className="flex flex-col items-center justify-center gap-1 group cursor-pointer">
                <div className="flex items-center gap-2 text-amber-800 font-serif font-bold text-sm tracking-wide group-hover:text-amber-700 transition-colors duration-300">
                  <Camera className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span>Paliwal Photo Studio</span>
                </div>
                <span className="text-[11px] font-medium text-stone-500 group-hover:text-amber-600/80 transition-colors duration-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" /> SumerGanj Mandi
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href="tel:+919413086688"
                  className="flex items-center gap-1 text-[11px] font-mono font-medium text-stone-500 hover:text-red-700 transition-colors bg-white/50 px-2.5 py-1 rounded-full border border-stone-200/50 shadow-sm"
                >
                  <Phone className="w-3 h-3 text-red-600/80" /> 9413086688
                </a>
                <a
                  href="tel:+919414539439"
                  className="flex items-center gap-1 text-[11px] font-mono font-medium text-stone-500 hover:text-red-700 transition-colors bg-white/50 px-2.5 py-1 rounded-full border border-stone-200/50 shadow-sm"
                >
                  <Phone className="w-3 h-3 text-red-600/80" /> 9414539439
                </a>
              </div>
            </div>

            {/* Institutional Metadata Signoff */}
            <div className="pt-6 text-[10px] font-mono text-stone-400 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/60 py-1.5 px-4 rounded-full border border-stone-200/40 shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-red-700 text-red-700 animate-pulse" />
                <span className="font-sans font-semibold tracking-wide text-stone-500">
                  Kota, Rajasthan 2026
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
