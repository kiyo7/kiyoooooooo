//components
import { MainPage } from '../Page/MainPage';
import { ContactPage } from '../Page/ContactPage';
import { Page404 } from '../Page/Page404';

export const mainRouter = [
  {
    path: '/kiyoooooooo',
    exact: true,
    children: <MainPage />,
  },
  {
    path: '/contact',
    exact: false,
    children: <ContactPage />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
