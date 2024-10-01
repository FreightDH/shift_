import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { CooperateBadge, StudyBadge } from '@/shared/UI/Badges';

import cl from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={cl.home}>
      <div className={cn(cl.home__square, {}, ['square', 'bg__grey'])}></div>
      <div className={cl.home__content}>
        <p className={cn(cl.home__hello, {}, ['bg__grey'])}>
          Привет! <br />
          Мы команда, которая поставляет стартапам прокаченных стажеров в IT с няньками - экспертами в сфере.
        </p>
        <div className={cn(cl.home__about, {}, ['bg__grey'])}>
          <p>Позволь нам рассказать про нас (не более 5 минут), но для начала выбери себя:</p>
          <div className={cl.home__choice}>
            <Link to="/study">
              <StudyBadge />
            </Link>
            <Link to="/cooperate">
              <CooperateBadge />
            </Link>
          </div>
        </div>
        <div className={cl.home__text}>Если хочешь стать ментором, пиши нашему менеджеру - t.me/vasya</div>
      </div>
    </div>
  );
};
