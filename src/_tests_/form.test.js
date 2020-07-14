import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form/form.js';

describe('Form tests', () => {
  it('Should render at application start ', () => {
    let app = shallow(<Form />);
    expect(app.find('#form').exists()).toBe(true);
    expect(app.find('form').exists()).toBe(true);
    expect(app.find('#methods').exists()).toBe(true);
    expect(app.find('#apiRequest').exists()).toBe(true);
  });
  it('Should update method on click of radio buttons', () => {
    let app = mount(<Form />);
    // let getButton = 
  });
});