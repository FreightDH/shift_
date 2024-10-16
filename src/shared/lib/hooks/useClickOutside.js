import { useEffect } from 'react';

export const useClickOutside = (ref, dependenciesArray, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      let flag = false;

      dependenciesArray.forEach((dep) => {
        if (dep.current?.contains(target)) flag = true;
      });

      if (flag) return;

      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside, dependenciesArray]);
};
