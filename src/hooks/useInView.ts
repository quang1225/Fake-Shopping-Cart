import { useState, useEffect, RefObject } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInView = (ref: RefObject<any>, options = {} as Options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<any>(null);

  useEffect(() => {
    const callback = (entries: any) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer?.disconnect();

    if (ref.current) {
      const _observer = new IntersectionObserver(callback, options);
      _observer.observe(ref.current);
      setObserver(_observer);
    }

    return () => {
      observer?.disconnect();
    };
  }, [ref.current, options.root, options.rootMargin, options.threshold]);

  return isIntersecting;
};
