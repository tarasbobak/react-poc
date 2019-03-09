import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormikBag } from 'formik';

interface WizardFormErrorProps {
  name: string;
}

function renderFormError({ form: { touched, errors } }: any) {
  const showError = touched[name] && errors[name];

  return showError ? <span>{errors[name]}</span> : null;
}

const WizardFormError: React.SFC<WizardFormErrorProps> = ({ name }) => {
  return <Field name={name} render={renderFormError} />;
};

WizardFormError.propTypes = {
  name: PropTypes.string.isRequired
};

export default WizardFormError;
