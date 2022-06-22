import { useRef } from 'react';

/**
 * Hook used to trigger the callback before the component is mounted.
 *
 * @param {Function} callback Imperative function that can return a cleanup function.
 * @returns {ReturnType} Generic hook return
 */

const useConstructor = <ReturnType>(callback: () => ReturnType | void = () => { }): ReturnType => {
    const result = useRef<ReturnType | void>();
    const hasBeenCalled = useRef<boolean>(false);
    if (hasBeenCalled.current) return result.current as ReturnType;
    hasBeenCalled.current = true;
    result.current = callback();
    return result.current as ReturnType;
};

export default useConstructor;