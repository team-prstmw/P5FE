import './App.css';

import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';

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
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Server says: <ServerMessage />
        </p>
        <p>
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
