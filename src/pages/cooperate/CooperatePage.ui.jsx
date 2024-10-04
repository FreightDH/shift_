import { MainCooperateSection } from '@/widgets/Sections/MainSection';
import { RelevanceCooperateSection } from '@/widgets/Sections/RelevanceSection';
import { SolutionCooperateSection } from '@/widgets/Sections/SolutionSection';
import { MentorsSection } from '@/widgets/Sections/MentorsSection';

export const CooperatePage = () => {
  return (
    <main>
      <MainCooperateSection />
      <RelevanceCooperateSection />
      <SolutionCooperateSection />
      <MentorsSection />
    </main>
  );
};
