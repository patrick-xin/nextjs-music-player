import { RefObject, useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

function useEventListener<K extends keyof WindowEventMap>(
  _eventName: K,
  _handler: (_event: WindowEventMap[K]) => void
): void;
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  _eventName: K,
  _handler: (_event: HTMLElementEventMap[K]) => void,
  _element: RefObject<T>
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (
    _event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default useEventListener;
