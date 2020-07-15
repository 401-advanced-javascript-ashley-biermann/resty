import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form/form.js';

describe('Testing the Form component', () => {
  it('Should render at application start ', () => {
    let app = shallow(<Form />);
    expect(app.find('#form').exists()).toBe(true);
    expect(app.find('form').exists()).toBe(true);
    expect(app.find('#methods').exists()).toBe(true);
    expect(app.find('#apiRequest').exists()).toBe(true);
  });
  // Does it properly store the users input into state?
  it('Should store the user\'s url input and method in state', () => {
    let app = shallow(<Form />);
    let getMethod = app.find('#get');
    let url = app.find('#urlInput');
    
    expect(app.state('method')).toBe('');
    getMethod.simulate('click');
    expect(app.state('method')).toBe('get');
    
    url.simulate('change', { target: { value: 'https://localhost:3000'} });
    expect(getMethod.exists()).toBeTruthy();
    expect(url.exists()).toBeTruthy();
    expect(app.state('value')).toBe('https://localhost:3000');
    
  });

  // Does it properly display the users input in the output area on form submit?
  it('Should display user\'s input in the output area of the form on submit', () => {
    let app = mount(<Form />);
    let getMethod = app.find('#get');
    let url = app.find('#urlInput');
    let submitForm = app.find('form');

    expect(submitForm.exists()).toBe(true);

    getMethod.simulate('click');
    url.simulate('change', { target: { value: 'testing.com/3000'} });
    submitForm.simulate('submit');
    expect(app.state('display')).toBe('get   testing.com/3000');
  });

  // Does it properly clear the state after the form is submitted?
  it('On submit, it should clear the form and state after the form is submitted', () => {
    // let form = mount(<Form />);


  });
  // Do the method selectors/checkboxes obey your styling rules?
  it('Method selector buttons should obey styling rules', () => {
    
  });
  // compares to a snapshot
  it('renders correctly', () => {
    const DOM = renderer.create(<Form />).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});