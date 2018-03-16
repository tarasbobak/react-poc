import React from 'react';
import { Field } from 'formik';
import Wizard from './Wizard/Wizard';
import WizardFormError from './WizardFormError/WizardFormError';

function WizardForm() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="wizard-form">
      <h1>Multistep / Form Wizard </h1>
      <Wizard
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          favoriteColor: ''
        }}
        onSubmit={(values) => {
          sleep(300).then(() => {
            console.log(JSON.stringify(values, null, 2));
          });
        }}
      >
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            return errors;
          }}
        >
          <div className="form-group row">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              className="form-control"
              component="input"
              type="text"
              placeholder="First Name"
            />
            <WizardFormError name="firstName" />
          </div>
          <div className="form-group row">
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              className="form-control"
              component="input"
              type="text"
              placeholder="Last Name"
            />
            <WizardFormError name="lastName" />
          </div>
        </Wizard.Page>
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.favoriteColor) {
              errors.favoriteColor = 'Required';
            }
            return errors;
          }}
        >
          <div className="form-group row">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              className="form-control"
              component="input"
              type="email"
              placeholder="Email"
            />
            <WizardFormError name="email" />
          </div>
          <div className="form-group row">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <Field
              name="favoriteColor"
              className="form-control"
              component="select"
            >
              <option />
              <option value="#ff0000">Red</option>
              <option value="#00ff00">Green</option>
              <option value="#0000ff">Blue</option>
            </Field>
            <WizardFormError name="favoriteColor" />
          </div>
        </Wizard.Page>
      </Wizard>
    </div>
  );
}

export default WizardForm;
