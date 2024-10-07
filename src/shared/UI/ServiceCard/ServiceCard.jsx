import { cn } from '@/shared/lib';

import lightningIcon from './assets/lightning.svg';
import cl from './ServiceCard.module.scss';

export const ServiceStandardCard = ({ children }) => {
  return (
    <li className={cl.service}>
      <div className={cl.service__icon}>
        <img alt="lightning-icon" src={lightningIcon} />
      </div>
      <div className={cl.service__title}>Стандартный план</div>
      {children}
    </li>
  );
};

export const ServiceAdvancedCard = ({ children }) => {
  return (
    <li className={cn(cl.service, {}, [cl.alternative])}>
      <div className={cn(cl.service__icon, {}, [cl.alternative])}>
        <img alt="lightning-icon" src={lightningIcon} />
      </div>
      <div className={cl.service__title}>Продвинутый план</div>
      {children}
    </li>
  );
};
