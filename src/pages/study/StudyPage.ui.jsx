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

export const StudyPage = () => {
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
    </main>
  );
};
