import { cn } from '@/shared/lib';

import { arrowIcon, dislikeIcon, fireImg } from './assets';
import cl from './RelevanceSection.module.scss';

export const RelevanceSection = () => {
  return (
    <section className={cl.relevance}>
      <div className={cn(cl.relevance__blur, {}, ['blur', 'blur--red'])}></div>
      <div className={cn(cl.relevance__blur, {}, ['blur', 'blur--red'])}></div>
      <div className="relevance__container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={cl.relevance__body}>
          <div className={cl.header}>
            <div className={cl.header__image}>
              <img alt="fire" src={fireImg} />
            </div>
            <p className={cl.header__text}>
              Сейчас почти <span>невозможно</span> войти в IT без опыта, количество джунов зашкаливает, а
              компании боятся таких брать, потому что их нужно “нянчить”.
            </p>
          </div>
          <div className={cl.relevance__content}>
            <div className={cl.count}>
              <div className={cl.count__column}>
                <span>40</span>
                <p>Такое количество человек на вакансию без опыта</p>
              </div>
              <div className={cl.count__column}>
                <span>71%</span>
                <p>Столько человек при желании перейти в IT не могут прорваться</p>
              </div>
            </div>
            <div className={cl.problem}>
              <div className={cl.problem__item}>
                <img alt="dislike-icon" src={dislikeIcon} />
                <p>
                  После ВУЗов студенты не могут найти работу, знания <span>неактуальны</span>
                </p>
              </div>
              <div className={cl.problem__item}>
                <img alt="dislike-icon" src={dislikeIcon} />
                <p>
                  После онлайн-курсов людей <span>бояться</span> брать, потому что у них совсем нет опыта и
                  мало знания
                </p>
              </div>
            </div>
          </div>
          <div className={cl.relevance__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
