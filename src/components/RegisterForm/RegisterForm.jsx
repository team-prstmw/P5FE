import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import StepOne from '../../../src/components/RegisterForm/StepOne';
import StepTwo from '../../../src/components/RegisterForm/StepTwo';

function RegisterForm() {
  const [data, setData] = useState({
    email: '',
    companyName: '',
    companyLogin: '',
    companyPassword: '',
    companyPassword2: '',
    login: '',
    password: '',
    password2: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  // Fake Request
  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne label="Company Account" next={handleNextStep} data={data} />,
    <StepTwo label="Admin Account" next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <>
      <Stepper alternativeLabel activeStep={currentStep} sx={{ margin: 3 }}>
        {steps.map((child) => (
          <Step key={child.props.label}>
            <StepLabel>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps[currentStep]}
    </>
  );
}

export default RegisterForm;
