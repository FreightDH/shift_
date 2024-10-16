import { arrowIcon, arrowSmallIcon, arrowStepIcon } from './assets';
import cl from './Arrow.module.scss';
import { cn } from '@/shared/lib';

export const Arrow = () => {
  return (
    <div className={cl.arrow}>
      <img alt="arrow-icon" src={arrowIcon} />
    </div>
  );
};

export const ArrowSmall = ({ ...props }) => {
  return (
    <div className={cl.arrow__small} {...props}>
      <img alt="arrow-icon" src={arrowSmallIcon} />
    </div>
  );
};

export const ArrowStep = ({ mirrored }) => {
  return (
    <div className={cn(cl.arrow__step, { [cl.mirror]: mirrored })}>
      <img alt="arrow-icon" src={arrowStepIcon} />
    </div>
  );
};
