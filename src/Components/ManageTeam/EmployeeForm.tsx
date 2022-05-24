import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

type NewEmployeeData = {
  login: string;
  password: string;
  role: string;
};

const schema = Yup.object().shape({
  login: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  role: Yup.string().required('Required'),
});

type EmployeeFormProps = {
  recordForEdit: NewEmployeeData | null;
  addOrEdit: () => void;
};

export function EmployeeForm({ recordForEdit, addOrEdit }: EmployeeFormProps) {
  const [data, setData] = useState<NewEmployeeData>({
    login: '',
    password: '',
    role: '',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewEmployeeData>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<NewEmployeeData> = () => {
    addOrEdit();
    setData(data);
  };

  useEffect(() => {
    if (recordForEdit != null)
      setData({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <>
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
              error={Boolean(errors?.login)}
              helperText={errors.login && errors.login?.message}
              sx={{ mb: 3 }}
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
              label="Password"
              variant="outlined"
              error={Boolean(errors?.password)}
              helperText={errors.password && errors.password?.message}
              sx={{ mb: 3 }}
              fullWidth
            />
          )}
        />
        <FormControl error={Boolean(errors?.role)} fullWidth sx={{ mb: 2 }}>
          <InputLabel>Role</InputLabel>
          <Controller
            control={control}
            name="role"
            defaultValue=""
            render={({ field }) => (
              <Select {...field} label="Role">
                <MenuItem value={10}>Cook</MenuItem>
                <MenuItem value={20}>Waiter</MenuItem>
                <MenuItem value={30}>Manager</MenuItem>
              </Select>
            )}
          />
          <FormHelperText error={Boolean(errors?.role)}>{errors.role && errors.role?.message}</FormHelperText>
        </FormControl>
        <Button sx={{ mt: 1, fontWeight: 'bold' }} type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </>
  );
}
