import React from 'react';
import { Heart, Sparkles, Star, Milestone } from 'lucide-react';
import { motion } from 'motion/react';

interface StoryChapter {
  title: string;
  period: string;
  description: string;
  icon: any;
  highlight: string;
}

export default function LoveStory() {
  const chapters: StoryChapter[] = [
    {
      title: 'A Beautiful Beginning',
      period: 'Fateful Meeting',
      description: 'Mayank’s quiet, humble demeanour first encountered Ritika’s playful, glowing smile. A simple conversation bloomed into hours of deep, uninterrupted talk, and they instantly knew they had struck a deep soulful match.',
      icon: Sparkles,
      highlight: 'A spark that lit the lifelong path',
    },
    {
      title: 'Whispers of Friendship',
      period: 'The Bond Strengthens',
      description: 'Growing up together through values, dreams, and endless chats around Kota. Every laugh brought them closer, transforming standard compatibility into an unbreakable pillar of unwavering companionship and mutual support.',
      icon: Heart,
      highlight: 'Two minds, one unified heartbeat',
    },
    {
      title: 'Under the Neon glow',
      period: 'The Promise',
      description: 'Surrounded by close family and lush floral arches, Mayank slipped a rings unto Ritika’s finger. With the radiant sign glowing "Better Together" behind them, they sealed their promise to walk side-by-side into eternity.',
      icon: Star,
      highlight: 'Hand-in-hand under the stars',
    },
    {
      title: 'Beginning the Eternal Journey',
      period: 'Wedding Bells - 9th July 2026',
      description: 'With hearts overflowing with pure joy, they are taking the seven sacred circumambulations (Phere) around the holy fire to bind their destiny forever as husband and wife.',
      icon: Milestone,
      highlight: 'An endless sunset of togetherness',
    },
  ];

  return (
    <section id="story" className="w-full py-16 px-4 bg-cream-base relative select-none overflow-hidden border-t border-amber-200/20">
      
      {/* Side background subtle ornaments */}
      <div className="absolute top-10 left-[-50px] w-48 h-48 bg-red-800/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-50px] w-48 h-48 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-amber-700 font-bold">The Journey of Two Hearts</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-red-800 font-bold mt-2">Our Love Story</h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-stone-600 mt-4 max-w-lg mx-auto">
            From two separate paths in life to one beautifully synchronized walk into forever.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-amber-300/40 ml-4 md:ml-36 space-y-12">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline node icon */}
                <div className="absolute left-[-16px] top-1.5 w-8 h-8 rounded-full bg-white border border-amber-400 flex items-center justify-center text-red-800 shadow-sm group-hover:bg-red-800 group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Side Label (Only visible on medium scales) */}
                <span className="hidden md:block absolute left-[-140px] top-2.5 text-right w-28 text-[11px] uppercase tracking-widest text-amber-800 font-bold">
                  {ch.period}
                </span>

                {/* Story Main Bubble Card */}
                <div className="bg-white p-6 rounded-2xl border border-amber-200/15 shadow-sm hover:shadow-md transition-shadow">
                  <span className="md:hidden text-[10px] uppercase tracking-widest text-amber-800/80 font-bold block mb-1">
                    {ch.period}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-800 group-hover:text-red-800 transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mt-2.5">
                    {ch.description}
                  </p>
                  
                  {/* Styled highlight footer */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                    <span>{ch.highlight}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
