import * as yup from 'yup';

import { MIN_VALUE_ERROR, MUST_BE_NUMBER_ERROR, REQUIRED_ERROR } from '../constants/errors';

export type AddMealSchema = {
  title: string;
  description: string;
  weight: string;
  price: string;
};

export const addMealSchema = yup.object().shape({
  title: yup.string().required(REQUIRED_ERROR),
  description: yup.string().required(REQUIRED_ERROR),
  weight: yup.number().typeError(MUST_BE_NUMBER_ERROR).positive(MIN_VALUE_ERROR).required(REQUIRED_ERROR),
  price: yup.number().typeError(MUST_BE_NUMBER_ERROR).positive(MIN_VALUE_ERROR).required(REQUIRED_ERROR),
});
