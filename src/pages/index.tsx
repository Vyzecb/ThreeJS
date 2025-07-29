// src/pages/index.tsx
import React, { useEffect } from 'react'
import * as THREE from 'three'
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

    // 1) Hero intro animatie
    introAnimation()

    // 2) Laad vertex & fragment shaders
    let shaderMaterial: THREE.ShaderMaterial
    Promise.all([
      fetch('/shaders/vertex.glsl').then((r) => r.text()),
      fetch('/shaders/fragment.glsl').then((r) => r.text()),
    ])
      .then(async ([vertexSrc, fragmentSrc]) => {
        // 3) Maak ShaderMaterial
        shaderMaterial = new THREE.ShaderMaterial({
          vertexShader: vertexSrc,
          fragmentShader: fragmentSrc,
          uniforms: {
            uColor1: { value: new THREE.Color(0.8, 0.7, 0.5) },
            uColor2: { value: new THREE.Color(1.0, 1.0, 1.0) },
            uTime:   { value: 0.0 },
          },
        })

        // 4) Laad jouw earth.glb
        const earth = await loadModel('/models/earth.glb')
        // 5) Vervang elk mesh-materiaal door je shader-materiaal
        earth.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            ;(child as THREE.Mesh).material = shaderMaterial
          }
        })
        sceneManager.scene.add(earth)

        // 6) Override render-loop zodat uTime bijgewerkt wordt
        sceneManager.renderer.setAnimationLoop((time) => {
          shaderMaterial.uniforms.uTime.value = time * 0.001
          sceneManager.renderer.render(
            sceneManager.scene,
            sceneManager.camera
          )
        })
      })
      .catch((err) =>
        console.error('Fout bij shader/model laden:', err)
      )

    // 7) Voeg draaiend logo-object toe
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logo) => sceneManager.scene.add(logo))
      .catch(console.error)

    // 8) Scroll-animations voor secties onder de hero
    scrollAnimations()
  }, [sceneManager])

  return (
    <Layout>
      {/* Hero-sectie */}
      <div className="relative w-full h-screen md:h-[80vh]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
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
        className="section bg-secondary text-primary flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-playfair mb-4">
            Onze Missie
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Bij Luxe3D combineren we art-direction met cutting-edge webtechnologieën om
            een onvergetelijke gebruikerservaring te creëren, op elk apparaat.
          </p>
        </div>
        <div className="md:w-1/2 px-4">
          <div className="w-full h-64 bg-neutral-light rounded-lg shadow-md" />
        </div>
      </section>
    </Layout>
  )
}

export default Home
