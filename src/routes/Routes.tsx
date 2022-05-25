import { ManagerPanelPage } from 'src/Components/ManagerPanelPage/ManagerPanelPage';
import { ManageTeam } from 'src/Components/ManageTeam/ManageTeam';
import MenuPage from 'src/components/MenuPage/MenuPage';
import { AddMealForm } from 'src/manager/components/AddMealForm/AddMealForm';
import { DiningRoomPage } from 'src/pages/DiningRoomPage/DiningRoomPage';
import { OrdersPage } from 'src/pages/OrdersPage/OrdersPage';

import type { Route } from './Route';

export const ROUTES: Route[] = [
  {
    path: 'main',
    name: 'Panel page',
    element: <ManagerPanelPage />,
    isMainPage: true,
    displayInMainNav: false,
    displayInUserNav: false,
  },
  {
    path: 'orders',
    name: 'Orders',
    element: <OrdersPage />,
    isMainPage: false,
    displayInMainNav: true,
    displayInUserNav: false,
  },
  {
    path: 'menu',
    name: 'Menu',
    element: <MenuPage />,
    isMainPage: false,
    displayInMainNav: true,
    displayInUserNav: false,
  },
  {
    path: 'tables',
    name: 'Tables',
    element: <DiningRoomPage />,
    isMainPage: false,
    displayInMainNav: true,
    displayInUserNav: false,
  },
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
    element: <AddMealForm />,
    isMainPage: false,
    displayInMainNav: false,
    displayInUserNav: true,
  },
  {
    path: 'new_employee',
    name: 'Add new employee',
    element: <ManageTeam />,
    isMainPage: false,
    displayInMainNav: false,
    displayInUserNav: true,
  },
];
