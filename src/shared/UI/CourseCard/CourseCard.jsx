import { Link } from 'react-router-dom';

import { CustomButton } from '@/shared/UI/CustomButton';

import lightningIcon from './assets/lightning.svg';
import cl from './CourseCard.module.scss';

export const CourseCard = ({ courseInfo }) => {
  return (
    <li className={cl.card}>
      <div className={cl.card__header}>
        <div className={cl.card__img}>
          <img alt="course-icon" src={courseInfo.img} />
        </div>
        <div className={cl.card__info}>
          <div className={cl.info__tags}>
            <div>
              {courseInfo.tags.map((tag, index) => (
                <div key={index} className={cl.tags__item}>
                  #{tag}
                </div>
              ))}
            </div>
            <div className={cl.card__icon}>
              <img alt="lightning-icon" src={lightningIcon} />
            </div>
          </div>
          <div className={cl.info__date}>
            Старт <span>{courseInfo.startDate}</span>
          </div>
        </div>
      </div>
      <div className={cl.card__body}>
        <p>{courseInfo.title}</p>
        <p className={cl.card__startups}>Сейчас {courseInfo.startups} ищут себе стажеров</p>
      </div>
      <Link to="/application">
        <CustomButton style={{ color: '#fff' }} />
      </Link>
    </li>
  );
};
