import { AdoptionRepository } from '../../domain/use-cases/GetAdoptionInfo';
import { AdoptionInfo } from '../../domain/entities/Adoption';

export class InMemoryAdoptionRepository implements AdoptionRepository {
  getAdoptionInfo(): AdoptionInfo {
    return {
      title: '¿Un nuevo miembro en la familia?',
      subtitle: 'Adopción',
      description: 'Adoptar un perro o un gato; traer un animal de familia a casa es ante todo',
      responsibilityText: 'UN ACTO DE RESPONSABILIDAD',
      detailedInfo: `"La Tenencia Responsable de animales se define como la condición bajo la cual el tutor de un perro o un gato acepta y se compromete a asumir una serie de deberes enfocados a satisfacer las necesidades físicas, psicológicas y ambientales del animal que adopta, así como la prevención de riesgos (potencial agresión, transmisión de enfermedades o daños a terceros) que este pueda generar a la comunidad o al medio ambiente, bajo el marco jurídico de la legislación pertinente".`,
      source: '1ERA REUNIÓN LATINOAMERICANA DE EXPERTOS EN TENENCIA RESPONSABLE DE MASCOTAS Y CONTROL DE POBLACIONES RÍO, 2003',
      image: {
        src: '/cat-adoption.jpg',
        alt: 'Gato esperando adopción'
      }
    };
  }
}