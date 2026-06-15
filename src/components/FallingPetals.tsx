import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate 16 random falling rose petals
    const newPetals: Petal[] = Array.from({ length: 16 }).map((_, index) => {
      const sizeRandom = Math.random();
      let size = 'w-2 h-3.5';
      if (sizeRandom > 0.6) size = 'w-3 h-4.5';
      if (sizeRandom > 0.85) size = 'w-4 h-6';

      return {
        id: index,
        left: `${Math.random() * 95}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 10}s`,
        size,
        opacity: 0.5 + Math.random() * 0.4,
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-25">
      {petals.map((p) => {
        return (
          <div
            key={p.id}
            className="absolute top-[-20px] rounded-full bg-red-600/70"
            style={{
              left: p.left,
              animationName: 'petal-fall',
              animationDuration: p.duration,
              animationDelay: p.delay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              width: p.size.split(' ')[0] === 'w-2' ? '8px' : p.size.split(' ')[0] === 'w-3' ? '12px' : '16px',
              height: p.size.split(' ')[1] === 'h-3.5' ? '14px' : p.size.split(' ')[1] === 'h-4.5' ? '18px' : '24px',
              opacity: p.opacity,
              background: 'radial-gradient(circle, rgba(185,28,28,0.85) 0%, rgba(127,29,29,0.95) 100%)',
              borderRadius: '50% 0 50% 50%',
              transform: 'rotate(45deg)',
            }}
          />
        );
      })}
    </div>
  );
}
