'use client';

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AdoptionInfoComponent from '../components/AdoptionInfo';
import { GetNavigationMenuUseCase } from '../../domain/use-cases/GetNavigationMenu';
import { GetAdoptionInfoUseCase } from '../../domain/use-cases/GetAdoptionInfo';
import { InMemoryNavigationRepository } from '../../infrastructure/interfaces/NavigationRepository';
import { InMemoryAdoptionRepository } from '../../infrastructure/interfaces/AdoptionRepository';

const AdoptionPage: React.FC = () => {
  // Dependency injection - en una aplicación real esto se haría con un container DI
  const navigationRepository = new InMemoryNavigationRepository();
  const adoptionRepository = new InMemoryAdoptionRepository();
  
  const getNavigationMenuUseCase = new GetNavigationMenuUseCase(navigationRepository);
  const getAdoptionInfoUseCase = new GetAdoptionInfoUseCase(adoptionRepository);
  
  // Obtener datos usando los use cases
  const navigationMenu = getNavigationMenuUseCase.execute();
  const adoptionInfo = getAdoptionInfoUseCase.execute();

  return (
    <div className="min-h-screen bg-white">
      <Header navigationMenu={navigationMenu} />
      <HeroSection title={adoptionInfo.subtitle} />
      <AdoptionInfoComponent adoptionInfo={adoptionInfo} />
    </div>
  );
};

export default AdoptionPage;