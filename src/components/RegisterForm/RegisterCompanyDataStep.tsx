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
  nextStep: (values: RegisterData, isNext: boolean) => void;
  data: RegisterData;
}

const schema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
});

export function RegisterCompanyDataStep({ nextStep, data }: RegisterCompanyDataStepProps) {
  const formSubmitHandler: SubmitHandler<RegisterData> = (values: RegisterData) => {
    nextStep(values, false);
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
            sx={{ margin: '1rem 0' }}
            label="Company Name"
            variant="outlined"
            error={Boolean(errors?.companyName)}
            helperText={errors.companyName && errors.companyName?.message}
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
            sx={{ marginBottom: '1rem' }}
            label="City"
            variant="outlined"
            error={Boolean(errors?.city)}
            helperText={errors.city && errors.city?.message}
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
