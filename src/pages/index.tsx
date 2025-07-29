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

    // 1) Hero intro animatie (fade canvas, logo, letters, nav, indicator)
    introAnimation();

    // 2) Laad glTF-scène
    sceneManager
      .addModel('/models/luxury-scene.glb')
      .catch(console.error);

    // 3) Voeg een draaiend logo-object toe
    createFloatingLogo({ text: 'Luxe3D' })
      .then((logoMesh) => {
        sceneManager.scene.add(logoMesh);
      })
      .catch(console.error);

    // 4) Optioneel: scroll-animations voor secties onder de hero
    scrollAnimations();
  }, [sceneManager]);

  return (
    <Layout>
      <div className="relative w-full h-screen">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <Loader />
      </div>
    </Layout>
  );
};

export default Home;
