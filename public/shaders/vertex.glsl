// Vertex Shader
precision mediump float;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  // Pass UV and normal to fragment
  vUv = uv;
  vNormal = normalize( normalMatrix * normal );

  // Compute view‐space position
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vViewPosition = -mvPosition.xyz;

  // Standard transform
  gl_Position = projectionMatrix * mvPosition;
}
