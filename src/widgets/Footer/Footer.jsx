import cl from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}>
          <div className={cl.footer__logo}>Шифт_</div>
          <div className={cl.footer__copyright}>ИП Динько Даниил Сергеевич © 2024 Все права защищены</div>
        </div>
      </div>
    </footer>
  );
};
