import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.loader-circle', { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'power1.inOut' })
      .to('.loader-circle', { scale: 0.5, autoAlpha: 0.3, duration: 0.6, ease: 'power1.inOut', repeat: -1, yoyo: true });
    return () => tl.kill();
  }, []);

  return (
    <div className="loader fixed inset-0 flex items-center justify-center bg-secondary/80 z-40">
      <div className="loader-circle w-16 h-16 rounded-full bg-primary opacity-0 scale-0" />
    </div>
  );
};

export default Loader;
