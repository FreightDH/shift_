import { cooperate, study } from './assets';

import cl from './Badges.module.scss';

export const StudyBadge = () => {
  return (
    <span className={cl.badge}>
      <img alt="study-image" src={study} />
      <span>Учиться</span>
    </span>
  );
};

export const CooperateBadge = () => {
  return (
    <span className={cl.badge}>
      <img alt="study-image" src={cooperate} />
      <span>Сотрудничать</span>
    </span>
  );
};
