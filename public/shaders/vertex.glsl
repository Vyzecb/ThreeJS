// Vertex shader placeholder
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
