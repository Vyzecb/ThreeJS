// src/pages/index.tsx
import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useThreeScene } from '@/hooks/useThreeScene'
import { introAnimation } from '@/animations/introAnimation'
import { scrollAnimations } from '@/animations/scrollAnimations'
import { loadModel } from '@/scenes/Objects/ModelLoader'
import { createFloatingLogo } from '@/scenes/Objects/FloatingLogo'
import Loader from '@/components/Loader'

const Home: React.FC = () => {
  const { canvasRef, sceneManager } = useThreeScene()

  useEffect(() => {
    if (!sceneManager) return

    // start hero intro
    introAnimation()

    // laad earth model
    sceneManager
      .addModel('/models/earth.glb')
      .catch((err) => console.error('Kon earth.glb niet laden:', err))

    // draaiend logo
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logo) => sceneManager.scene.add(logo))
      .catch(console.error)

    // scroll animaties
    scrollAnimations()
  }, [sceneManager])

  return (
    <Layout>
      {/* Hero-sectie */}
      <div className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Three.js canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Loader */}
        <Loader />

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
                src="/assets/scene-preview.jpg"
                alt="3D scene preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Sectie */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-8">
            Ons Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Alice', 'Bob', 'Carol'].map((name) => (
              <div
                key={name}
                className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-neutral-light rounded-full overflow-hidden">
                  <img
                    src={`/assets/team/${name.toLowerCase()}.jpg`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-xl mb-2">{name}</h4>
                <p className="text-sm text-neutral-dark">
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

export default Home
