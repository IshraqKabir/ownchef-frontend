import { useRef, useEffect } from 'react';

export const useIsMounted = () : boolean => {
    const isMountedRef = useRef(true);

    useEffect(() => {
        isMountedRef.current = false;
    }, []);
    return isMountedRef.current;
};