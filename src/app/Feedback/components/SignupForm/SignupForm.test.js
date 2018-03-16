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
      handleSubmit: () => {},
      buildForm: () => {}
    };
    wrapper = shallow(<SignupForm {...props} />);
  });

  it('should be rendered properly with different properties', () => {
    const tree = renderer.create(
      <SignupForm onSubmit={() => {}} render={() => {}} />
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

  it('first child form must be `<h2/>`', () => {
    expect(
      wrapper.childAt(0).type()
    ).toBe('h2');
  });

  it('onSubmit method should be defined', () => {
    expect(
      wrapper.childAt(1).props().onSubmit
    ).toBeDefined();
  });

  it('render method should be defined', () => {
    expect(
      wrapper.childAt(1).props().render
    ).toBeDefined();
  });

  it('onSubmit method should be defined', () => {
    expect(
      wrapper.childAt(1).props().onSubmit
    ).toBeDefined();
  });

  it('SignupForm component must have 2 children', () => {
    expect(
      wrapper.children().length
    ).toBe(2);
  });

});

