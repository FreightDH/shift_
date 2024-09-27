import cl from './CustomInput.module.scss';

export const CustomInput = ({ placeholder, value, onChange }) => {
  return (
    <input className={cl.input} placeholder={placeholder} type="text" value={value} onChange={onChange} />
  );
};
