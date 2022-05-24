import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { removeCookies } from '@/utils/removeCookies';

const PAGES = ['Orders', 'Menu', 'Tables', 'Reports'];
const SETTINGS = ['Add new meal', 'Add new employee', 'Logout'];
const SETTINGS_LINKS = ['newmeal', 'newemployee', '/'];
const SETTINGS_FUNCTIONS = [() => {}, () => {}, removeCookies];

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
              {PAGES.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    component={Link}
                    sx={{
                      display: 'block',
                      color: 'text.primary',
                      textDecoration: 'none',
                      textAlign: 'left',
                      textTransform: 'uppercase',
                    }}
                    to={`/${PAGES[i].toLowerCase()}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES.map((page, i) => (
              <Button
                component={Link}
                sx={{
                  display: 'block',
                  m: '1rem',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
                to={`/${PAGES[i].toLowerCase()}`}
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open SETTINGS">
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
              {SETTINGS.map((setting, i) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Button
                    component={Link}
                    sx={{
                      color: 'text.primary',
                      textDecoration: 'none',
                    }}
                    to={`/${SETTINGS_LINKS[i]}`}
                    key={setting}
                    onClick={SETTINGS_FUNCTIONS[i]}
                  >
                    {setting}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
