/*eslint-disable*/
import React, { Component } from 'react';
import cx from 'classnames';
import { Formik, Form, Field ,FieldArray} from 'formik';
import PropTypes from 'prop-types';
import Yup from 'yup';
import InputFeedback from '../InputFeedback';
import './PersonalInfoForm.scss';

const CN = 'personal-info-form';


const VALIDATION_SCHEMA = Yup.object().shape({
  productDescription: Yup.string()
    .required('Please, provide product description')
    .min(10, 'Description should be longer then 10 characters')
    .max(20, 'Description shouldn\'t be longer then 20 characters')
});


const INITIAL_VALUES = {
  productDescription: '',
  email: '',
  friends :['jared', 'ian', 'brent'],
  surname: '',
  dateObBirth: '',
  age: '',
  lifeStyle: ''
};

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preSavedInfo: {
        house: 'Big'
      }
    };
  }
  createForm() {
    const { preSavedInfo } = this.state; //eslint-disable-line

    return ({errors, handleReset, values}) => (
      <Form noValidate>
        <div className="form-group">
          <div className="row">
            <label htmlFor="productDescription">Product description</label>
            <Field
              id="productDescription"
              component="textarea"
              name="productDescription"
              className="form-control"
              placeholder="Enter product description"
            />
            {errors.productDescription && <InputFeedback error={errors.productDescription} />}
          </div>
        </div>
        <div className="form-group">
         <div className="row">
           <label htmlFor="email-2">Email</label>
           <Field
             id="email-2"
             type="email"
             name="email"
             className="form-control"
             placeholder="Enter your email for feedback"
           />
           {errors.email && <InputFeedback error={errors.email} />}
           
         
         </div>
        </div>
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
      </Form>);
  }
  handleSubmit(values, formikBag) {
    console.log(values);
    console.log(formikBag);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={cx(CN, className)}>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={this.handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
          render={this.createForm()}
        />

      </div>);
  }
}

PersonalInfo.defaultProps = {
  className: ''
};
PersonalInfo.propTypes = {
  /**
   * className - classes which can be passed from parent
   */
  className: PropTypes.string
};
