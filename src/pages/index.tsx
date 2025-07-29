import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useThreeScene } from '@/hooks/useThreeScene';
import { introAnimation } from '@/animations/introAnimation';
import { scrollAnimations } from '@/animations/scrollAnimations';
import { loadModel } from '@/scenes/Objects/ModelLoader';
import { createFloatingLogo } from '@/scenes/Objects/FloatingLogo';
import Loader from '@/components/Loader';

const Home: React.FC = () => {
  const { canvasRef, sceneManager } = useThreeScene();

  useEffect(() => {
    if (!sceneManager) return;

    // 1) Hero intro animatie
    introAnimation();

    // 2) Laad glTF-scène
    sceneManager
      .addModel('/models/luxury-scene.glb')
      .catch(console.error);

    // 3) Voeg draaiend logo-object toe
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logoMesh) => {
        sceneManager.scene.add(logoMesh);
      })
      .catch(console.error);

    // 4) Scroll-animations voor secties onder de hero
    scrollAnimations();
  }, [sceneManager]);

  return (
    <Layout>
      {/* Hero-sectie */}
      <div className="relative w-full h-screen md:h-[80vh]">
        {/* Three.js canvas full-screen */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Preloader */}
        <Loader />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair text-secondary drop-shadow-lg">
            Welkom bij de Luxe 3D Ervaring
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md text-secondary/90">
            Ervaar de toekomst van webdesign met interactieve 3D‐scènes en vloeiende animaties.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-accent text-secondary rounded-full shadow-lg hover:opacity-90 transition"
            onClick={() => {
              // scroll naar volgende sectie
              document
                .querySelector('#intro-section')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ontdek Meer
          </button>
        </div>
      </div>

      {/* Introductie-sectie onder de hero */}
      <section
        id="intro-section"
        className="section bg-secondary text-primary flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-playfair mb-4">
            Onze Missie
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Bij Luxe3D combineren we art‐direction met cutting‐edge webtechnologieën om
            een onvergetelijke gebruikerservaring te creëren, op elk apparaat.
          </p>
        </div>
        <div className="md:w-1/2 px-4">
          {/* Plaats hier een afbeelding of illustratie */}
          <div className="w-full h-64 bg-neutral-light rounded-lg shadow-md" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
