import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import './ManagerPanelPage.css';

import ListSubheader from '@mui/material/ListSubheader';

function ManagerPanelPage() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className="ManagerPanelPage">
      <Drawer open={true} variant="permanent">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="manager-panel-page__subheader"
          subheader={
            <ListSubheader component="div" id="manager-panel-page__subheader">
              Manager Panel
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Orders" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="For here" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="To go" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem key="Menu" disablePadding>
            <ListItemButton>
              <ListItemText primary="Menu" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Tables" disablePadding>
            <ListItemButton>
              <ListItemText primary="Tables" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Reports" disablePadding>
            <ListItemButton>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Add new meal" disablePadding>
            <ListItemButton>
              <ListItemText primary="Add new meal" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Add new employee" disablePadding>
            <ListItemButton>
              <ListItemText primary="Add new employee" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Logout" disablePadding>
            <ListItemButton>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default ManagerPanelPage;
