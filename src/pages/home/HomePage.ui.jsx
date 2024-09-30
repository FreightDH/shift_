import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';

import { cooperate, study } from './assets';
import cl from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={cl.home}>
      <div className={cn(cl.home__square, {}, ['square', 'bg__grey'])}></div>
      <div className={cl.home__content}>
        <p className={cn(cl.home__hello, {}, ['bg__grey'])}>
          Привет! <br />
          Мы команда, которая поставляет стартапам прокаченных стажеров в IT с няньками - экспертами в сфере.
        </p>
        <div className={cn(cl.home__about, {}, ['bg__grey'])}>
          <p>Позволь нам рассказать про нас (не более 5 минут), но для начала выбери себя:</p>
          <div className={cl.home__choice}>
            <Link className={cl.choice__item} to="">
              <img alt="study-image" src={study} />
              <span>Учиться</span>
            </Link>
            <Link className={cl.choice__item} to="">
              <img alt="cooperate-image" src={cooperate} />
              <span>Сотрудничать</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
