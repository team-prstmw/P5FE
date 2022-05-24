import './App.css';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ManagerPanelPage } from './components/ManagerPanelPage/ManagerPanelPage';
import { theme } from './theme/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={null} />
            <Route path="main" element={<ManagerPanelPage />} />
            <Route path="orders" element={null} />
            <Route path="menu" element={null} />
            <Route path="tables" element={null} />
            <Route path="reports" element={null} />
            <Route path="newmeal" element={null} />
            <Route path="newemployee" element={null} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
