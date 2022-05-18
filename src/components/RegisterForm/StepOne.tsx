/* eslint-disable */
import Button from '@mui/material/Button';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

function StepOne(props: any) {
  const handleSubmit = (values: any) => {
    props.next(values);
  };
  
  const validate = Yup.object({
    companyName: Yup.string().required('Required'),
    companyLogin: Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
    companyPassword: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
    companyPassword2: Yup.string()
      .oneOf([Yup.ref('companyPassword'), null], 'Password must match')
      .required('Required'),
  });

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit} validationSchema={validate}>
      {() => (
        <Form>
          <Field
            fullWidth
            sx={{ margin: '12px 0px 12px 0px' }}
            name="companyName"
            component={TextField}
            label="Company Name"
          />

          <Field
            fullWidth
            sx={{ marginBottom: '12px' }}
            name="companyLogin"
            component={TextField}
            label="Company Login"
          />

          <Field
            fullWidth
            sx={{ marginBottom: '12px' }}
            name="companyPassword"
            component={TextField}
            type="password"
            label="Company Password"
          />

          <Field
            fullWidth
            sx={{ marginBottom: '12px' }}
            name="companyPassword2"
            component={TextField}
            type="password"
            label="Confirm Company Password"
          />

          <Button fullWidth variant="contained" color="primary" type="submit">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default StepOne;
