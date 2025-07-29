// src/pages/index.tsx
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { useThreeScene } from '@/hooks/useThreeScene'
import { introAnimation } from '@/animations/introAnimation'
import { scrollAnimations } from '@/animations/scrollAnimations'
import { loadModel } from '@/scenes/Objects/ModelLoader'
import { createFloatingLogo } from '@/scenes/Objects/FloatingLogo'
import Loader from '@/components/Loader'
import ScrollIndicator from '@/components/ScrollIndicator'

const HomeContent: React.FC = () => {
  const { canvasRef, sceneManager } = useThreeScene()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!sceneManager) return

    // 1) Hero intro animatie
    introAnimation()

    // 2) Laad Earth GLB
    sceneManager
      .addModel('/models/earth.glb')
      .then(() => setLoading(false))
      .catch((err) => {
        console.error('Kon earth.glb niet laden:', err)
        setLoading(false)
      })

    // 3) Draaiend logo
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logo) => sceneManager.scene.add(logo))
      .catch(console.error)

    // 4) Scroll‐animations onder de hero
    scrollAnimations()
  }, [sceneManager])

  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Three.js canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Loader: toont zolang loading==true */}
        {loading && <Loader />}

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary drop-shadow-xl">
              Welkom bij <span className="text-accent">Luxe3D</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-secondary/80 leading-relaxed">
              Ervaar de toekomst van webdesign met interactieve 3D-scènes en vloeiende animaties.
            </p>
            <button
              className="mt-8 inline-block px-6 py-3 sm:px-8 sm:py-4 bg-accent text-secondary uppercase font-semibold rounded-full shadow-lg hover:bg-accent/90 transition"
              onClick={() =>
                document
                  .querySelector('#intro-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ontdek Meer
            </button>
          </div>
        </div>

        {/* Scroll-indicator */}
        <ScrollIndicator />
      </div>

      {/* Intro Sectie */}
      <section
        id="intro-section"
        className="py-16 sm:py-20 bg-secondary text-primary"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4">
              Onze Missie
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-dark">
              Bij Luxe3D combineren we art-direction met cutting-edge webtechnologieën om
              een onvergetelijke, state-of-the-art beleving voor uw merk te creëren—op elk apparaat.
            </p>
          </div>
          <div>
            <div className="w-full h-64 sm:h-80 bg-neutral-light rounded-lg shadow-lg overflow-hidden">
              <img
                src="images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg"
                alt="3D scene preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Sectie */}
<section className="py-16 sm:py-20 bg-secondary text-primary">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
      Ons Team
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: 'Alice', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
        { name: 'Bob',   img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg'   },
        { name: 'Carol', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
      ].map(({ name, img }) => (
        <div
          key={name}
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
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

// Force client-side only to avoid hydration errors
export default dynamic(() => Promise.resolve(HomeContent), {
  ssr: false,
})
