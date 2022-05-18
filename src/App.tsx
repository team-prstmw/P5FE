import './App.css';

import { useSelector } from 'react-redux';

import { selectUser } from './features/userSlice';
import Dashboard from './pages/Dashboard/Dashboard';
import { HomePage } from './pages/HomePage/HomePage';

const useApp = () => {
  const user = useSelector(selectUser);

  return { user } as const;
};

function App() {
  const { user } = useApp();

  return <>{user ? <Dashboard /> : <HomePage />}</>;
}

export default App;
