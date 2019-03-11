import React from 'react';
import { shallow } from 'enzyme';
import AddOption from '../components/AddOption';

it('renders welcome message', () => {
  const wrapper = shallow(<AddOption />);
  expect(wrapper).toMatchSnapshot();
});