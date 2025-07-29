// Fragment Shader
precision highp float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

// Kleuren-Uniforms, te vullen vanuit Three.js
uniform vec3 uColor1;  // Bijvoorbeeld vec3(0.8,0.7,0.5)
uniform vec3 uColor2;  // Bijvoorbeeld vec3(1.0,1.0,1.0)
uniform float uTime;   // Animeren indien gewenst

void main() {
  // Simple gradient mix op basis van UV.y en een kleine time‐oscillatie
  float wave = 0.1 * sin( uTime + vUv.x * 10.0 );
  vec3 baseCol = mix( uColor1, uColor2, vUv.y + wave );

  // Fresnel‐effect: glanzende rand
  float fresnel = pow( 1.0 - dot( normalize(vNormal), normalize(vViewPosition) ), 3.0 );
  vec3 finalColor = baseCol + fresnel * 0.2;

  gl_FragColor = vec4( finalColor, 1.0 );
}
