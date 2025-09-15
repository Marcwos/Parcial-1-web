export interface PetStory {
  id: string;
  name: string;
  story: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface AdoptionInfo {
  title: string;
  subtitle: string;
  description: string;
  responsibilityText: string;
  detailedInfo: string;
  source: string;
  petStories?: PetStory[];
  image: {
    src: string;
    alt: string;
  };
}

export interface AdoptionResponsibility {
  description: string;
  requirements: string[];
  benefits: string[];
}