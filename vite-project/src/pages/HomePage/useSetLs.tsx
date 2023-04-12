import { useRef, useEffect } from 'react';

export const useSetLS = (key: string, value: string) => {
  const setValue = useRef(value);
  useEffect(() => {
    return () => {
      localStorage.setItem(key, setValue.current);
    };
  }, [key]);
  useEffect(() => {
    setValue.current = value;
  }, [value]);
};
