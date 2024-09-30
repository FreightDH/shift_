import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { CustomInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';

import cl from './ApplicationPage.module.scss';

export const ApplicationPage = () => {
  const [telegram, setTelegram] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(event.target);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    navigate('success');
    setTelegram('');
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
        <CustomInput
          name="Telegram"
          placeholder="Ваш телеграм"
          value={telegram}
          onChange={(e) => {
            setTelegram(e.target.value);
          }}
        />
        <CustomButton />
      </form>
    </div>
  );
};
