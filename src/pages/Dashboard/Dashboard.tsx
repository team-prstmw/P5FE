import { Box, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';

import { logout } from '../../features/userSlice';

function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container fixed>
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="error"
            sx={{ height: '86px', width: '106px', margin: '4px' }}
            onClick={() => handleLogout()}
          >
            LOGOUT
          </Button>
          <Button variant="contained" sx={{ height: '86px', width: '106px', margin: '4px' }}>
            MANAGE A TEAM
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
