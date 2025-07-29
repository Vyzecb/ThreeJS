// src/pages/index.tsx
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import * as THREE from 'three'
import Layout from '@/components/Layout'
import { useThreeScene } from '@/hooks/useThreeScene'
import { introAnimation } from '@/animations/introAnimation'
import { scrollAnimations } from '@/animations/scrollAnimations'
import { loadModel } from '@/scenes/Objects/ModelLoader'
import { createFloatingLogo } from '@/scenes/Objects/FloatingLogo'
import Loader from '@/components/Loader'

// --- Dit is je “page component”, maar NIET direct geëxporteerd ---
const HomeContent: React.FC = () => {
  const { canvasRef, sceneManager } = useThreeScene()

  useEffect(() => {
    if (!sceneManager) return

    // 1) Hero intro animatie
    introAnimation()

    // 2) Laad je earth.glb
    sceneManager
      .addModel('/models/earth.glb')
      .catch((err) => console.error('Kon earth.glb niet laden:', err))

    // 3) Voeg draaiend logo toe
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logo) => sceneManager.scene.add(logo))
      .catch(console.error)

    // 4) Activeer je scroll-animaties
    scrollAnimations()
  }, [sceneManager])

  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full h-screen md:h-[80vh]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <Loader />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-secondary drop-shadow-lg">
            Welkom bij de Luxe 3D Ervaring
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg text-secondary/90">
            Ervaar de toekomst van webdesign met interactieve 3D-scènes en vloeiende animaties.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-accent text-secondary rounded-full shadow-lg hover:opacity-90 transition"
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

      {/* Introductie-sectie */}
      <section
        id="intro-section"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-primary flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl sm:text-4xl font-playfair mb-4">Onze Missie</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Bij Luxe3D combineren we art-direction met cutting-edge webtechnologieën om
            een onvergetelijke gebruikerservaring te creëren, op elk apparaat.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 bg-neutral-light rounded-lg shadow-md" />
        </div>
      </section>
    </Layout>
  )
}

// --- En dit is de export, met SSR uitgeschakeld ---
export default dynamic(
  () => Promise.resolve(HomeContent),
  { ssr: false }
)
