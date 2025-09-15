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
      petStories: [
        {
          id: 'luna',
          name: 'Luna',
          story: `Conoce a Luna, una perra mestiza de 3 años que llegó a nuestro refugio después de ser encontrada en las calles de Quito. Al principio era tímida y desconfiada, pero con paciencia y amor, Luna comenzó a mostrar su verdadera personalidad: juguetona, cariñosa y extremadamente leal. 

Luna había perdido la confianza en los humanos, pero poco a poco aprendió que no todos son iguales. Le encanta jugar con pelotas, correr en el parque y recibir caricias en su barriga. Es perfecta para una familia que tenga tiempo para dedicarle y que entienda que adoptar no es solo brindar un hogar, sino comprometerse con una vida.

Hoy, Luna espera encontrar esa familia especial que le dé el amor y la estabilidad que merece. ¿Podrías ser tú quien le dé una segunda oportunidad?`,
          image: {
            src: '/animalbonito.jpg',
            alt: 'Luna, perra mestiza esperando adopción'
          }
        },
        {
          id: 'milo',
          name: 'Milo',
          story: `Milo es un gato naranja de 2 años con una personalidad única y encantadora. Llegó al refugio cuando era apenas un gatito, rescatado de un parque donde había sido abandonado junto con sus hermanos. Mientras sus hermanos encontraron hogar rápidamente, Milo se quedó esperando su oportunidad.

Es un gato extremadamente inteligente y curioso. Le fascina observar por la ventana, especialmente a los pájaros, y tiene una habilidad especial para abrir puertas y cajones. Milo es muy sociable con otros gatos y disfruta de las caricias, aunque al principio puede mostrarse un poco reservado.

Su ronroneo es contagioso y su forma de mostrar afecto es única: siempre busca dormir cerca de las personas que considera su familia. Milo necesita una familia paciente que entienda que cada gato tiene su tiempo para adaptarse, pero que una vez que lo haga, será el compañero más leal y cariñoso.`,
          image: {
            src: '/animalbonito2.jpg',
            alt: 'Milo, gato naranja buscando hogar'
          }
        },
        {
          id: 'bella',
          name: 'Bella',
          story: `Bella es una perra golden retriever de 5 años con una historia de superación increíble. Llegó al refugio después de ser rescatada de una situación de maltrato, lo que la había dejado muy asustada y desconfiada hacia los humanos.

Con el trabajo dedicado de nuestros voluntarios y veterinarios, Bella ha logrado recuperar su confianza y ahora muestra la personalidad dulce y gentil característica de su raza. Es excelente con niños y otros perros, y tiene una paciencia infinita. Su cola nunca deja de moverse cuando ve a las personas que ama.

Bella ya no es una cachorra, pero eso la convierte en la compañera perfecta para una familia que busca un perro tranquilo, educado y lleno de amor para dar. Conoce comandos básicos, camina perfectamente con correa y lo único que necesita es una familia que le demuestre que no todos los humanos son iguales.

Su sueño es tener un jardín donde pueda correr libremente y una familia que la ame tanto como ella está dispuesta a amar.`,
          image: {
            src: '/animalbonito3.jpg',
            alt: 'Bella, golden retriever en busca de una segunda oportunidad'
          }
        }
      ],
      image: {
        src: '/animalbonito.jpg',
        alt: 'Animales esperando adopción'
      }
    };
  }
}