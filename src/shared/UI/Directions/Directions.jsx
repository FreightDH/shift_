import { cn } from '@/shared/lib';

import handImg from './assets/hand.png';
import cl from './Directions.module.scss';

export const Directions = () => {
  return (
    <div className={cl.directions}>
      <div className={cn(cl.directions__body, {}, ['bg__grey'])}>
        <div className={cl.directions__img}>
          <img alt="hand" src={handImg} />
        </div>
        <p className={cl.directions__text}>
          <span>Сферы:</span>
        </p>
        <p className={cl.directions__text}>
          <span>Frontend - </span> React, Angular, Vue, верстка
        </p>
        <p className={cl.directions__text}>
          <span>Backend -</span> Golang, Python, PHP
        </p>
      </div>
      <div className={cl.directions__plans}>Но планируем расширяться!</div>
    </div>
  );
};
