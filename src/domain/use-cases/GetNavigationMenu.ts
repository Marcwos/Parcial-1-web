import { NavigationMenu } from '../entities/Navigation';

export interface NavigationRepository {
  getNavigationMenu(): NavigationMenu;
}

export class GetNavigationMenuUseCase {
  constructor(private navigationRepository: NavigationRepository) {}

  execute(): NavigationMenu {
    return this.navigationRepository.getNavigationMenu();
  }
}