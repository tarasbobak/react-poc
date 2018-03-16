import React from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import WizardForm from './components/WizardForm/WizardForm';
import styles from './Feedback.scss';

function Feedback() {
  return (
    <div>
      <h1>This is feedback page</h1>
      <div className={styles['examples-form-formik']}>
        <SignupForm />
      </div>
      <div className={styles['examples-form-formik']}>
        <WizardForm />
      </div>
    </div>
  );
}

export default Feedback;
