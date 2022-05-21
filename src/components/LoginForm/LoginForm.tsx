import { yupResolver } from '@hookform/resolvers/yup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../features/userSlice';

type LoginFormData = {
  login: string;
  password: string;
};

const schema = Yup.object().shape({
  login: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export function LoginForm() {
  const [data, setData] = useState<LoginFormData>({
    login: '',
    password: '',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const formSubmitHandler: SubmitHandler<LoginFormData> = (newData: LoginFormData) => {
    setData(data);

    dispatch(
      login({
        login: newData.login,
        password: newData.password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: 'center',
        }}
      >
        <Grid item>
          <AccountCircleIcon sx={{ fontSize: 50, margin: 3 }} color="primary" />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Login"
              variant="outlined"
              error={!!errors.login}
              helperText={errors.login ? errors.login?.message : ''}
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              sx={{ mt: 2 }}
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              fullWidth
            />
          )}
        />
        <FormControlLabel sx={{ mt: 1 }} name="remember" control={<Checkbox color="primary" />} label="Remember me" />
        <Button sx={{ mt: 1, fontWeight: 'bold' }} type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </>
  );
}
