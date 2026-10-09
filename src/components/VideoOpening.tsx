import React, { useRef, useEffect } from 'react';
import './VideoOpening.css';

export const VideoOpening: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay error:', err);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="fullbleed-video"
      src="/media/curio-intro.mp4"
      autoPlay
      muted
      playsInline
      controls={false}
      preload="auto"
    />
  );
};
