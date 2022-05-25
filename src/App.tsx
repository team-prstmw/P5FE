import './App.css';

import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { selectUser } from './features/userSlice';
import { useRoutes } from './hooks/useRoute';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { HomePage } from './pages/HomePage/HomePage';
import { theme } from './theme/theme';

const useApp = () => {
  const user = useSelector(selectUser);

  return { user } as const;
};

function App() {
  const { routes } = useRoutes();
  const { user } = useApp();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <HomePage />} />
            {routes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
