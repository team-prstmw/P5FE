import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LoginAndRegisterPaper from '../../components/LoginAndRegisterPaper/LoginAndRegisterPaper';

function HomePage() {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LoginAndRegisterPaper />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
