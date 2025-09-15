'use client';

import React from 'react';
import Image from 'next/image';
import { AdoptionInfo } from '../../domain/entities/Adoption';
import AnimalCard from './AnimalCard';

interface AdoptionInfoComponentProps {
  adoptionInfo: AdoptionInfo;
}

const AdoptionInfoComponent: React.FC<AdoptionInfoComponentProps> = ({ adoptionInfo }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          </div>
            {/* Historias de mascotas en Cards */}
            {adoptionInfo.petStories && adoptionInfo.petStories.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Animales en adopción</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adoptionInfo.petStories.map((pet) => (
                    <AnimalCard
                      key={pet.id}
                      name={pet.name}
                      story={pet.story}
                      imageSrc={pet.image.src}
                      imageAlt={pet.image.alt}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
x    </section>
  );
};

export default AdoptionInfoComponent;