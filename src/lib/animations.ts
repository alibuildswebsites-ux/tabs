import type { gsap as GSAPType } from 'gsap'

export const fadeUpFrom = {
  opacity: 0,
  y: 24,
}

export const fadeUpTo = {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: 'power2.out',
}

export const staggerFadeUp = (stagger = 0.15) => ({
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: 'power2.out',
  stagger,
})

export const scrollRevealConfig = {
  trigger: undefined as string | Element | undefined,
  start: 'top 85%',
  toggleActions: 'play none none none',
}

export function buildScrollReveal(
  gsap: typeof GSAPType,
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger,
  trigger: string | Element,
  targets: string | Element | NodeList,
  stagger = 0.15
) {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger,
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}
