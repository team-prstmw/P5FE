import './App.css';

import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import AddMealForm from 'src/components/UI/organisms/AddMealForm/AddMealForm';
import MenuItem from 'src/components/UI/organisms/MenuItem/MenuItem';

import helloRequest from './api/hello';

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
      <AddMealForm />
      {/* <MenuItem /> */}
    </div>
  );
}

export default App;
