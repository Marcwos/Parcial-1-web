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
                src="/cat-adoption.svg"
                alt={adoptionInfo.image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-pae-green mb-4">
                {adoptionInfo.title}
              </h2>
              
              <div className="space-y-4 text-black">
                <p className="text-lg leading-relaxed">
                  {adoptionInfo.description}{' '}
                  <span className="font-bold text-pae-green-dark text-xl">
                    {adoptionInfo.responsibilityText}
                  </span>
                  .
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pae-green">
                  <p className="text-gray-800 leading-relaxed italic">
                    {adoptionInfo.detailedInfo}
                  </p>
                  
                  <footer className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      {adoptionInfo.source}
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionInfoComponent;