import { useEffect, RefObject } from 'react';

/**
 * A generic hook for adding event listeners to any target.
 *
 * @param eventName - Naam van het event (bv. 'resize', 'scroll', 'pointermove')
 * @param handler - Callback die het event verwerkt
 * @param elementRef - Optioneel: Ref naar het element, default window
 */
export const useEventListener = <K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  elementRef?: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    const target: HTMLElement | Window = elementRef?.current ?? window;
    if (!target || !target.addEventListener) return;

    const eventListener = (event: Event) => handler(event as HTMLElementEventMap[K]);
    target.addEventListener(eventName, eventListener as EventListener);

    return () => {
      target.removeEventListener(eventName, eventListener as EventListener);
    };
  }, [eventName, handler, elementRef]);
};
