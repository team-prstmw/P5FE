import './App.css';

import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';

import helloRequest from './api/hello';
import MenuPage from './components/UI/pages/MenuPage';

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
  return (
    <div className="App">
      <MenuPage />
    </div>
  );
}

export default App;
