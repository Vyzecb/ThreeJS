/**
 * Linear interpolatie tussen twee getallen.
 * @param start - beginwaarde
 * @param end - eindwaarde
 * @param t - interpolatie‐factor tussen 0 en 1
 * @returns lerp‐waarde
 */
export const lerp = (
  start: number,
  end: number,
  t: number
): number => start * (1 - t) + end * t;
