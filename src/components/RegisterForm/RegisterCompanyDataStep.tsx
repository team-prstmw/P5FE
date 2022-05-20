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

interface RegisterCompanyDataStepProps {
  label: string;
  next: (values: RegisterData, isItNext: boolean) => void;
  data: RegisterData;
}

const schema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
});

function RegisterCompanyDataStep({ next, data }: RegisterCompanyDataStepProps) {
  const formSubmitHandler: SubmitHandler<RegisterData> = (values: RegisterData) => {
    next(values, false);
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
        name="companyName"
        control={control}
        defaultValue={data.companyName}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ margin: '12px 0px' }}
            label="Company Name"
            variant="outlined"
            error={!!errors.companyName}
            helperText={errors.companyName ? errors.companyName?.message : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        defaultValue={data.city}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ marginBottom: '12px' }}
            label="City"
            variant="outlined"
            error={!!errors.city}
            helperText={errors.city ? errors.city?.message : ''}
            fullWidth
          />
        )}
      />
      <Button fullWidth variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default RegisterCompanyDataStep;
