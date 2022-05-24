import './App.css';

import { ReactElement } from 'react';

import { ManageTeam } from './Components/ManageTeam/ManageTeam';

function App(): ReactElement {
  return (
    <div className="App">
      <ManageTeam />
    </div>
  );
}

export default App;
