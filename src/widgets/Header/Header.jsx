import { Link } from 'react-router-dom';

import { BurgerMenu } from '@/shared/UI/BurgerMenu';

import cl from './Header.module.scss';

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}>
          <div className={cl.header__logo}>
            <Link to="/">Шифт_</Link>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
