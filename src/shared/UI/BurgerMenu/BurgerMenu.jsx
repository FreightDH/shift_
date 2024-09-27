import { Link } from 'react-router-dom';

import cl from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  return (
    <div className={cl.menu}>
      <button className={cl.menu__icon} type="button">
        <span />
        <span />
        <span />
      </button>
      <nav className={cl.menu__body}>
        <ul className={cl.menu__list}>
          <li className={cl.menu__item}>
            <Link className={cl.menu__link} to="/mission">
              <span>Миссия</span>
            </Link>
          </li>
          <li className={cl.menu__item}>
            <Link className={cl.menu__link} to="/application">
              <span>Подача заявления</span>
            </Link>
          </li>
          <li className={cl.menu__item}>
            <Link className={cl.menu__link} to="/">
              <span>Оферта</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
