import { useState, useMemo, useCallback, useRef } from 'react';

import { useScrollBlock, useClickOutside } from '@/shared/lib';

import { MenuContext } from './MenuContext';

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { blockScroll, allowScroll } = useScrollBlock();
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    blockScroll();
  }, [blockScroll]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    allowScroll();
  }, [allowScroll]);

  useClickOutside(menuRef, [toggleMenuRef], closeMenu);

  const value = useMemo(
    () => ({ isMenuOpen, openMenu, closeMenu, menuRef, toggleMenuRef }),
    [closeMenu, isMenuOpen, openMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
