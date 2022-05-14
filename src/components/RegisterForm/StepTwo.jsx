import Button from '@mui/material/Button';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

function StepTwo(props) {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    login: Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
    password: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
    password2: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required'),
  });

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit} validationSchema={validate}>
      {({ values }) => (
        <Form>
          <Field
            fullWidth
            sx={{ margin: '12px 0px 12px 0px' }}
            name="email"
            component={TextField}
            label="Admin Email"
          />
          <Field fullWidth sx={{ marginBottom: '12px' }} name="login" component={TextField} label="Admin Login" />
          <Field
            fullWidth
            sx={{ marginBottom: '12px' }}
            name="password"
            component={TextField}
            type="password"
            label="Admin Password"
          />
          <Field
            fullWidth
            sx={{ marginBottom: '12px' }}
            name="password2"
            component={TextField}
            type="password"
            label="Confirm Admin Password"
          />
          <div style={{ display: 'flex' }}>
            <Button
              fullWidth
              sx={{ marginRight: '3.5px' }}
              variant="contained"
              color="error"
              type="button"
              onClick={() => props.prev(values)}
            >
              Back
            </Button>
            <Button sx={{ marginLeft: '3.5px' }} fullWidth variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default StepTwo;
