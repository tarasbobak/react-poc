/*eslint-disable*/
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import {Form, Formik,Field} from 'formik';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

import SignupForm from '../SignupForm/SignupForm';

const SIGNUPFORM_INITIAL_VALUES ={
  password: '',
  email: '',
  newsletters: '' || true,
  plan: 'premium'
};

describe('<SignupForm>', () => {
  
  it('component SignupForm should match snapshot', () => {
    
    const component = renderer.create(
      <SignupForm/>
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should render with specific title \'Sign up\'throwing an error', () => {
    expect(shallow(<SignupForm/>).contains(<h2>Sign up</h2>)).toBe(true);
  });
  
  it('should initialize SignupForm state and pass down props with initial values', () => {
    const tree = shallow(<SignupForm/>);
    expect(tree.find(Formik).props().initialValues).toMatchObject(SIGNUPFORM_INITIAL_VALUES);
   
  });
  
  it('should return title text from form and be equal to Sign up', () => {
    const tree = shallow(<SignupForm/>);
    expect((tree.find('h2').text())).toBe('Sign up')
   
  });
  
  
});
