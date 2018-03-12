import React, { Component } from 'react';
import cx from 'classnames';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Yup from 'yup';

import './SignupForm.scss';

const CN = 'signup-form';


export default class SignupForm extends Component {
  getValidationSchema() { // eslint-disable-line
    return Yup.object().shape({
      email: Yup.string().required('Email is required').email('Email must be valid and contain `@` symbol'),
      password: Yup.string()
        .required('Password is required')
        .min(9, 'Password must be 9 characters or longer ')
        .matches(/[A-Z]/, 'Password should contain at least one capital character')
    });
  }
  buildForm() {
    return ({
      isSubmitting, values, errors, touched
    }) => (
      <Form noValidate>
        <div className="form-group row">
          <label htmlFor="email">Enter your email</label>
          <Field
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
          {touched.email && errors.email && this.invalidFeedback(errors.email)}
        </div>
        <div className="form-group row">
          <label htmlFor="password"> Enter your password</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          {touched.password && errors.password && this.invalidFeedback(errors.password)}
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
          <label htmlFor="newsletters"> Signup for news letters</label>
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
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </Form>
    );
  }
  handleSubmit(values, { resetForm }) {// eslint-disable-line
    console.info(values); // eslint-disable-line
    resetForm();
  }
  invalidFeedback(msg) {// eslint-disable-line
    return (
      <div className={cx(`${CN}--invalid`)}>{msg}</div>
    );
  }
  render() {
    const { className } = this.props;
    return (
      <div className={cx(CN, className)}>
        <h2>Sign up to our cool newsletters</h2>
        <Formik
          initialValues={
            {
              password: '',
              email: '',
              newsletters: '' || true,
              plan: 'premium'
            }
          }
          onSubmit={this.handleSubmit}
          validationSchema={this.getValidationSchema()}
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
