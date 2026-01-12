import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IMAGES = [
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2576&auto=format&fit=crop", // Miami skyline
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2670&auto=format&fit=crop", // Modern home
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop", // Luxury interior
  "https://images.unsplash.com/photo-1571266028243-3716950387ba?q=80&w=2670&auto=format&fit=crop"  // Poolside
];

export const HeroBackground: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    
    // Initial State
    gsap.set(imagesRef.current, { opacity: 0, scale: 1.1 });
    gsap.set(imagesRef.current[0], { opacity: 1, scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });
    const duration = 2; // fade duration
    const stay = 4; // time to stay visible

    IMAGES.forEach((_, index) => {
      const current = imagesRef.current[index];
      const next = imagesRef.current[(index + 1) % IMAGES.length];

      // We animate the 'next' image in, while the 'current' is already visible
      // The timeline sequences these moves.
      
      tl.to(current, {
        scale: 1.05,
        duration: stay,
        ease: "none"
      })
      .to(next, {
        opacity: 1,
        scale: 1,
        duration: duration,
        ease: "power2.inOut"
      }, `-=${duration/2}`) // Start fade in slightly before scale ends
      .to(current, {
        opacity: 0,
        duration: duration,
        ease: "power2.inOut"
      }, "<"); // Happen at same time as next fade in
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
      {IMAGES.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => (imagesRef.current[idx] = el)}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
};