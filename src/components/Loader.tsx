// src/components/Loader.tsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.loader-circle', {
      scale: 1,
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power1.inOut',
    })
      .to('.loader-circle', {
        scale: 0.5,
        autoAlpha: 0.3,
        duration: 0.6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="loader fixed inset-0 flex items-center justify-center bg-secondary/80 z-40 p-4 sm:p-0">
      <div
        className="
          loader-circle
          w-12 h-12 sm:w-16 sm:h-16
          rounded-full
          bg-primary
          opacity-0 scale-0
        "
      />
    </div>
  );
};

export default Loader;
