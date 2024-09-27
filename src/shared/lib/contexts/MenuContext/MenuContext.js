import { createContext } from 'react';

export const MenuContext = createContext({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  menuRef: null,
  toggleMenuRef: null,
});
