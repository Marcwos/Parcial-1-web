import { AdoptionInfo } from '../entities/Adoption';

export interface AdoptionRepository {
  getAdoptionInfo(): AdoptionInfo;
}

export class GetAdoptionInfoUseCase {
  constructor(private adoptionRepository: AdoptionRepository) {}

  execute(): AdoptionInfo {
    return this.adoptionRepository.getAdoptionInfo();
  }
}