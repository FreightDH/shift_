import { cn } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';

import { arrowIcon, lightningIcon } from './assets';
import cl from './ServicesSection.module.scss';

export const ServicesStudySection = () => {
  return (
    <section className={cl.services}>
      <div className="services__container">
        <div className={cl.services__body}>
          <h3 className={cl.services__title}>Пакеты услуг</h3>
          <ul className={cl.services__list}>
            <li className={cl.service}>
              <div className={cl.service__icon}>
                <img alt="lightning-icon" src={lightningIcon} />
              </div>
              <div className={cl.service__title}>Стандартный план</div>
              <div className={cl.service__price}>12.000₽/месяц, 6 месяцев или 72.000₽ сразу</div>
              <div className={cl.service__footer}>
                <p className={cl.service__salary}>Зарплата со стажировки остаётся полностью вам</p>
                <CustomButton />
              </div>
            </li>
            <li className={cn(cl.service, {}, [cl.alternative])}>
              <div className={cn(cl.service__icon, {}, [cl.alternative])}>
                <img alt="lightning-icon" src={lightningIcon} />
              </div>
              <div className={cl.service__title}>Продвинутый план</div>
              <div className={cl.service__price}>7.000₽/месяц, 6 месяцев или 40.000₽ сразу</div>
              <div className={cl.service__footer}>
                <p>Зарплата со стажировки остаётся вам на 30%</p>
                <CustomButton alternative />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export const ServicesCooperateSection = () => {
  return (
    <section className={cl.services}>
      <div className="services__container">
        <div className={cl.services__body}>
          <h3 className={cl.services__title}>Пакеты услуг</h3>
          <ul className={cl.services__list}>
            <li className={cl.service}>
              <div className={cl.service__icon}>
                <img alt="lightning-icon" src={lightningIcon} />
              </div>
              <div className={cl.service__title}>Стандартный план</div>
              <ul className={cl.service__advantages}>
                <li>Находим стажера под именно ваши требования</li>
                <li>
                  Прикрепляем к стажеру эксперта в сфере, который сам будет <span>нянчиться</span> во время
                  стажировки
                </li>
                <li>Полностью сами занимаемся оформлением наших стажеров, платим сами за них налоги</li>
                <li>
                  Берем на себя собеседования, но ваши представители могут на них быть (будет гарантия, что
                  человек подходит)
                </li>
              </ul>
              <CustomButton />
            </li>
            <li className={cn(cl.service, {}, [cl.alternative])}>
              <div className={cn(cl.service__icon, {}, [cl.alternative])}>
                <img alt="lightning-icon" src={lightningIcon} />
              </div>
              <div className={cl.service__title}>Продвинутый план</div>
              <ul className={cn(cl.service__advantages, {}, [cl.alternative])}>
                <li>Все, что в стандартном плане</li>
                <li>
                  Собеседуем не только наших стажеров, но и всех новых кандидатов на ваши вакансии + (hr)
                </li>
                <li>Консультируем в сложных отраслевых вопросах, к примеру: архитектура в IT</li>
                <li>
                  Курсы повышения квалификации для ваших сотрудников: наши эксперты передадут вашим
                  сотрудникам лучшие практики
                </li>
              </ul>
              <CustomButton alternative />
            </li>
          </ul>
          <div className={cl.services__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
