import type { SceneManager } from '@/scenes/SceneManager';
import type { HoverOptions } from '@/animations/hoverEffects';

/**
 * Return‐type voor de useThreeScene hook.
 */
export interface ThreeSceneReturn {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  sceneManager: SceneManager | null;
}

/**
 * Context‐props voor theming.
 */
export interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

/**
 * Exporteer hover‐opties voor hergebruik.
 */
export type { HoverOptions };
