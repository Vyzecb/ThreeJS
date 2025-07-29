import { useRef, useEffect, useState } from 'react'
import { SceneManager } from '@/scenes/SceneManager'
import type * as THREE from 'three'

export interface ThreeSceneReturn {
  canvasRef: React.RefObject<HTMLCanvasElement>
  sceneManager: SceneManager | null
}

export const useThreeScene = (): ThreeSceneReturn => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [sceneManager, setSceneManager] = useState<SceneManager | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Maak de manager aan en exposeer hem via state
    const manager = new SceneManager(canvas)
    setSceneManager(manager)

    // Voeg basislichten toe
    manager.addLights()

    // Start de render-loop
    manager.start()

    // Resize-handler
    const onResize = () => manager.onWindowResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      manager.dispose()
    }
  }, [])

  return { canvasRef, sceneManager }
}
