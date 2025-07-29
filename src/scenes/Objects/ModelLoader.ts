// src/scenes/Objects/ModelLoader.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 * Laadt een glTF-/GLB-model en retourneert de scene-groep.
 * Zorg dat je jouw earth.glb in public/models/ hebt geplaatst.
 */
export const loadModel = (url: string): Promise<THREE.Group> =>
  new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      url,
      (gltf) => {
        // Zorg dat alle meshes schaduwen casten/ontvangen
        gltf.scene.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        });
        resolve(gltf.scene);
      },
      undefined,
      (err) => {
        console.error('Fout bij laden model:', err);
        reject(err);
      }
    );
  });
