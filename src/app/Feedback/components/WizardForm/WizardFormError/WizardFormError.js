import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

function WizardFormError({ name }) {
  return (
    <Field
      name={name}
      render={({ form: { touched, errors } }) => {
        const showError = touched[name] && errors[name];

        return showError ? <span>{errors[name]}</span> : null;
      }}
    />
  );
}

WizardFormError.propTypes = {
  name: PropTypes.string.isRequired
};

export default WizardFormError;
