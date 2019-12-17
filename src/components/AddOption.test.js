import React from 'react';
import {shallow} from 'enzyme'
import {AddOption} from './AddOption'

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<AddOption />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('Enter valid option!');
});


test('should set description on input change', () => {
  const value = 'Test todo';
  const wrapper = shallow(<AddOption />);
  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(wrapper.state('option')).toBe(value);
});

