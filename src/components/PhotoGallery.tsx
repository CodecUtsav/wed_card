import React, { useState } from "react";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PhotoItem {
  id: number;
  url: string;
  fallbackUrl: string;
  title: string;
  category: string;
  description: string;
}

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  // High fidelity presets that match the beautiful couple poses
  const photos: PhotoItem[] = [
    {
      id: 0,
      url: "assets/.aistudio/images/WhatsApp Image 2026-06-12 at 7.55.53 PM.jpeg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      title: "",
      category: "",
      description:
        "Mayank and Ritika on their beautiful union, adorned with fresh, fragrant red and white rose garlands. Radiating elegance and eternal devotion.",
    },
    {
      id: 1,
      url: "assets/.aistudio/images/WhatsApp Image 2026-06-12 at 7.57.01 PM.jpeg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1621616875500-de9944358366?auto=format&fit=crop&q=80&w=1200",
      title: "Better Together",
      category: "",
      description:
        "A quiet, sweet pre-wedding moment shared on a cozy plush sofa. Smiling and browsing sweet memories together under the magnificent celebratory lights.",
    },
    {
      id: 2,
      url: "assets/.aistudio/images/WhatsApp Image 2026-06-12 at 7.57.13 PM.jpeg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200",
      title: "Floral Grandeur",
      category: "Engagement Ceremony",
      description:
        "Mayank and Ritika captured comfortably in their regal attire, seated under an exquisite archway of ivory roses and gold accents.",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 px-4 bg-gradient-to-b from-cream-dark/20 to-cream-base border-t border-amber-200/20 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            Unveiling Our Moments
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-red-800 font-bold">
            Celebration Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-stone-600 mt-4 max-w-lg mx-auto">
            A glimpse into the romance, traditional aesthetics, and joyous
            smiles of Mayank & Ritika.
          </p>
        </div>

        {/* Polaroid/Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setActivePhoto(photo.id)}
              className="bg-white p-4 pb-6 rounded-lg shadow-md border border-amber-200/25 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-350 flex flex-col group"
            >
              <div className="relative overflow-hidden rounded-md bg-stone-100 aspect-[3/4]">
                {/* Fallback support: tries standard URL first */}
                <img
                  src={photo.url}
                  onError={(e) => {
                    // fallbacks gracefully if first image is invalid or offline
                    const target = e.target as HTMLImageElement;
                    if (target.src !== photo.fallbackUrl) {
                      target.src = photo.fallbackUrl;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-red-950 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-350">
                    <Heart className="w-5 h-5 fill-red-800 text-red-800" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-red-800 text-white text-[9px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-md">
                  {photo.category}
                </span>
              </div>

              {/* Polaroid bottom text area */}
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg font-bold text-stone-800 group-hover:text-red-800 transition-colors">
                  {photo.title}
                </h3>
                <div className="flex justify-center items-center gap-1.5 mt-1.5">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-extrabold">
                    Mayank &amp; Ritika
                  </span>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotive Quotes/Highlights */}
        <div className="mt-16 p-6 sm:p-8 bg-amber-50/40 rounded-2xl border border-amber-200/20 text-center max-w-3xl mx-auto italic">
          <p className="font-serif text-stone-700 leading-relaxed text-sm sm:text-base">
            "Under the golden canopy of blessings, with sacred fire as our
            witness, we weave together our dreams, laughter, and lifetimes. Two
            hearts, one beautiful rhythm."
          </p>
          <span className="font-hand text-2xl text-red-800 block mt-3">
            — Mayank &amp; Ritika
          </span>
        </div>
      </div>

      {/* Lightbox / Zoom Dialog Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 bg-stone-950/95 z-50 flex flex-col items-center justify-center p-4 select-none"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white p-2.5 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Frame */}
            <div
              className="relative max-w-4xl w-full flex flex-col items-center gap-4 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Action */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors hidden sm:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <motion.div
                key={activePhoto}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-h-[70vh] flex justify-center items-center"
              >
                <img
                  src={photos[activePhoto].url}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== photos[activePhoto].fallbackUrl) {
                      target.src = photos[activePhoto].fallbackUrl;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  alt={photos[activePhoto].title}
                  className="rounded-lg max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/10"
                />
              </motion.div>

              {/* Next Action */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors hidden sm:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Captions Detail Overlay */}
              <div className="text-center text-white max-w-xl mt-2">
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block">
                  {photos[activePhoto].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-amber-100">
                  {photos[activePhoto].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  {photos[activePhoto].description}
                </p>

                {/* Mobile Navigation controls inside Overlay */}
                <div className="flex justify-center items-center gap-6 mt-4 sm:hidden">
                  <button
                    onClick={handlePrev}
                    className="bg-white/5 p-2 rounded-full text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-stone-400">
                    {activePhoto + 1} of {photos.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="bg-white/5 p-2 rounded-full text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
