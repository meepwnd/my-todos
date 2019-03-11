import React from 'react';
import { shallow } from 'enzyme';
import {Options} from '../components/Options';

it('renders welcome message', () => {
  const wrapper = shallow(<Options/>);
  expect(wrapper).toMatchSnapshot();
});