import React from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import WizardForm from './components/WizardForm/WizardForm';
import './Feedback.scss';

function Feedback() {
  return (
    <div>
      <h1>This is feedback page</h1>
      <div className="examples-form-formik">
        <SignupForm />
      </div>
      <div className="examples-form-formik">
        <WizardForm />
      </div>
    </div>
  );
}

export default Feedback;
