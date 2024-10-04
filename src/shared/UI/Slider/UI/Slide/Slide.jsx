import { SplideSlide } from '@splidejs/react-splide';

import { cn } from '@/shared/lib';

import cl from './Slide.module.scss';

export const Slide = ({ mentor }) => {
  const { img, name, profession, achievements, role } = mentor;

  return (
    <SplideSlide>
      <div className={cn(cl.slide, {}, ['bg__grey'])}>
        <div className={cl.slide__header}>
          <div className={cl.slide__img}>
            <img alt={name} src={img} />
          </div>
          <div className={cl.slide__info}>
            <div className={cl.slide__name}>{name}</div>
            <div className={cl.slide__profession}>{profession}</div>
          </div>
        </div>
        <ul className={cl.slide__achievements}>
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className={cl.slide__role}>{role}</div>
      </div>
    </SplideSlide>
  );
};
