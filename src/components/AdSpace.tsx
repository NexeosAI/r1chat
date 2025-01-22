import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AdSpaceProps {
  position: 'header' | 'sidebar' | 'content' | 'footer';
  size: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ position, size }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [width, height] = size.split('x').map(Number);

  return (
    <div
      ref={ref}
      className="bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-8"
      style={{ width: '100%', maxWidth: `${width}px`, height: `${height}px` }}
    >
      {inView && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">Advertisement</p>
          <p className="text-xs">{size}</p>
        </div>
      )}
    </div>
  );
};