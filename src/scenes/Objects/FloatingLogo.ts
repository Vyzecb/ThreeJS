import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FloatingLogoOptions {
  text: string;
  size?: number;
  height?: number;
  color?: number;
  rotationSpeed?: number;
}

/**
 * Creëer een 3D tekstlogo dat langzaam draait en opduikt bij scroll.
 */
export const createFloatingLogo = async ({
  text,
  size = 1,
  height = 0.2,
  color = 0xffffff,
  rotationSpeed = 0.2,
}: FloatingLogoOptions): Promise<THREE.Mesh> => {
  const fontLoader = new FontLoader();
  const font = await new Promise<THREE.Font>((res, rej) =>
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', res, undefined, rej)
  );

  const geo = new TextGeometry(text, {
    font,
    size,
    height,
    curveSegments: 12,
  });
  geo.center();

  const mat = new THREE.MeshStandardMaterial({ color });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // Continu roteren
  gsap.to(mesh.rotation, {
    y: Math.PI * 2,
    duration: rotationSpeed * 20,
    repeat: -1,
    ease: 'none',
  });

  // Fade-in op scroll
  ScrollTrigger.create({
    trigger: mesh as any,
    start: 'top bottom',
    onEnter: () => gsap.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1, ease: 'back.out(1.7)' }),
  });

  return mesh;
};
