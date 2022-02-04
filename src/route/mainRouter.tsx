//components
import { MainPage } from '../Page/MainPage';
import { ContactPage } from '../Page/ContactPage';
import { Page404 } from '../Page/Page404';

interface Path {
  path: string;
  exact: boolean;
  children: React.ReactElement;
}

export const mainRouter: Path[] = [
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
