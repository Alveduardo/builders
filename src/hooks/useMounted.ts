import { useEffect, useRef, RefObject } from 'react';

/**
 * Hook used to know if the component is has been mounted.
 *
 * @returns {RefObject<boolean>} Returns a boolean for whether the component is mounted or not.
 */

const useMounted = (): RefObject<boolean> => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
};

export default useMounted;
