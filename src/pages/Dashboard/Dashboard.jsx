import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Logout } from '../../features/userSlice';

function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(Logout());
  };

  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="error"
            sx={{ height: '86px', width: '106px', margin: '4px' }}
            onClick={(e) => handleLogout(e)}
          >
            LOGOUT
          </Button>
          <Button variant="contained" sx={{ height: '86px', width: '106px', margin: '4px' }}>
            MANAGE A TEAM
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
