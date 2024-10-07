import { useRef, useState } from 'react';

import arrowIcon from './assets/arrow.svg';
import cl from './Accordion.module.scss';
import { cn } from '@/shared/lib';

const AccordionItem = ({ item }) => {
  const { question, answer } = item;
  const [isOpen, setOpen] = useState(false);
  const contentHeight = useRef();

  return (
    <div className={cl.item}>
      <button className={cn(cl.item__question, { [cl.active]: isOpen })} onClick={() => setOpen(!isOpen)}>
        <p className={cl.question__text}>{question}</p>
        <img alt="arrow-icon" src={arrowIcon} />
      </button>
      <div
        ref={contentHeight}
        className={cl.item__answer}
        style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: '0px' }}
      >
        <p className={cl.answer__text}>{answer}</p>
      </div>
    </div>
  );
};

export const Accordion = ({ items }) => {
  return (
    <div className={cn(cl.accordion, {}, ['bg__grey'])}>
      {items.map(({ id, ...item }) => (
        <AccordionItem key={id} item={item} />
      ))}
    </div>
  );
};
