import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { ArrowStep } from '@/shared/UI/Arrow';
import { CustomButton } from '@/shared/UI/CustomButton';

import {
  cardBottom_1,
  cardBottom_2,
  cardBottom_3,
  cardTop_1,
  cardTop_2,
  cardTop_3,
  cardTop_4,
} from './assets';
import { stepsInfo } from './stepsInfo';
import cl from './StepsSection.module.scss';

export const StepsSection = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < 3400) {
      setScrollTop(3400);
      return;
    }

    if (window.scrollY > 6393) {
      setScrollTop(6393);
      return;
    }

    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={cl.steps} data-aos="zoom-in">
      <div className="steps__container">
        <div className={cl.steps__body}>
          <div className={cl.steps__cards}>
            <div className={cl.card}>
              <div className={cn(cl.card__blur, {}, ['blur', 'blur--blue'])}></div>
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
            <ArrowStep />
            <div className={cl.card}>
              <div className={cn(cl.card__blur, {}, ['blur', 'blur--orange'])}></div>
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
            <ArrowStep mirrored />
            <div className={cl.card}>
              <div className={cn(cl.card__blur, {}, ['blur', 'blur--green'])}></div>
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
            <ArrowStep />
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
            <div className={cl.scroll__slider}>
              <div
                className={cl.scroll__progress}
                style={{ top: `${scrollTop - 3400 > 0 && scrollTop - 3400}px` }}
              ></div>
            </div>
            <div
              className={cl.scroll__wrapper}
              style={{ top: `${scrollTop - 3400 > 0 && scrollTop - 3400}px` }}
            >
              <div className={cl.scroll__items} style={{ transform: `translateY(-${scrollTop - 3500}px)` }}>
                {stepsInfo.map(({ id, text, img }) => (
                  <div key={id} className={cl.step}>
                    <div className={cl.step__text}>{text}</div>
                    <div className={cl.step__img}>
                      <img alt="step-image" src={img} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
