import { forwardRef } from 'react';

import { cn } from '@/shared/lib';
import { Arrow } from '@/shared/UI/Arrow';

import cl from './CompetitorSection.module.scss';

export const CompetitorSection = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={cn(cl.competitor, {}, ['animation'])}>
      <div className="competitor__container">
        <div className={cl.competitor__body}>
          <p className={cl.competitor__text}>
            Признаемся честно: мы не придумывали ничего катострофически нового, мы взяли обкатанную идею из
            США, которая там дала возможность сотням тысяч студентов найти первую работу и построить карьеру в
            IT. Теперь такая возможность есть и в России! Наш американский конкурент -{' '}
            <a href="folio.works" target="blank">
              folio.works
            </a>
          </p>
          <Arrow />
        </div>
      </div>
    </section>
  );
});
