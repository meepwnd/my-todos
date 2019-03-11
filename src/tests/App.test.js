import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});