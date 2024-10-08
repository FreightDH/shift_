import { useEffect, useState } from 'react';

import arrowIcon from './assets/arrow.svg';
import cl from './BackToTop.module.scss';

export const BackToTop = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {isVisible && (
        <button className={cl.btn} onClick={handleClick}>
          <img alt="arrow-icon" src={arrowIcon} />
        </button>
      )}
    </>
  );
};
