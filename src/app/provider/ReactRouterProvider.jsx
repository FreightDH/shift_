import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';
import { BlurLayout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';
import { MissionPageRoute } from '@/pages/mission';
import { ApplicationPageRoute } from '@/pages/application';
import { SuccessPageRoute } from '@/pages/success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute, MissionPageRoute, ApplicationPageRoute],
  },
  {
    path: '/',
    element: <BlurLayout />,
    children: [MissionPageRoute, ApplicationPageRoute],
  },
  {
    path: '/application',
    element: <BlurLayout />,
    children: [SuccessPageRoute],
  },
]);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
