import { NavigationRepository } from '../../domain/use-cases/GetNavigationMenu';
import { NavigationMenu } from '../../domain/entities/Navigation';

export class InMemoryNavigationRepository implements NavigationRepository {
  getNavigationMenu(): NavigationMenu {
    return {
      logo: {
        src: '/pae-logo.png',
        alt: 'PAE - Protección Animal Ecuador',
        href: '/'
      },
      items: [
        { id: 'donaciones', label: 'DONACIONES', href: '/donaciones' },
        { id: 'sorteo', label: 'SORTEO ANIMAL', href: '/sorteo' },
        { id: 'adopcion', label: 'ADOPCIÓN', href: '/adopcion' },
        { id: 'quienes-somos', label: 'QUIENES SOMOS', href: '/quienes-somos', hasDropdown: true },
        { id: 'servicios', label: 'SERVICIOS', href: '/servicios', hasDropdown: true },
        { id: 'campanas', label: 'CAMPAÑAS', href: '/campanas', hasDropdown: true },
        { id: 'programas', label: 'PROGRAMAS', href: '/programas', hasDropdown: true },
        { id: 'contacto', label: 'CONTACTO', href: '/contacto' }
      ]
    };
  }
}