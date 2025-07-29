import { gsap } from 'gsap';

export const introAnimation = (): gsap.core.Tween | gsap.core.Timeline => {
  // Default ease & duration instellen voor alle tweens in deze timeline
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

  // 1. Fade-in van de canvas (3D-scene)
  tl.from('canvas', { autoAlpha: 0, duration: 1.2 });

  // 2. Logo binnenvliegen van boven
  tl.from(
    '.logo',
    { y: -50, autoAlpha: 0 },
    '-=0.8' // overlap met eind van vorige stap
  );

  // 3. Hero-heading letters staggerend
  tl.from(
    'h1 .char', // zorg dat elke letter in een <span class="char"> zit
    { y: 50, autoAlpha: 0, stagger: 0.05 },
    '-=0.6'
  );

  // 4. Navigatie-items fade-in met lichte delay
  tl.from(
    '.nav-item',
    { y: -20, autoAlpha: 0, stagger: 0.1 },
    '-=0.5'
  );

  // 5. Scroll-indicator pulserend
  tl.fromTo(
    '.scroll-indicator',
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.8, repeat: -1, yoyo: true },
    '-=0.4'
  );

  return tl;
};
