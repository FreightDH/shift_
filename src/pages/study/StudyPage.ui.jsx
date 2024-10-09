import { useEffect, useRef } from 'react';

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
  const elementsRef = useRef([]);

  useEffect(() => {
    const onEntry = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    };

    const observer = new IntersectionObserver(onEntry, {
      threshold: [0.5],
    });

    const elements = elementsRef.current;
    elements.forEach((item) => observer.observe(item));
  }, []);

  return (
    <main>
      <MainStudySection />
      <CoursesSection ref={(el) => elementsRef.current.push(el)} />
      <RelevanceStudySection ref={(el) => elementsRef.current.push(el)} />
      <SolutionStudySection ref={(el) => elementsRef.current.push(el)} />
      <StepsSection />
      <MentorsSection ref={(el) => elementsRef.current.push(el)} />
      <CompetitorSection ref={(el) => elementsRef.current.push(el)} />
      <VideoSection ref={(el) => elementsRef.current.push(el)} withArrow />
      <ServicesStudySection ref={(el) => elementsRef.current.push(el)} />
      <QuestionsSection ref={(el) => elementsRef.current.push(el)} />
      <BackToTop />
    </main>
  );
};
