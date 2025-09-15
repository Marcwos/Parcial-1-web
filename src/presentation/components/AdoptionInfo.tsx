'use client';

import React from 'react';
import Image from 'next/image';
import { AdoptionInfo } from '../../domain/entities/Adoption';

interface AdoptionInfoComponentProps {
  adoptionInfo: AdoptionInfo;
}

const AdoptionInfoComponent: React.FC<AdoptionInfoComponentProps> = ({ adoptionInfo }) => {
  return (
    <section className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg font-black">
              <Image
                src="/animalbonito2.jpg"
                alt={adoptionInfo.image.alt}
                width={300}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              
                </div>

                {/* Historias de mascotas */}
                {adoptionInfo.petStories && adoptionInfo.petStories.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Historias de Adopción</h3>
                    {adoptionInfo.petStories.map((petStory) => (
                      <div key={petStory.id} className="bg-green-50 p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                        <h4 className="text-xl font-bold text-green-800 mb-3">Historia de {petStory.name}</h4>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {petStory.story}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
    </section>
  );
};

export default AdoptionInfoComponent;