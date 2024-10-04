import { Slider } from '@/shared/UI/Slider';

import { arrowIcon } from './assets';
import { mentorsInfo } from './mentorsInfo';
import cl from './MentorsSection.module.scss';

export const MentorsSection = () => {
  return (
    <section className={cl.mentors}>
      <div className="mentors__container">
        <div className={cl.mentors__body}>
          <h3 className={cl.mentors__title}>Наши менторы</h3>
          <div className={cl.mentors__slider}></div>
          <Slider mentorsInfo={mentorsInfo} />
          <div className={cl.mentors__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
