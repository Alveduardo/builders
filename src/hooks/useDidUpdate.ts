import { useRef, useEffect } from 'react';

/**
 * Hook used to trigger callback with deps changes.
 *
 * @param {Function} callback Imperative function that can return a cleanup function.
 * @param {Array} deps Array of dependencies.
 */

const useDidUpdate = (callback: () => void = () => {}, deps: Array<any> = []) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
  }, deps); //eslint-disable-line
};

export default useDidUpdate;
