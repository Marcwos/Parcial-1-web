export interface AdoptionInfo {
  title: string;
  subtitle: string;
  description: string;
  responsibilityText: string;
  detailedInfo: string;
  source: string;
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