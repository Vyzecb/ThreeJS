import { useRef, useEffect, MutableRefObject } from 'react';
import * as THREE from 'three';
import { SceneManager } from '@/scenes/SceneManager';

interface ThreeScene {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  sceneManager: SceneManager | null;
}

/**
 * Hook voor initialisatie van een Three.js-scene + render-loop.
 * @returns refs en SceneManager-instance voor verdere interactie.
 */
export const useThreeScene = (): ThreeScene => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // SCENE MANAGER opzetten
    const manager = new SceneManager(canvas);
    sceneManagerRef.current = manager;

    // Voeg basislicht toe
    const { ambient, point } = manager.addLights();
    manager.scene.add(ambient, point);

    // Start de render-loop
    manager.start();

    // Resizen
    const onResize = () => {
      manager.onWindowResize();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      manager.dispose();
    };
  }, []);

  return {
    canvasRef,
    sceneManager: sceneManagerRef.current,
  };
};
