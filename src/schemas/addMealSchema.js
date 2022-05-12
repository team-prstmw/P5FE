import * as yup from 'yup';

import { MIN_VALUE_ERROR, REQUIRED_ERROR } from './const';

export const addMealSchema = yup.object().shape({
  title: yup.string().required(REQUIRED_ERROR),
  description: yup.string().required(REQUIRED_ERROR),
  weight: yup.number().required(REQUIRED_ERROR).positive(MIN_VALUE_ERROR),
  price: yup.number().required(REQUIRED_ERROR).positive(MIN_VALUE_ERROR),
});
