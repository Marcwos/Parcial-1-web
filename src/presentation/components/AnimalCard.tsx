import React from 'react';
import Image from 'next/image';

interface AnimalCardProps {
  name: string;
  story: string;
  imageSrc: string;
  imageAlt?: string;
}

// Card inspirado en Material Tailwind usando solo Tailwind CSS
const AnimalCard: React.FC<AnimalCardProps> = ({ name, story, imageSrc, imageAlt = name }) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-white border border-gray-100">
      {/* Header */}
      <div className="h-64 w-full relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Body */}
      <div className="p-5 text-center">
        <h4 className="text-xl font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-5 whitespace-pre-line">
          {story}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-center gap-4">
        <a href="#adoptar" className="text-green-600 hover:text-green-700 font-semibold">Adoptar</a>
        <span className="text-gray-300">•</span>
        <a href="#compartir" className="text-blue-600 hover:text-blue-700 font-semibold">Leer más</a>
      </div>
    </div>
  );
};

export default AnimalCard;
