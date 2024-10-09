import { forwardRef } from 'react';

import { cn } from '@/shared/lib';
import { Slider } from '@/shared/UI/Slider';
import { ArrowSmall } from '@/shared/UI/Arrow';

import { mentorsInfo } from './mentorsInfo';
import cl from './MentorsSection.module.scss';

export const MentorsSection = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={cn(cl.mentors, {}, ['animation'])}>
      <div className="mentors__container">
        <div className={cl.mentors__body}>
          <h3 className={cl.mentors__title}>Наши менторы</h3>
          <Slider mentorsInfo={mentorsInfo} />
          <ArrowSmall style={{ marginTop: '35px' }} />
        </div>
      </div>
    </section>
  );
});
