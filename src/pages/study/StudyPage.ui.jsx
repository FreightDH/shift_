import { MainStudySection } from '@/widgets/Sections/MainSection';
import { CoursesSection } from '@/widgets/Sections/CoursesSection';
import { RelevanceStudySection } from '@/widgets/Sections/RelevanceSection';
import { SolutionStudySection } from '@/widgets/Sections/SolutionSection';

export const StudyPage = () => {
  return (
    <main>
      <MainStudySection />
      <CoursesSection />
      <RelevanceStudySection />
      <SolutionStudySection />
    </main>
  );
};
