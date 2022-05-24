import { Box, Button } from '@mui/material';

import { MenuItem } from '../MenuItem/MenuItem';

export function MenuPage() {
  return (
    <Box>
      <Button sx={{ marginTop: '1rem', width: '15.625rem', fontSize: '1.5rem' }} variant="contained">
        ORDER
      </Button>
      <MenuItem />
    </Box>
  );
}

export default MenuPage;
