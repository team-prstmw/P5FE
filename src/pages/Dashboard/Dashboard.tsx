import { Box, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';

import { logout } from '../../features/userSlice';

export function Dashboard() {
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
        </Box>
      </Container>
    </>
  );
}