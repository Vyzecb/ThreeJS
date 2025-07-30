// src/pages/index.tsx
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '@/components/Layout'
import { useThreeScene } from '@/hooks/useThreeScene'
import { introAnimation } from '@/animations/introAnimation'
import { createFloatingLogo } from '@/scenes/Objects/FloatingLogo'
import { loadModel } from '@/scenes/Objects/ModelLoader'
import Loader from '@/components/Loader'
import ScrollIndicator from '@/components/ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

const HomeContent: React.FC = () => {
  const { canvasRef, sceneManager } = useThreeScene()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!sceneManager) return

    // 1) Hero intro
    introAnimation()

    // 2) Load earth model
    sceneManager
      .addModel('/models/earth.glb')
      .then(() => setLoading(false))
      .catch((e) => {
        console.error('Failed to load earth.glb', e)
        setLoading(false)
      })

    // 3) Floating logo
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logo) => sceneManager.scene.add(logo))
      .catch(console.error)

    // 4) Fade-up on scroll for everything with .fade-up
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=100px',     // fire when 100px into view
          toggleActions: 'play none none none',
          once: true,
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
      })
    })
  }, [sceneManager])

  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {loading && <Loader />}

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 fade-up">
          <h1 className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary drop-shadow-xl mb-4">
            Welkom bij <span className="text-accent">Luxe3D</span>
          </h1>
          <p className="text-secondary/80 leading-relaxed text-base sm:text-lg md:text-xl mb-8">
            Ervaar de toekomst van webdesign met interactieve 3D-scènes en vloeiende animaties.
          </p>
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 bg-accent text-secondary uppercase font-semibold rounded-full shadow-lg hover:bg-accent/90 transition"
            onClick={() =>
              document
                .querySelector('#intro-section')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Ontdek Meer
          </button>
        </div>

        <ScrollIndicator />
      </div>

      {/* Onze Missie */}
      <section
        id="intro-section"
        className="py-16 sm:py-20 bg-secondary text-primary"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">
              Onze Missie
            </h2>
            <p className="text-neutral-dark leading-relaxed text-base sm:text-lg">
              Bij Luxe3D combineren we art-direction met cutting-edge webtechnologieën om
              een onvergetelijke, state-of-the-art beleving voor uw merk te creëren—op elk apparaat.
            </p>
          </div>
          <div className="fade-up">
            <div className="w-full h-64 sm:h-80 bg-neutral-light rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg"
                alt="3D scene preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ons Team */}
      <section className="py-16 sm:py-20 bg-white text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-8 text-center text-primary fade-up">
            Ons Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Alice', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
              { name: 'Bob', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
              { name: 'Carol', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
            ].map(({ name, img }) => (
              <div
                key={name}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center fade-up"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-accent">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-xl mb-1 text-primary">{name}</h4>
                <p className="text-sm text-gray-600 text-center">
                  3D-Art & Webmagic Specialist
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Client‐side only to skip hydration
export default dynamic(() => Promise.resolve(HomeContent), {
  ssr: false,
})