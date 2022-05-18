import { Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import { Direction, useTheme } from '@mui/material/styles';
import { ReactNode, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from './LoginAndRegisterPaper.module.css';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type TabPanelProps = {
  children: ReactNode;
  value: number;
  index: number;
  dir: Direction;
};

export const TabPanel = ({ children, value, index, dir }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    dir={dir}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

export const LoginAndRegisterPaper = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Grid>
      <Paper elevation={10} className={styles.paperStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <LoginForm />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <RegisterForm />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </Grid>
  );
};
