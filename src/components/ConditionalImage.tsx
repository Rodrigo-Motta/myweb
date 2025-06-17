
import { useState } from 'react';

interface ConditionalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ConditionalImage = ({ src, alt, className, fallbackSrc }: ConditionalImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      // Try fallback image
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsLoaded(false);
      img.src = fallbackSrc;
    }
  };

  // Don't render anything if image failed to load and no fallback loaded
  if (hasError && !fallbackSrc) {
    return null;
  }

  return (
    <img
      src={hasError && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      className={className}
      onLoad={handleLoad}
      onError={handleError}
      style={{ display: isLoaded ? 'block' : 'none' }}
    />
  );
};

export default ConditionalImage;
