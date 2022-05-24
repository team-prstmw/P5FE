import { ROUTES } from '../routes/Routes';

export const useRoutes = () => {
  const routes = ROUTES;
  const navigationRoutes = ROUTES.filter((route) => route.displayInMainNav);
  const userRoutes = ROUTES.filter((route) => {
    return route.displayInUserNav && route.name !== 'Login Page';
  });

  return { routes, navigationRoutes, userRoutes } as const;
};
