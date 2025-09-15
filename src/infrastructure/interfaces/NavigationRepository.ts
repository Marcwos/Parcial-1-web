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
        { id: 'adopcion', label: 'ADOPCIÓN', href: '/adopcion' },
        { id: 'servicios', label: 'SERVICIOS', href: '/servicios', hasDropdown: true },
        { id: 'campanas', label: 'CAMPAÑAS', href: '/campanas', hasDropdown: true },
      ]
    };
  }
}