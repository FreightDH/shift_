import { Link } from 'react-router-dom';

import { StudyBadge } from '@/shared/UI/Badges';
import { CustomButton } from '@/shared/UI/CustomButton';
import { cn } from '@/shared/lib';

import { CoursesSection } from '@/widgets/Sections/CoursesSection';
import { RelevanceSection } from '@/widgets/Sections/RelevanceSection';

import cl from './StudyPage.module.scss';

export const StudyPage = () => {
  return (
    <main className={cl.page}>
      <section className={cl.main}>
        <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
        <div className={cn(cl.main__blur, {}, ['blur', 'blur--blue'])}></div>
        <div className="main__container" style={{ position: 'relative', zIndex: 2 }}>
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
      <CoursesSection />
      <RelevanceSection />
    </main>
  );
};
