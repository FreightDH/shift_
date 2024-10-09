import { useEffect, useRef } from 'react';

import { MainCooperateSection } from '@/widgets/Sections/MainSection';
import { RelevanceCooperateSection } from '@/widgets/Sections/RelevanceSection';
import { SolutionCooperateSection } from '@/widgets/Sections/SolutionSection';
import { MentorsSection } from '@/widgets/Sections/MentorsSection';
import { ServicesCooperateSection } from '@/widgets/Sections/ServicesSection';
import { VideoSection } from '@/widgets/Sections/VideoSection';
import { BackToTop } from '@/shared/UI/BackToTop';

export const CooperatePage = () => {
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
      <MainCooperateSection />
      <RelevanceCooperateSection ref={(el) => elementsRef.current.push(el)} />
      <SolutionCooperateSection ref={(el) => elementsRef.current.push(el)} />
      <MentorsSection ref={(el) => elementsRef.current.push(el)} />
      <ServicesCooperateSection ref={(el) => elementsRef.current.push(el)} />
      <VideoSection ref={(el) => elementsRef.current.push(el)} />
      <BackToTop />
    </main>
  );
};
