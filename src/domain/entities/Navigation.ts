export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavigationMenu {
  items: NavigationItem[];
  logo: {
    src: string;
    alt: string;
    href: string;
  };
}