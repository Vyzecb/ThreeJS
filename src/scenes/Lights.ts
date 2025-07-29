import * as THREE from 'three';

/**
 * Creëer een set van ambient + key lights voor luxueuze uitstraling.
 */
export const createLights = (): THREE.Light[] => {
  // Zachte ambient
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);

  // Warm key light
  const keyLight = new THREE.DirectionalLight(0xffddcc, 1);
  keyLight.position.set(5, 10, 7);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);

  // Koud fill light
  const fillLight = new THREE.PointLight(0xccccff, 0.3);
  fillLight.position.set(-5, 2, -3);

  return [ambient, keyLight, fillLight];
};
