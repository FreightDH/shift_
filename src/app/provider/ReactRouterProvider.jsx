import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';
import { MissionPageRoute } from '@/pages/mission';
import { ApplicationPageRoute } from '@/pages/application';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute, MissionPageRoute, ApplicationPageRoute],
  },
]);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
