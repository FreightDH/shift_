import { useRef } from 'react';

export const useScrollBlock = () => {
  const scrollBlocked = useRef(false);
  const html = document.documentElement;
  const { body } = document;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;

    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';
    document.querySelector('main').style.overflow = '';

    scrollBlocked.current = false;
  };

  return { scrollBlocked, blockScroll, allowScroll };
};
