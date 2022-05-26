//components
import { MainPage } from "../Pages/MainPage";
import { ContactPage } from "../Pages/ContactPage";
import { Page404 } from "../Pages/Page404";

interface Path {
  path: string;
  exact: boolean;
  children: React.ReactElement;
}

export const mainRouter: Path[] = [
  {
    path: "/",
    exact: true,
    children: <MainPage />,
  },
  {
    path: "/contact",
    exact: false,
    children: <ContactPage />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
