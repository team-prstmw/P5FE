import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AddMealSchema, addMealSchema } from 'src/schemas/addMealSchema';

import styles from './AddMealForm.module.css';

// export type AddMealSchema = {
//   title: string;
//   description: string;
//   weight: string;
//   price: string;
// };

export function AddMealForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMealSchema>({
    mode: 'onBlur',
    resolver: yupResolver(addMealSchema),
  });

  const onSubmit = () => {};
  return (
    <>
      <Typography className={styles.AddMealForm__header}>Add Meal Form</Typography>
      <Box noValidate className={styles.AddMealForm} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            error={!!errors?.title}
            label="Meal Title"
            placeholder="Meal title"
            required
            type="text"
            autoComplete="Meal-title"
            {...register('title')}
          />
          {errors?.title ? <FormHelperText error>{errors?.title && errors?.title?.message}</FormHelperText> : null}
          <TextField
            error={!!errors?.description}
            label="Meal description"
            placeholder="Meal description"
            required
            multiline
            type="text"
            autoComplete="Meal-description"
            {...register('description')}
          />
          {errors?.description ? (
            <FormHelperText error>{errors?.description && errors?.description.message}</FormHelperText>
          ) : null}
          <TextField
            error={!!errors?.weight}
            label="Weight(grams/ml)"
            placeholder="Weight(grams/ml)"
            required
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            autoComplete="Meal-weight"
            {...register('weight')}
          />
          {errors?.weight ? <FormHelperText error>{errors?.weight && errors?.weight.message}</FormHelperText> : null}
          <TextField
            error={!!errors?.price}
            label="Price"
            placeholder="Price"
            required
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            autoComplete="Meal-price"
            {...register('price')}
          />
          {errors?.price ? <FormHelperText error>{errors?.price && errors?.price.message}</FormHelperText> : null}
          <Button className={styles.AddMealForm__submitButton} color="primary" type="submit" variant="contained">
            Add Meal
          </Button>
        </Stack>
      </Box>
    </>
  );
}
