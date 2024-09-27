import { CustomInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';
import { cn } from '@/shared/lib';

import cl from './ApplicationPage.module.scss';

export const ApplicationPage = () => {
  return (
    <>
      <div className={cn(cl.application__red, {}, ['blur', 'blur--red'])}></div>
      <div className={cn(cl.application__green, {}, ['blur', 'blur--green'])}></div>
      <main className={cl.page}>
        <section className={cl.application}>
          <div className="application__container">
            <div className={cl.application__body}>
              <div className={cl.application__content}>
                <div className={cn(cl.application__square, {}, ['square', 'bg__grey'])}></div>
                <div className={cl.application__titles}>
                  <h1 className={cl.application__title}>Подача заявления</h1>
                  <h2 className={cl.application__subtitle}>
                    Оставьте Ваш телеграм, и мы сами Вам напишем и про все расскажем
                  </h2>
                </div>
                <div className={cl.application__controls}>
                  <CustomInput placeholder="Ваш телеграм" value="" onChange={() => {}} />
                  <CustomButton></CustomButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
