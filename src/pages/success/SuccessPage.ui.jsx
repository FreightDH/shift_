import { cn } from '@/shared/lib';

import markIcon from './assets/mark.svg';
import cl from './SuccessPage.module.scss';

export const SuccessPage = () => {
  return (
    <div className={cl.success}>
      <div className={cn(cl.success__square, {}, ['square', 'bg__grey'])}></div>
      <div className={cl.success__content}>
        <div className={cl.success__icon}>
          <img alt="mark-icon" src={markIcon} />
        </div>
        <div className={cl.success__titles}>
          <h1 className={cl.success__title}>Заявление принято</h1>
          <h2 className={cl.success__subtitle}>Напишем Вам в течение дня</h2>
        </div>
      </div>
      <p className={cl.success__text}>Спасибо, что выбрали нас и заинтересовались идеей!</p>
    </div>
  );
};
