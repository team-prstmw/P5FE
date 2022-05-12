import { Box, Button, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { addMealSchema } from '../../../../schemas/addMealSchema';
import { useForm } from 'react-hook-form';
import './AddMealForm.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
function AddMealForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(addMealSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Typography className="AddMealForm__header">Add Meal Form</Typography>
      <Box className="AddMealForm" component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            error={errors?.title}
            label="Meal Title"
            placeholder="Meal title"
            required
            type="text"
            autoComplete="Meal-title"
            {...register('title')}
          />
          {errors?.title ? <FormHelperText error>{errors?.title && errors?.title.message}</FormHelperText> : null}
          <TextField
            //   error={!!errors?.email}
            label="Meal description"
            placeholder="Meal description"
            required
            multiline
            type="text"
            autoComplete="Meal-description"
            {...register('description')}
          />
          <TextField
            //   error={!!errors?.email}
            label="Weight(grams)"
            placeholder="Weight(grams)"
            required
            type="number"
            autoComplete="Meal-weight"
            {...register('weight')}
          />
          <TextField
            //   error={!!errors?.email}
            label="Price"
            placeholder="Price"
            required
            type="number"
            autoComplete="Meal-price"
            {...register('price')}
          />
          <Button color="primary" type="submit" variant="contained">
            ADD MEAL
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default AddMealForm;
