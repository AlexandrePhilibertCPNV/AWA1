import { MutableRefObject, useLayoutEffect, useState } from "react";

/*
 * Taken from : https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
 *
 * returns the scroll `start` and `end` percentages
 * that are relative to the total document progress.
 */
export function useRefScrollProgress(
  ref: MutableRefObject<HTMLElement | null>
) {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      setStart(offsetTop / document.body.clientHeight);
      setEnd((offsetTop + rect.height) / document.body.clientHeight);
    }
  }, [ref]);

  return { start, end };
}
