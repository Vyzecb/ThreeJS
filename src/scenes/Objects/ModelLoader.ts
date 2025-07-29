import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const draco = new DRACOLoader();
draco.setDecoderPath('/draco/');

const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

/**
 * Laadt een glTF-model (GLB/GLTF) en retourneert de scene-groep.
 */
export const loadModel = (url: string): Promise<THREE.Group> =>
  new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        // Zorg dat schaduwen kloppen
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
