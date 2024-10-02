import { cn } from '@/shared/lib';
import { Directions } from '@/shared/UI/Directions';

import { arrowIcon, codingImg, markupIcon } from './assets';
import cl from './SolutionSection.module.scss';

export const SolutionStudySection = () => {
  return (
    <section className={cl.solution}>
      <div className={cn(cl.solution__blur, {}, ['blur', 'blur--green'])}></div>
      <div className="solution__container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={cl.solution__body}>
          <div className={cl.message}>
            <div className={cl.message__notification}>У вас новое сообщение:</div>
            <div className={cl.message__body}>
              <div className={cn(cl.message__from, {}, ['bg__grey'])}>Шифт_</div>
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
          <div className={cl.solution__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const SolutionCooperateSection = () => {
  return (
    <section className={cl.solution}>
      <div className={cn(cl.solution__blur, {}, ['blur', 'blur--green'])}></div>
      <div className="solution__container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={cl.solution__body}>
          <div className={cl.solution__header}>
            <div className={cl.message}>
              <div className={cl.message__notification}>У вас новое сообщение:</div>
              <div className={cl.message__body}>
                <div className={cn(cl.message__from, {}, ['bg__grey'])}>Шифт_</div>
                <div className={cn(cl.message__text, {}, ['bg__grey'])}>
                  Наш проект был создан, чтобы решить именно эту проблему
                  <span>Недавно</span>
                </div>
              </div>
            </div>
            <Directions />
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
          <div className={cl.solution__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
