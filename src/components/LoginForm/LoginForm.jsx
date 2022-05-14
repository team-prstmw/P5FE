import Grid from '@mui/material/Grid';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../../../src/features/userSlice';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

function LoginForm() {
  const [data, setData] = useState({
    login: '',
    password: '',
  });

  const dispatch = useDispatch();

  const initialValues = {
    login: '',
    password: '',
    remember: false,
  };

  const handleSubmit = (newData) => {
    setData(newData);

    dispatch(
      Login({
        login: data.login,
        password: data.password,
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
      <Grid align="center" item>
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
