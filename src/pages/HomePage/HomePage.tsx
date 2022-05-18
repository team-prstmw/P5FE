import { Box, Container } from '@mui/material';

import { LoginAndRegisterPaper } from '../../components/LoginAndRegisterPaper/LoginAndRegisterPaper';

export const HomePage = () => (
  <Container fixed>
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LoginAndRegisterPaper />
    </Box>
  </Container>
);
