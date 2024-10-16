import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { CooperateBadge, StudyBadge } from '@/shared/UI/Badges';
import { CustomButton } from '@/shared/UI/CustomButton';

import cl from './MainSection.module.scss';

export const MainStudySection = () => {
  return (
    <section className={cl.main}>
      <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className="main__container">
        <div className={cl.main__body}>
          <StudyBadge />
          <div className={cl.main__titles}>
            <h1 className={cl.main__title}>Стажировка начинается тут</h1>
            <h2 className={cl.main__subtitle}>
              Получите возможность начать карьеру в IT с лучшими экспертами-менторами в лучших стартапах,
              которые мы тщательно отобрали.
            </h2>
          </div>
          <Link to="/application">
            <CustomButton />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const MainCooperateSection = () => {
  return (
    <section className={cl.main}>
      <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
      <div className="main__container">
        <div className={cl.main__body}>
          <CooperateBadge />
          <div className={cl.main__titles}>
            <h1 className={cl.main__title}>Мотивированные руки и опытный ум за дешево</h1>
            <h2 className={cl.main__subtitle}>
              Мотивированный стажер под руководством опытного эксперта-ментора, который будет решать все
              рабочие проблемы и вопросы стажера.
            </h2>
          </div>
          <Link to="/application">
            <CustomButton />
          </Link>
        </div>
      </div>
    </section>
  );
};
