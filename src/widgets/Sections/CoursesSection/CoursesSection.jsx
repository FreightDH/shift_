import { CourseCard } from '@/shared/UI/CourseCard';

import { arrowIcon } from './assets';
import { coursesInfo } from './coursesInfo';
import cl from './CoursesSection.module.scss';

export const CoursesSection = () => {
  return (
    <section className={cl.courses}>
      <div className="courses__container" style={{ position: 'relative', zIndex: 2 }}>
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
            <img alt="arrow-image" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
