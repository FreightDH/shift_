import { cn } from '@/shared/lib';

import arrowIcon from './assets/arrow.png';
import cl from './VideoSection.module.scss';

export const VideoSection = ({ withArrow }) => {
  return (
    <section className={cl.video}>
      <div className={cn(cl.video__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className={cn(cl.video__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className="video__container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={cl.video__body}>
          <div className={cl.video__content}>
            <h3 className={cl.video__title}>Еще не до конца уверены?</h3>
            <p className={cl.video__text}>Посмотрите ролик, который мы сняли специально для вас</p>
            <iframe
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={cl.video__player}
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/lyh2kAjcmSY?si=Ez8KlHTSI-SObOeo"
              title="YouTube video player"
            ></iframe>
          </div>
          {withArrow && (
            <div className={cl.video__arrow}>
              <img alt="arrow-icon" src={arrowIcon} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
