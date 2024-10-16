import { Accordion } from '@/shared/UI/Accordion';

import { questions } from './questions';
import cl from './QuestionsSection.module.scss';

export const QuestionsSection = () => {
  return (
    <section className={cl.questions} data-aos="zoom-in">
      <div className="questions__container">
        <div className={cl.questions__body}>
          <h3 className={cl.questions__title}>Часто задаваемые вопросы</h3>
          <Accordion items={questions} />
        </div>
      </div>
    </section>
  );
};
