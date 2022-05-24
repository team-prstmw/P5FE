import { ManagerPanelPage } from '../components/ManagerPanelPage/ManagerPanelPage';
import type { Route } from './Route';

export const ROUTES: Route[] = [
  { path: '/', name: 'Login page', element: null, isMainPage: false, displayInMainNav: false, displayInUserNav: false },
  {
    path: 'main',
    name: 'Panel page',
    element: <ManagerPanelPage />,
    isMainPage: true,
    displayInMainNav: false,
    displayInUserNav: false,
  },
  { path: 'orders', name: 'Orders', element: null, isMainPage: false, displayInMainNav: true, displayInUserNav: false },
  { path: 'menu', name: 'Menu', element: null, isMainPage: false, displayInMainNav: true, displayInUserNav: false },
  { path: 'tables', name: 'Tables', element: null, isMainPage: false, displayInMainNav: true, displayInUserNav: false },
  {
    path: 'reports',
    name: 'Reports',
    element: null,
    isMainPage: false,
    displayInMainNav: true,
    displayInUserNav: false,
  },
  {
    path: 'new_meal',
    name: 'Add new meal',
    element: null,
    isMainPage: false,
    displayInMainNav: false,
    displayInUserNav: true,
  },
  {
    path: 'new_employee',
    name: 'Add new employee',
    element: null,
    isMainPage: false,
    displayInMainNav: false,
    displayInUserNav: true,
  },
];
