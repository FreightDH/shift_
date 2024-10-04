import { MainCooperateSection } from '@/widgets/Sections/MainSection';
import { RelevanceCooperateSection } from '@/widgets/Sections/RelevanceSection';
import { SolutionCooperateSection } from '@/widgets/Sections/SolutionSection';
import { MentorsSection } from '@/widgets/Sections/MentorsSection';
import { ServicesCooperateSection } from '@/widgets/Sections/ServicesSection';

export const CooperatePage = () => {
  return (
    <main>
      <MainCooperateSection />
      <RelevanceCooperateSection />
      <SolutionCooperateSection />
      <MentorsSection />
      <ServicesCooperateSection />
    </main>
  );
};
