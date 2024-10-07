import arrowIcon from './assets/arrow.png';
import cl from './CompetitorSection.module.scss';

export const CompetitorSection = () => {
  return (
    <section className={cl.competitor}>
      <div className="competitor__container">
        <div className={cl.competitor__body}>
          <p className={cl.competitor__text}>
            Признаемся честно: мы не придумывали ничего катострофически нового, мы взяли обкатанную идею из
            США, которая там дала возможность сотням тысяч студентов найти первую работу и построить карьеру в
            IT. Теперь такая возможность есть и в России! Наш американский конкурент -{' '}
            <a href="folio.works" target="blank">
              folio.works
            </a>
          </p>
          <div className={cl.competitor__arrow}>
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};
