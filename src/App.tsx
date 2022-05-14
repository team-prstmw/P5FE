import './App.css';

import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { selectUser } from '../src/features/userSlice';
import helloRequest from './api/hello';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';

function ServerMessage() {
  const { data, isLoading, error } = useQuery('hello', helloRequest);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Some error ocurred</span>;
  }

  return <span>{data?.message}</span>;
}

function App(): ReactElement {
  const [count, setCount] = useState(0);
  const user = useSelector(selectUser);

  return <>{user ? <Dashboard /> : <HomePage />}</>;
}

export default App;
