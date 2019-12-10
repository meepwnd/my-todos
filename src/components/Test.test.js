import React from 'react';
import {shallow} from 'enzyme'
import Test from './Test'

it('test', () => {
  const wrapper = shallow(<Test />)
  expect(wrapper.find('p').text()).toEqual('test')
})
