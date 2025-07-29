import { gsap } from 'gsap'

export const introAnimation = (): void => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } })

  // 1) Fade-in canvas
  tl.from('canvas', { autoAlpha: 0, duration: 1.2 })

  // 2) Logo
  tl.from('.logo', { y: -50, autoAlpha: 0 }, '-=0.8')

  // 3) Heading
  tl.from('h1', { y: 50, autoAlpha: 0 }, '-=0.6')

  // 4) Nav-items
  tl.from('.nav-item', { y: -20, autoAlpha: 0, stagger: 0.1 }, '-=0.5')

  // 5) Scroll-indicator
  tl.fromTo(
    '.scroll-indicator',
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.8, repeat: -1, yoyo: true },
    '-=0.4'
  )
}
