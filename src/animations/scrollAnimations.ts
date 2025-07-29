import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ScrollTrigger plugin registreren
gsap.registerPlugin(ScrollTrigger);

/**
 * Activeer fade-in en parallax effecten bij scroll
 */
export const scrollAnimations = (): void => {
  // Fade-in per section
  gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      autoAlpha: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
  });

  // Optionele parallax voor elementen met .parallax
  gsap.utils.toArray<HTMLElement>('.parallax').forEach((el) => {
    gsap.to(el, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
};
