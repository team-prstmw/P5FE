import './App.css';

import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../src/features/userSlice';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';



function App(): ReactElement {
  const user = useSelector(selectUser);

  return <>{user ? <Dashboard /> : <HomePage />}</>;
}

export default App;
