import { cn } from '@/shared/lib';

import arrowIcon from './assets/arrow.svg';
import cl from './CustomButton.module.scss';

export const CustomButton = ({ onClick, className }) => {
  return (
    <button className={cn(cl.btn, {}, [className])} onClick={onClick}>
      <span>Подать заявку</span>
      <img alt="arrow-icon" src={arrowIcon} />
    </button>
  );
};
