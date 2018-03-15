import React, { Component } from 'react';
import cx from 'classnames';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Yup from 'yup';
import InputFeedback from '../InputFeedback/InputFeedback';
import './SignupForm.scss';

const CN = 'signup-form';

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required('Please provide your email address, formatted as you@domain.com.')
    .email('Email must be valid and contain `@` symbol'),
  password: Yup.string()
    .required('Please provide your password')
    .min(9, 'Password must be 9 characters or longer ')
    .matches(/[A-Z]/, 'Password should contain at least one capital character')
    .matches(/[a-z]/, 'Password should contain at  least one lowercase char')
    .matches(/[A-Z]/, 'Password should contain at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, `
      Password should contain at least 1 number or special char (@,!,#, etc).`)
});

const INITIAL_VALUES = {
  password: '',
  email: '',
  newsletters: '' || true,
  plan: 'premium'
};

export default class SignupForm extends Component {
  buildForm() {
    return ({
      values, errors: { email, password }, touched, isValid, handleReset
    }) => {
      const isEmailHasErrors = touched.email && email;
      const isPasswordHasErrors = touched.password && password;
      return (
        <Form noValidate>
          <div className="form-group row">
            <label htmlFor="email">Enter your email</label>
            <Field
              type="email"
              name="email"
              className={cx('form-control', isEmailHasErrors && 'is-invalid')}
              id="email"
              placeholder="Email"
            />
            {isEmailHasErrors && <InputFeedback error={email} />}
          </div>
          <div className="form-group row">
            <label htmlFor="password"> Enter your password</label>
            <Field
              type="password"
              name="password"
              className={cx('form-control', isPasswordHasErrors &&
                'is-invalid')}
              id="password"
              placeholder="Password"
            />
            {isPasswordHasErrors && <InputFeedback error={password} />}
          </div>
          <div className="form-check row">
            <Field
              type="checkbox"
              name="newsletters"
              className="form-check-input"
              id="newsletters"
              placeholder="Password"
              checked={values.newsletters}
            />
            <label htmlFor="newsletters">
              Would you like to receive our newsletters ?
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="plan"> Choose your personal plan</label>
            <Field
              component="select"
              name="plan"
              className="form-control"
              id="plan"
            >
              <option value="free">Free</option>
              <option value="premium">Premium</option>
              <option value="gold">Gold</option>
            </Field>
          </div>
          <div className="row">
            <button
              onClick={handleReset}
              className={cx(`${CN}--reset-btn`, 'btn', 'btn-outline-secondary')}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </Form>);
    };
  }
  handleSubmit(values, formikBag) {
    const { resetForm, setErrors } = formikBag;
    let userData = { //eslint-disable-line
      userInfo: {
        email: values.email,
        password: values.password
      },
      plan: values.plan,
      newsletters: values.newsletters
    };
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    sleep(2000).then(() => {
      if (values.email === 'ivan@gmail.com') {
        const msg = `Email ${values.email} is already taken try another :
         ${values.email}-1 ${values.email}213`;
        setErrors({ email: msg });
      } else {
        console.log(userData); //eslint-disable-line
        resetForm();
      }
    });
  }
  render() {
    const { className } = this.props;
    return (
      <div className={cx(CN, className)}>
        <h2>Sign up</h2>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={this.handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
          render={this.buildForm()}
        />
      </div>);
  }
}

SignupForm.defaultProps = {
  className: ''
};
SignupForm.propTypes = {
  /**
   * className - classes which can be passed from parent
   */
  className: PropTypes.string
};
