import { cn } from '@/shared/lib';

import { arrowAltIcon, arrowIcon } from './assets';
import cl from './CustomButton.module.scss';

export const CustomButton = ({ onClick, alternative, noBg, ...props }) => {
  return (
    <button
      className={cn(cl.btn, { [cl.alternative]: alternative, [cl.noBg]: noBg })}
      onClick={onClick}
      {...props}
    >
      <span>Подать заявку</span>
      <img alt="arrow-icon" src={alternative ? arrowAltIcon : arrowIcon} />
    </button>
  );
};
