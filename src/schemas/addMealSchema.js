import * as yup from 'yup';

import { MIN_VALUE_ERROR, MUST_BE_NUMBER, REQUIRED_ERROR } from './const';

export const addMealSchema = yup.object().shape({
  title: yup.string().required(REQUIRED_ERROR),
  description: yup.string().required(REQUIRED_ERROR),
  weight: yup.number(MUST_BE_NUMBER).positive(MIN_VALUE_ERROR).required(REQUIRED_ERROR),
  price: yup.number(MUST_BE_NUMBER).positive(MIN_VALUE_ERROR).required(REQUIRED_ERROR),
});
