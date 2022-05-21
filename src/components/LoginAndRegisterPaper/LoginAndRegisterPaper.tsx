import { Paper } from '@mui/material';
import { Box, Grid, Tabs, Tab, Direction, useTheme } from "@mui/material"
import { ReactNode, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import styles from './LoginAndRegisterPaper.module.css';

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
    {value === index && <Box>{children}</Box>}
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
      <Paper elevation={10} className={styles.paper}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width"
        >
          <Tab label="Sign In" />
          <Tab label="Register" />
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

export default LoginAndRegisterPaper;
