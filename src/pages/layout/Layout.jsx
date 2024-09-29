import { Outlet } from 'react-router-dom';

import { cn } from '@/shared/lib';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import cl from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const BlurLayout = () => {
  return (
    <>
      <Header />
      <div className={cn(cl.page__red, {}, ['blur', 'blur--red'])}></div>
      <div className={cn(cl.page__green, {}, ['blur', 'blur--green'])}></div>
      <main className={cl.page}>
        <section className={cl.section}>
          <div className="section__container">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
