import { ReactRouterProvider } from './provider';
import { MenuProvider } from '@/shared/lib/contexts/MenuContext';

export const App = () => (
  <MenuProvider>
    <ReactRouterProvider />
  </MenuProvider>
);
