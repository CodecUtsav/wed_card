import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BrideGroomCard() {
  // Replace this placeholder link with your actual hosted image URL/path
  const hostedImageUrl = "images/wed1.png";

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 select-none">
      <div className="relative bg-gradient-to-br from-white via-amber-50/20 to-white rounded-3xl p-6 sm:p-10 border-2 border-amber-500/20 shadow-xl overflow-hidden group">
        {/* Background Mandala Backdrop Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <svg
            className="w-[550px] h-[550px] text-amber-800 animate-[spin_120s_linear_infinite]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.76-.57 3.38-1.54 4.7z" />
          </svg>
        </div>

        {/* Intricate Royal Border Accent */}
        <div className="absolute inset-3 border border-amber-500/15 rounded-2xl pointer-events-none" />
        <div className="absolute inset-4 border border-dashed border-amber-500/10 rounded-2xl pointer-events-none" />

        {/* Corner Ornaments */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-500/45" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-500/45" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-500/45" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-500/45" />

        {/* Framing Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="flex justify-center items-center gap-1.5 text-amber-800 text-[10px] font-extrabold uppercase tracking-[0.3em] mb-1">
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Divine Union Silhouette</span>
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-red-900 italic">
            Shubh Bandhan
          </h3>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-2" />
        </div>

        {/* THE MAIN ILLUSTRATION CONTAINER (Zero Distortion) */}
        <div className="relative flex justify-center items-center aspect-[4/3] max-h-[350px] w-full mx-auto overflow-hidden rounded-2xl p-2 bg-gradient-to-b from-amber-50/30 to-transparent">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={hostedImageUrl}
            alt="Bride and Groom Sketch Artwork"
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm"
          />

          {/* Absolute Decorative Side Banners (Marigold simulation) */}
          <div className="absolute top-0 bottom-0 left-0 w-3 flex flex-col justify-around opacity-35 mt-4 h-[90%]">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mx-auto" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mx-auto" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-3 flex flex-col justify-around opacity-35 mt-4 h-[90%]">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mx-auto" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mx-auto" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mx-auto" />
          </div>
        </div>

        {/* Traditional Vedic Sloka Footer */}
        <div className="mt-6 text-center relative z-10 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/20 max-w-md mx-auto">
          <p className="font-serif italic text-xs text-red-900 font-extrabold leading-relaxed">
            "धर्मेचा अर्थेचा कामेचा मोक्षेचा इमं नातिचरामि"
          </p>
          <p className="text-[10px] text-stone-500 font-sans mt-1 uppercase tracking-wider font-semibold">
            In righteousness, wealth, desire, and spiritual paths, I walk by
            your side forever.
          </p>
        </div>
      </div>
    </div>
  );
}
