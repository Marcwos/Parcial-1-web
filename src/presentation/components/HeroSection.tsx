'use client';

import React from 'react';

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  backgroundImage = '/hero-adoption-bg.jpg' 
}) => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
        }}
      />
      
      {/* Alternative background if no image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-400 to-blue-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
          {title}
        </h1>
      </div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black opacity-20 z-5" />
    </section>
  );
};

export default HeroSection;