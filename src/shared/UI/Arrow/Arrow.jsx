import { arrowIcon, arrowSmallIcon } from './assets';
import cl from './Arrow.module.scss';

export const Arrow = () => {
  return (
    <div className={cl.arrow}>
      <img alt="arrow-icon" src={arrowIcon} />
    </div>
  );
};

export const ArrowSmall = () => {
  return (
    <div className={cl.arrow__small}>
      <img alt="arrow-icon" src={arrowSmallIcon} />
    </div>
  );
};
