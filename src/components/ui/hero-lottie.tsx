import Player from 'lottie-react';
import React from 'react';
import heroLottie from '@/assets/hero-lottie.json';

export function HeroLottie({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Player
        autoplay
        loop
        animationData={heroLottie}
        style={{ height: '320px', width: '320px', maxWidth: '100%' }}
      />
    </div>
  );
} 