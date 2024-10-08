import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';

import {
  arrowIcon,
  cardBottom_1,
  cardBottom_2,
  cardBottom_3,
  cardTop_1,
  cardTop_2,
  cardTop_3,
  cardTop_4,
  step_1,
  step_2,
  step_3,
  step_4,
} from './assets';
import cl from './StepsSection.module.scss';

export const StepsSection = () => {
  return (
    <section className={cl.steps}>
      <div className="steps__container">
        <div className={cl.steps__body}>
          <div className={cl.steps__cards}>
            <div className={cl.card}>
              <div className={cl.card__title}>1 день</div>
              <div className={cn(cl.card__body, {}, [cl.bgPurple])}>
                <div className={cl.card__top}>
                  <img alt="card-image" src={cardTop_1} />
                </div>
                <div className={cl.card__container}>
                  <div className={cl.card__digit}>01</div>
                  <div className={cl.card__content}>
                    <div className={cl.card__step}>Шаг 1. Собеседование, сбор запросов</div>
                    <p className={cl.card__text}>
                      Проведём мок-собеседование с <span>экспертом</span> в вашей сфере
                    </p>
                    <p className={cl.card__text}>Соберем с вас пожелания по будущему месту работы</p>
                    <p className={cl.card__text}>
                      Разработаем <span>индивидуальный план</span> - подскажем, что нужно подтянуть и закрепим
                      за вами ментора
                    </p>
                  </div>
                </div>
                <Link to="/application">
                  <CustomButton noBg />
                </Link>
                <div className={cl.card__bottom}>
                  <img alt="card-image" src={cardBottom_1} />
                </div>
              </div>
            </div>
            <div className={cl.cards__arrow}>
              <img alt="arrow-icon" src={arrowIcon} />
            </div>
            <div className={cl.card}>
              <div className={cl.card__title}>3 месяца</div>
              <div className={cn(cl.card__body, {}, [cl.bgOrange])}>
                <div className={cl.card__top}>
                  <img alt="card-image" src={cardTop_2} />
                </div>
                <div className={cl.card__container}>
                  <div className={cl.card__digit}>02</div>
                  <div className={cl.card__content}>
                    <div className={cl.card__step}>Шаг 2. Самообразование под контролем ментора</div>
                    <p className={cl.card__text}>
                      Самообразование лучший процесс обучения, когда рядом ментор - будете оперативно
                      закрывать пробелы, <span>мы обеспечим вас всеми необходимыми материалами</span>
                    </p>
                  </div>
                </div>
                <Link to="/application">
                  <CustomButton noBg />
                </Link>
                <div className={cn(cl.card__bottom, {}, [cl.hand])}>
                  <img alt="card-image" src={cardBottom_2} />
                </div>
              </div>
            </div>
            <div className={cn(cl.cards__arrow, {}, [cl.mirror])}>
              <img alt="arrow-icon" src={arrowIcon} />
            </div>
            <div className={cl.card}>
              <div className={cl.card__title}>2 месяца</div>
              <div className={cn(cl.card__body, {}, [cl.bgGreen])}>
                <div className={cl.card__top}>
                  <img alt="card-image" src={cardTop_3} />
                </div>
                <div className={cl.card__container}>
                  <div className={cl.card__digit}>03</div>
                  <div className={cl.card__content}>
                    <div className={cl.card__step}>Шаг 3. Первая стажировка в предпочитаемом стартапе</div>
                    <p className={cl.card__text}>
                      Проведем еще один мок-собес, чтобы понять, что все пробелы закрыты
                    </p>
                    <p className={cl.card__text}>
                      Предложим 1-5 стартапов на выбор, проведем собеседования в желаемые
                    </p>
                    <p className={cl.card__text}>
                      <span>Первый рабочий день</span>, наш ментор будет отвечать на все ваши вопросы и решать
                      все проблемы - он ваш <span>проводник</span>
                    </p>
                  </div>
                </div>
                <Link to="/application">
                  <CustomButton noBg />
                </Link>
                <div className={cn(cl.card__bottom, {}, [cl.man])}>
                  <img alt="card-image" src={cardBottom_3} />
                </div>
              </div>
            </div>
            <p className={cl.steps__text}>
              На этом этапе уже можно считать, что карьера сложилась, большую часть студентов берут в штат
            </p>
            <div className={cl.cards__arrow}>
              <img alt="arrow-icon" src={arrowIcon} />
            </div>
            <div className={cl.card}>
              <div className={cl.card__title}>Всю жизнь</div>
              <div className={cn(cl.card__body, {}, [cl.bgBlue])}>
                <div className={cn(cl.card__top, {}, [cl.man])}>
                  <img alt="card-image" src={cardTop_4} />
                </div>
                <div className={cl.card__container}>
                  <div className={cl.card__digit}>04</div>
                  <div className={cl.card__content}>
                    <div className={cl.card__step}>Шаг 4. Бесконечный доступ к комьюнити со стажировками</div>
                    <p className={cl.card__text}>
                      Предоставим <span>официальный документ</span>, подтверждающий ваш опыт первой стажировки
                    </p>
                    <p className={cl.card__text}>
                      Возможность <span>абсолютно бесплатно</span> взять еще стажировку
                    </p>
                    <p className={cl.card__text}>Бесконечный доступ к чатам с экспертами</p>
                  </div>
                </div>
                <Link to="/application">
                  <CustomButton noBg />
                </Link>
              </div>
            </div>
            <p className={cl.steps__text}>
              *Стажировка гарантируется на уровне договора <br />
              *Стажировка в 80% случаев оплачиваемая
            </p>
          </div>
          <div className={cl.steps__scroll}>
            <div className={cl.scroll__slider}></div>
            <div className={cl.scroll__items}>
              <div className={cl.step}>
                <div className={cl.step__text}>Шаг 1. Знакомство, собеседование</div>
                <div className={cl.step__img}>
                  <img alt="step-1-image" src={step_1} />
                </div>
              </div>
              <div className={cl.step}>
                <div className={cl.step__text}>Шаг 2. Самообразование с ментором</div>
                <div className={cl.step__img}>
                  <img alt="step-2-image" src={step_2} />
                </div>
              </div>
              <div className={cl.step}>
                <div className={cl.step__text}>Шаг 3. Первая стажировка в стартапе</div>
                <div className={cl.step__img}>
                  <img alt="step-3-image" src={step_3} />
                </div>
              </div>
              <div className={cl.step}>
                <div className={cl.step__text}>Шаг 4. Комьюнити</div>
                <div className={cl.step__img}>
                  <img alt="step-4-image" src={step_4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
