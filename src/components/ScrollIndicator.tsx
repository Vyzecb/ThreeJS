import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollIndicator: React.FC = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'power1.inOut' } });
    tl.to(arrowRef.current, { y: 10, autoAlpha: 1, duration: 0.8 })
      .to(arrowRef.current, { y: 0, autoAlpha: 0.5, duration: 0.8 });
    return () => tl.kill();
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <div ref={arrowRef} className="w-6 h-6 border-b-2 border-r-2 border-secondary transform rotate-45 opacity-0" />
    </div>
  );
};

export default ScrollIndicator;
