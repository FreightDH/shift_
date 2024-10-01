import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';
import { BlurLayout } from '@/pages/layout';

import { StudyPageRoute } from '@/pages/study';

import { HomePageRoute } from '@/pages/home';
import { MissionPageRoute } from '@/pages/mission';
import { ApplicationPageRoute } from '@/pages/application';
import { SuccessPageRoute } from '@/pages/success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlurLayout />,
    children: [HomePageRoute, MissionPageRoute, ApplicationPageRoute],
  },
  {
    path: '/',
    element: <Layout />,
    children: [StudyPageRoute],
  },
  {
    path: '/application',
    element: <BlurLayout />,
    children: [SuccessPageRoute],
  },
]);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
