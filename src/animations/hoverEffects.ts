import { gsap } from 'gsap';

export type HoverOptions = {
  /** Eind-scale bij hover (default 1.05) */
  scale?: number;
  /** Animatieduur in seconden (default 0.3) */
  duration?: number;
  /** Easing-curve (default "power1.out") */
  ease?: string;
};

export const hoverEffects = (
  element: HTMLElement,
  {
    scale = 1.05,
    duration = 0.3,
    ease = 'power1.out',
  }: HoverOptions = {}
): () => void => {
  const onEnter = () => {
    gsap.to(element, { scale, duration, ease });
  };
  const onLeave = () => {
    gsap.to(element, { scale: 1, duration, ease });
  };

  element.addEventListener('mouseenter', onEnter);
  element.addEventListener('mouseleave', onLeave);

  // Retourneer een cleanup-functie om listeners te verwijderen
  return () => {
    element.removeEventListener('mouseenter', onEnter);
    element.removeEventListener('mouseleave', onLeave);
  };
};
