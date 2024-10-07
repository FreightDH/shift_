import { MainStudySection } from '@/widgets/Sections/MainSection';
import { CoursesSection } from '@/widgets/Sections/CoursesSection';
import { RelevanceStudySection } from '@/widgets/Sections/RelevanceSection';
import { SolutionStudySection } from '@/widgets/Sections/SolutionSection';
import { MentorsSection } from '@/widgets/Sections/MentorsSection';
import { CompetitorSection } from '@/widgets/Sections/CompetitorSection';
import { VideoSection } from '@/widgets/Sections/VideoSection';
import { ServicesStudySection } from '@/widgets/Sections/ServicesSection/ServicesSection';

export const StudyPage = () => {
  return (
    <main>
      <MainStudySection />
      <CoursesSection />
      <RelevanceStudySection />
      <SolutionStudySection />
      <MentorsSection />
      <CompetitorSection />
      <VideoSection withArrow />
      <ServicesStudySection />
    </main>
  );
};
