import { useEffect, useMemo, useRef } from 'react';

import { debounce } from '../utils';

export const useDebounce = (callback, time = 1000) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, time);
  }, []);

  return debouncedCallback;
};