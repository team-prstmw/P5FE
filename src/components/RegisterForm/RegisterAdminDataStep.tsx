import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

type RegisterData = {
  email: string;
  companyName: string;
  city: string;
  login: string;
  password: string;
  repeatPassword: string;
};

interface RegisterAdminDataStepProps {
  label: string;
  nextStep: (values: RegisterData, isNext: boolean) => void;
  prevStep: (values: RegisterData) => void;
  data: RegisterData;
}

const schema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Required'),
  login: Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
  password: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

export function RegisterAdminDataStep({ nextStep, prevStep, data }: RegisterAdminDataStepProps) {
  const formSubmitHandler: SubmitHandler<RegisterData> = (values: RegisterData) => {
    nextStep(values, true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Controller
        name="email"
        control={control}
        defaultValue={data.email}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ margin: '1rem 0' }}
            label="Email"
            variant="outlined"
            error={Boolean(errors?.email)}
            helperText={errors.email && errors.email?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="login"
        control={control}
        defaultValue={data.login}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ marginBottom: '1rem' }}
            label="Login"
            variant="outlined"
            error={Boolean(errors?.login)}
            helperText={errors.login && errors.login?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue={data.password}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            sx={{ marginBottom: '1rem' }}
            label="Password"
            variant="outlined"
            error={Boolean(errors?.password)}
            helperText={errors.password && errors.password?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="repeatPassword"
        control={control}
        defaultValue={data.repeatPassword}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            sx={{ marginBottom: '1rem' }}
            label="Confirm Password"
            variant="outlined"
            error={Boolean(errors?.repeatPassword)}
            helperText={errors.repeatPassword && errors.repeatPassword?.message}
            fullWidth
          />
        )}
      />
      <div style={{ display: 'flex' }}>
        <Button
          fullWidth
          sx={{ mr: '1rem' }}
          variant="contained"
          color="warning"
          type="button"
          onClick={() => prevStep(data)}
        >
          Back
        </Button>
        <Button fullWidth variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
