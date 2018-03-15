import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SignupForm from './SignupForm';

configure({ adapter: new Adapter() });

describe('Test header component to render properly with properties', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      handleSubmit: () => {
      }
    };
    wrapper = shallow(<SignupForm {...props} />);
  });

  it('should be rendered properly with different properties', () => {
    const tree = renderer.create(
      <SignupForm onSubmit={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered properly', () => {
    const tree = renderer.create(
      <SignupForm>
        test
      </SignupForm>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onSubmit attribute should be of type `function`', () => {
    expect(
      typeof wrapper.props().onSubmit === 'function'
    ).toBe(true);
  });
});

