import React from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import './Feedback.scss';

function Feedback() {
  return (
    <div>
      <h1>This is feedback page</h1>
      <div className="examples-form-formik ">
        <SignupForm />
      </div>
    </div>
  );
}

export default Feedback;
