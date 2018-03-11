/* eslint-disable */
import React, { Component } from 'react';
import cx from 'classnames';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Yup from 'yup';

import './SignupForm.scss';

const CN = 'signup-form';


export default class SignupForm extends Component {
  
  buildForm() {
    return ({ isSubmitting, isValid }) => (
      <Form>
        <div className="form-group row">
          <label htmlFor="email">Enter your email</label>
          <Field
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"/>
        </div>
        <div className="form-group row">
          <label htmlFor="password"> Enter your password</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"/>
        </div>
        <div className="form-check">
          <Field
            type="checkbox"
            name="newsletters"
            className="form-check-input"
            id="newsletters"
            placeholder="Password"/>
          <label htmlFor="newsletters"> Signup for news letters</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}>
          Submit
        </button>
        {console.log({ isSubmitting, isValid })}
      </Form>
    );
  }
  
  handleSubmit(values) {
    console.log(values);
  }
  
  render() {
    const { className } = this.props;
    return (
      <div className={cx(CN, className)}>
        <h2>Sign up our cool newsletters</h2>
        <Formik
          initialValues={
            { password: '', email: '', newsletters: '' }
          }
          onSubmit={this.handleSubmit}
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
