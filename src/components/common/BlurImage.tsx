import cn from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export const BlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        'duration-400 ease-in-out',
        isLoading ? 'rounded-md blur-2xl' : 'blur-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
