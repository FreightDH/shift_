import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { MainStudySection } from '@/widgets/Sections/MainSection';
import { CoursesSection } from '@/widgets/Sections/CoursesSection';
import { RelevanceStudySection } from '@/widgets/Sections/RelevanceSection';
import { SolutionStudySection } from '@/widgets/Sections/SolutionSection';
import { StepsSection } from '@/widgets/Sections/StepsSection';
import { MentorsSection } from '@/widgets/Sections/MentorsSection';
import { CompetitorSection } from '@/widgets/Sections/CompetitorSection';
import { VideoSection } from '@/widgets/Sections/VideoSection';
import { ServicesStudySection } from '@/widgets/Sections/ServicesSection/ServicesSection';
import { QuestionsSection } from '@/widgets/Sections/QuestionsSection';
import { BackToTop } from '@/shared/UI/BackToTop';

export const StudyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main>
      <MainStudySection />
      <CoursesSection />
      <RelevanceStudySection />
      <SolutionStudySection />
      <StepsSection />
      <MentorsSection />
      <CompetitorSection />
      <VideoSection withArrow />
      <ServicesStudySection />
      <QuestionsSection />
      <BackToTop />
    </main>
  );
};
