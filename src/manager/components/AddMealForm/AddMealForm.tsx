import 'src/manager/components/AddMealForm/AddMealForm.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AddMealSchema, addMealSchema } from 'src/schemas/addMealSchema';

const useAddMealForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMealSchema>({
    mode: 'onBlur',
    resolver: yupResolver(addMealSchema),
  });

  const onSubmit = () => {};

  return { register, handleSubmit, onSubmit, errors } as const;
};

export function AddMealForm() {
  const { register, handleSubmit, onSubmit, errors } = useAddMealForm();

  return (
    <>
      <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>Add Meal Form</Typography>
      <Box
        sx={{ margin: '1rem auto', maxWidth: '60rem' }}
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <TextField
            error={Boolean(errors?.title)}
            label="Meal Title"
            placeholder="Meal title"
            required
            type="text"
            autoComplete="Meal-title"
            {...register('title')}
          />
          {errors?.title ? <FormHelperText error>{errors?.title?.message}</FormHelperText> : null}
          <TextField
            error={Boolean(errors?.description)}
            label="Meal description"
            placeholder="Meal description"
            required
            multiline
            type="text"
            autoComplete="Meal-description"
            {...register('description')}
          />
          {errors?.description ? <FormHelperText error>{errors?.description?.message}</FormHelperText> : null}
          <TextField
            error={Boolean(errors?.weight)}
            label="Weight(grams/ml)"
            placeholder="Weight(grams/ml)"
            required
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            autoComplete="Meal-weight"
            {...register('weight')}
          />
          {errors?.weight ? <FormHelperText error>{errors?.weight?.message}</FormHelperText> : null}
          <TextField
            error={Boolean(errors?.price)}
            label="Price"
            placeholder="Price"
            required
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            autoComplete="Meal-price"
            {...register('price')}
          />
          {errors?.price ? <FormHelperText error>{errors?.price?.message}</FormHelperText> : null}
          <Button sx={{ textTransform: 'uppercase' }} color="primary" type="submit" variant="contained">
            Add Meal
          </Button>
        </Stack>
      </Box>
    </>
  );
}
