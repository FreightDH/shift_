import { useNavigate } from 'react-router-dom';

import { CustomInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';
import { cn } from '@/shared/lib';

import cl from './ApplicationPage.module.scss';

export const ApplicationPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('success');
  };

  return (
    <div className={cl.application}>
      <div className={cn(cl.application__square, {}, ['square', 'bg__grey'])}></div>
      <div className={cl.application__titles}>
        <h1 className={cl.application__title}>Подача заявления</h1>
        <h2 className={cl.application__subtitle}>
          Оставьте Ваш телеграм, и мы сами Вам напишем и про все расскажем
        </h2>
      </div>
      <form action="#" className={cl.application__controls} onSubmit={handleSubmit}>
        <CustomInput placeholder="Ваш телеграм" value="" onChange={() => {}} />
        <CustomButton />
      </form>
    </div>
  );
};
