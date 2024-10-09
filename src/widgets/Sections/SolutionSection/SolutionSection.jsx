import { forwardRef } from 'react';

import { cn } from '@/shared/lib';
import { ArrowSmall } from '@/shared/UI/Arrow';
import { StudyDirections } from '@/shared/UI/StudyDirections';

import { codingImg, markupIcon } from './assets';
import cl from './SolutionSection.module.scss';

export const SolutionStudySection = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={cn(cl.solution, {}, ['animation'])}>
      <div className={cn(cl.solution__blur, {}, ['blur', 'blur--green'])}></div>
      <div className="solution__container">
        <div className={cl.solution__body}>
          <div className={cl.message}>
            <div className={cl.message__notification}>У вас новое сообщение:</div>
            <div className={cl.message__body}>
              <div className="rectangle bg__grey">Шифт_</div>
              <div className={cn(cl.message__text, {}, ['bg__grey'])}>
                Наш проект был создан, чтобы решить именно эту проблему
                <span>Недавно</span>
              </div>
            </div>
          </div>
          <div className={cl.solution__content}>
            <div className={cl.advantages}>
              <div className={cl.advantages__item}>
                <div className={cl.advantages__img}>
                  <img alt="markup-icon" src={markupIcon} />
                </div>
                <p>
                  На стажировках за вами закреплен ментор, который будет вас обучать и помогать выполнять все
                  рабочие задачи - ваша нянька
                </p>
              </div>
              <div className={cl.advantages__item}>
                <div className={cl.advantages__img}>
                  <img alt="markup-icon" src={markupIcon} />
                </div>
                <p>Тщательно отбираем самые интересные венчурные стартапы</p>
              </div>
            </div>
            <div className={cl.solution__image}>
              <img alt="coding" src={codingImg} />
            </div>
          </div>
          <ArrowSmall />
        </div>
      </div>
    </section>
  );
});

export const SolutionCooperateSection = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={cn(cl.solution, {}, ['animation'])}>
      <div className={cn(cl.solution__blur, {}, ['blur', 'blur--green'])}></div>
      <div className="solution__container">
        <div className={cl.solution__body}>
          <div className={cl.solution__header}>
            <div className={cl.message}>
              <div className={cl.message__notification}>У вас новое сообщение:</div>
              <div className={cl.message__body}>
                <div className="rectangle bg__grey">Шифт_</div>
                <div className={cn(cl.message__text, {}, ['bg__grey'])}>
                  Наш проект был создан, чтобы решить именно эту проблему
                  <span>Недавно</span>
                </div>
              </div>
            </div>
            <StudyDirections />
          </div>
          <div className={cl.solution__content}>
            <div className={cl.advantages}>
              <div className={cl.advantages__item}>
                <div className={cl.advantages__img}>
                  <img alt="markup-icon" src={markupIcon} />
                </div>
                <p>
                  Готовим человека под ваши потребности, сами занимаемся оформлением, платим налоги и
                  консультируем вас при необходимости
                </p>
              </div>
              <div className={cl.advantages__item}>
                <div className={cl.advantages__img}>
                  <img alt="markup-icon" src={markupIcon} />
                </div>
                <p>На каждого стажера своя нянька, наши стажеры самостоятельны, мы сами их обучаем</p>
              </div>
            </div>
            <div className={cl.solution__image}>
              <img alt="coding" src={codingImg} />
            </div>
          </div>
          <ArrowSmall />
        </div>
      </div>
    </section>
  );
});
