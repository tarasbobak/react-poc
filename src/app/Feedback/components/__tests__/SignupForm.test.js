/*eslint-disable*/
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignupForm from '../SignupForm/SignupForm';

configure({ adapter: new Adapter() });

describe('Signup form suit tests', () => {
  it('should render with specific title \'Sign up\'throwing an error', () => {
    expect(shallow(<SignupForm />).contains(<h2>Sign up</h2>)).toBe(true);
  });

});
