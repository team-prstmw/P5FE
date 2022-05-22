import './App.css';

import { ThemeProvider } from '@mui/material';

import { ManagerPanelPage } from './components/ManagerPanelPage/ManagerPanelPage';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ManagerPanelPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
