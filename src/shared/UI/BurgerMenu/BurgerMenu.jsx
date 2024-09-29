import { Link, useLocation } from 'react-router-dom';

import { useMenu } from '@/shared/lib/contexts/MenuContext';
import { cn } from '@/shared/lib';

import cl from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const { pathname } = useLocation();
  const { isMenuOpen, openMenu, closeMenu, menuRef, toggleMenuRef } = useMenu();

  const handleClick = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <div className={cl.menu}>
      <button
        ref={toggleMenuRef}
        className={cn(cl.menu__icon, { [cl.open]: isMenuOpen })}
        onClick={handleClick}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={cn(cl.menu__body, { [cl.open]: isMenuOpen })}>
        <ul ref={menuRef} className={cl.menu__list} onClick={closeMenu}>
          <li className={cl.menu__item}>
            <Link className={cn(cl.menu__link, { [cl.active]: pathname === '/mission' })} to="/mission">
              <span>Миссия</span>
            </Link>
          </li>
          <li className={cl.menu__item}>
            <Link
              to="/application"
              className={cn(cl.menu__link, {
                [cl.active]: ['/application', '/application/success'].includes(pathname),
              })}
            >
              <span>Подача заявления</span>
            </Link>
          </li>
          <li className={cl.menu__item}>
            <Link className={cn(cl.menu__link, { [cl.active]: pathname === '/' })} to="/">
              <span>Оферта</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
