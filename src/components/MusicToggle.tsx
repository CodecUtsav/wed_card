import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // A beautiful traditional Indian Sitar and Flute background melody link (royalty-free)
  const musicUrl = "assets/.aistudio/audio/wedd.mp3";

  useEffect(() => {
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.25; // Gentle backsound
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Browser blocked autoplay. User clicked to enable.", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-amber-300 shadow-xl transition-all duration-500 hover:scale-105 ${
          isPlaying
            ? "bg-red-800 text-white border-red-900 animate-pulse"
            : "bg-white/95 text-stone-700 hover:bg-stone-50"
        }`}
        title={
          isPlaying
            ? "Pause Instrumental Music"
            : "Play Wedding Sitar Flute Instrumental"
        }
      >
        <span className="relative flex h-3 w-3">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? "bg-white" : "bg-amber-500"}`}
          ></span>
        </span>

        {isPlaying ? (
          <>
            <svg
              className="w-4 h-4 animate-spin [animation-duration:8s]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93V15h-2v4.93c-2.31-.42-4.14-2.11-4.73-4.39C7.45 15 8 14.28 8 13.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5c0 1.93 1.25 3.5 3 4.15v2.28A8.014 8.014 0 0 1 4 12c0-4.08 3.05-7.44 7-7.93V10h2V4.07c3.95.49 7 3.85 7 7.93 0 3.82-2.67 7.02-6.25 7.78z" />
            </svg>
            <Volume2 className="w-4 h-4" />
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-amber-700" />
            <VolumeX className="w-4 h-4 text-stone-500" />
          </>
        )}
      </button>
    </div>
  );
}
