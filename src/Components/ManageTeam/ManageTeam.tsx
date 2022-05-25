import { Box, Container } from '@mui/material';

import { EmployeesTable } from './EmployeesTable';

export function ManageTeam() {
  return (
    <Container fixed>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EmployeesTable />
      </Box>
    </Container>
  );
}
