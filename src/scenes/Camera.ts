import * as THREE from 'three';

/**
 * Factory voor een gestandaardiseerde PerspectiveCamera.
 */
export const createCamera = (): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 4);
  camera.lookAt(0, 1, 0);
  return camera;
};
