// src/scenes/Objects/ModelLoader.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 * Laadt een glTF-/GLB-model zonder Draco-compressie.
 * Zet je .glb in public/models/ en verwijs hier daarnaar.
 */
export const loadModel = (url: string): Promise<THREE.Group> =>
  new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        gltf.scene.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        });
        resolve(gltf.scene);
      },
      undefined,
      (err) => reject(err)
    );
  });
