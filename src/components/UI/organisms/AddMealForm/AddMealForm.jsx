import { Box, Button, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { addMealSchema } from '../../../../schemas/addMealSchema';
import { useForm } from 'react-hook-form';
import './AddMealForm.css';
import { yupResolver } from '@hookform/resolvers/yup';

function AddMealForm() {
  const {
    register,
    handleSubmit,
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
          <Button color="primary" type="submit" variant="contained">
            ADD MEAL
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default AddMealForm;
