import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../features/userSlice';

type LoginFormData = {
  login: string;
  password: string;
};

function LoginForm() {
  const [data, setData] = useState<LoginFormData>({
    login: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (newData: LoginFormData) => {
    setData(data);

    dispatch(
      login({
        login: newData.login,
        password: newData.password,
        loggedIn: true,
      })
    );
  };

  const validate = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 50, margin: 3 }} color="primary" />
      </Grid>
      <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={validate}>
        {() => (
          <Form>
            <Field component={TextField} name="login" label="Login" placeholder="Enter Login" fullWidth />
            <Field
              component={TextField}
              name="password"
              sx={{ mt: 2 }}
              label="Password"
              placeholder="Enter Password"
              type="password"
              fullWidth
            />
            <FormControlLabel
              sx={{ mt: 1 }}
              name="remember"
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Button sx={{ mt: 1, fontWeight: 'bold' }} type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
