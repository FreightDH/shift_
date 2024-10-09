import { forwardRef } from 'react';

import { cn } from '@/shared/lib';
import { CourseCard } from '@/shared/UI/CourseCard';
import { Arrow } from '@/shared/UI/Arrow';

import { coursesInfo } from './coursesInfo';
import cl from './CoursesSection.module.scss';

export const CoursesSection = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={cn(cl.courses, {}, ['animation'])}>
      <div className="courses__container">
        <div className={cl.courses__body}>
          <div className={cl.courses__header}>
            <h3 className={cl.courses__title}>Выбери, что по душе</h3>
            <div className={cl.courses__text}>
              От азов до первого места работы. Требование одно - знать базовый синтаксис любого языка.
            </div>
          </div>
          <ul className={cl.courses__cards}>
            {coursesInfo.map(({ id, ...coursesInfo }) => (
              <CourseCard key={id} courseInfo={coursesInfo} />
            ))}
          </ul>
          <p className={cl.courses__info}>
            После подачи заявки, созвонившись, мы расскажем про стажировки и темы, которые будут от вас
            требовать по итогу обучения у нас перед стажировкой
          </p>
          <div className={cl.courses__idea}>
            <span>А теперь про идею!</span>
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
});
