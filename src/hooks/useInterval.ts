import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * Hook used to trigger setInterval with updated values.
 *
 * @param {Function} callback Function called in SetInterval.
 * @param {number} delay Delay of setInterval.
 * @returns {MutableRefObject<number>} Returns clearInterval.
 */

const useInterval = (callback: () => void = () => {}, delay: number): MutableRefObject<number> => {
  const intervalRef = useRef<number>(0);
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    intervalRef.current = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(intervalRef.current);
  }, [delay]);

  return intervalRef;
};

export default useInterval;
