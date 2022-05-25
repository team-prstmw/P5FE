import { Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';

import { RegisterAdminDataStep } from './RegisterAdminDataStep';
import { RegisterCompanyDataStep } from './RegisterCompanyDataStep';

const STEPS_LABELS = ['Company Account', 'Admin Account'];

type RegisterData = {
  email: string;
  companyName: string;
  city: string;
  login: string;
  password: string;
  repeatPassword: string;
};

export function RegisterForm() {
  const [data, setData] = useState<RegisterData>({
    email: '',
    companyName: '',
    city: '',
    login: '',
    password: '',
    repeatPassword: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = () => {
    console.log('Form Submitted', data);
  };

  const handleNextStep = (newData: RegisterData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest();
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: RegisterData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      <Stepper alternativeLabel activeStep={currentStep} sx={{ margin: 3 }}>
        {STEPS_LABELS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep === 0 ? (
        <RegisterCompanyDataStep label={STEPS_LABELS[0]} nextStep={handleNextStep} data={data} />
      ) : (
        <RegisterAdminDataStep
          label={STEPS_LABELS[1]}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          data={data}
        />
      )}
    </>
  );
}