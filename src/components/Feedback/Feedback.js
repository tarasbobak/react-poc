import React, { Component } from 'react';
import PropTypes from 'prop-types';// eslint-disable-line
import { Form, Text, TextArea, Checkbox, Select, RadioGroup, Radio, NestedField } from 'react-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './Feedback.scss';

const OPTIONS = [
  {
    value: 'first',
    label: 'first',
    disabled: false
  },
  {
    value: 'second',
    label: 'second',
    disabled: false
  },
  {
    value: 'third',
    label: 'third',
    disabled: true
  }
];

const QuestionFields = () => (
  <div className="form-group">
    <label htmlFor="color">Whats your favorite color?</label>
    <Text field="color" id="color" className="question" />
    <label htmlFor="food">Whats your favorite food?</label>
    <Text field="food" id="food" className="question" />
    <label htmlFor="car">Whats type of car do you drive?</label>
    <Text field="car" id="car" className="question" />
  </div>
);
/**
 * example of custom validation
 * @param username
 */
const validate = username =>
  (!username || username.trim() === '' ?
    console.log('Username is a required field') : null);// eslint-disable-line

/**
 * react-form is really useful for collecting all form fields into one object
 * we can easily make custom styles
 * ! there is no component for date, so we need to use 'date-picker' and 'moment'
 * ! there is no native validation, so we have only 2 ways to solve this problem
 *    1. use custom validation (example in 'first name' field)
 *    2. use attributes from html5
 */


class ReactForm extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.state = {
      formData: {
        date: moment()
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submitForm(data) {// eslint-disable-line
    const { date } = this.state.formData;
    const selectedDate = date.toDate().toISOString();
    const formData = { ...data, selectedDate };
    console.log(formData);// eslint-disable-line
  }

  handleChange(date) {
    const formData = { ...this.state.formData, date };
    this.setState({ formData });
  }

  resetForm() {// eslint-disable-line
    this.areaForm.reset();
  }


  render() {
    return (
      <div>
        <h1>React-form</h1>

        <Form onSubmit={this.submitForm}>
          {formApi => (
            <form
              className="person-form"
              onSubmit={formApi.submitForm}
              ref={(event) => { this.areaForm = event; }}// eslint-disable-line
            >
              <div className="form-group">
                <label htmlFor="text-input-firstName">First name</label>
                <Text
                  autoComplete="given-name"
                  className="form-control text-input"
                  field="firstName"
                  id="text-input-firstName"
                  placeholder="First Name"
                  validate={validate}
                />
              </div>

              <div className="form-group">
                <label htmlFor="text-input-lastName">Last name</label>
                <Text
                  autoComplete="given-name"
                  className="form-control text-input"
                  field="lastName"
                  id="text-input-lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="text-input-email">Email</label>
                <Text
                  autoComplete="given-name"
                  className="form-control text-input"
                  field="email"
                  id="email"
                  placeholder="email"
                  type="email"
                />
              </div>

              <div className="radio-group">
                <RadioGroup field="gender">
                  <label htmlFor="radio-input-male" className="mr-2">Male</label>
                  <Radio value="male" id="radio-input-male" />
                  <label htmlFor="radio-input-female" className="mr-2">Female</label>
                  <Radio value="female" id="radio-input-female" />
                </RadioGroup>
              </div>

              <div className="form-group">
                <label htmlFor="text-area-input-education">Education</label>
                <TextArea
                  className="textarea"
                  field="education"
                  id="text-area-input-education"
                  placeholder="Write a few words about your education..."
                />
              </div>

              <div className="select-group">
                <label htmlFor="select-input-status">Status</label>
                <Select
                  field="status"
                  id="select-input-status"
                  options={OPTIONS}
                />
              </div>

              <NestedField field="questions">
                <QuestionFields />
              </NestedField>


              <div className="form-group">
                <label htmlFor="eventDate" >Date of event</label>
                <div id="date-wrap">
                  <DatePicker
                    dateFormat="DD/MM/YYYY"
                    onChange={this.handleChange}
                    selected={this.state.formData.date}
                  />
                </div>
              </div>

              <div className="check-group">
                <label htmlFor="checkbox-input-print">Print info</label>
                <Checkbox
                  className="form-control"
                  field="permission"
                  id="checkbox-input-print"
                />
              </div>

              <button type="submit">Submit</button>
              <button onClick={this.resetForm}>Reset</button>
            </form>
          )}
        </Form>
      </div>


    );
  }
}


function Feedback() {
  return (
    [
      <h1 key="header">This is feedback page</h1>,
      <ReactForm key="react-form" />
    ]
  );
}

export default Feedback;

