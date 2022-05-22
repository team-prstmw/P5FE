import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';

const pages = ['Orders', 'Menu', 'Tables', 'Reports'];
const settings = ['Add new meal', 'Add new employee', 'Logout'];

const useManagerPanelPage = () => {
  const [anchorNavigationMenuEl, setAnchorNavigationMenuEl] = useState<null | HTMLElement>(null);
  const [anchorUserMenuEl, setAnchorUserMenuEl] = useState<null | HTMLElement>(null);

  const isUserMenuOpen = Boolean(anchorUserMenuEl);

  const isNavigationMenuOpen = Boolean(anchorNavigationMenuEl);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNavigationMenuEl(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorUserMenuEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNavigationMenuEl(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorUserMenuEl(null);
  };

  return {
    anchorNavigationMenuEl,
    anchorUserMenuEl,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    isUserMenuOpen,
    isNavigationMenuOpen,
  } as const;
};

export const ManagerPanelPage = () => {
  const {
    anchorNavigationMenuEl,
    anchorUserMenuEl,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    isUserMenuOpen,
    isNavigationMenuOpen,
  } = useManagerPanelPage();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorNavigationMenuEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={isNavigationMenuOpen}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button key={page} sx={{ color: 'text.primary', display: 'block', textAlign: 'left' }}>
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ m: 2, color: 'text.secondary', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon sx={{ fontSize: '2.5rem', color: 'text.secondary' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '3rem' }}
              anchorEl={anchorUserMenuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isUserMenuOpen}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ManagerPanelPage;
