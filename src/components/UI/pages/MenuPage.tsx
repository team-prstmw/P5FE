import './MenuPage.css';

import { Box, Button } from '@mui/material';

import MenuItem from '../organisms/MenuItem/MenuItem';

function MenuPage() {
  return (
    <Box className="menu-page">
      <Button className="menu-page__order-button" variant="contained">
        ORDER
      </Button>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Box>
  );
}

export default MenuPage;
