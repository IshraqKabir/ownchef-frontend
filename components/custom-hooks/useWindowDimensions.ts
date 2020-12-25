import { useState, useEffect } from 'react';

interface IWindowDimensions {
  width: number;
  height: number;
}

export default function useWindowDimensions(): IWindowDimensions {
  const hasWindow: boolean = typeof window !== 'undefined';

  function getWindowDimensions(): IWindowDimensions {
    const width: number = hasWindow ? window.innerWidth : null;
    const height: number = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}