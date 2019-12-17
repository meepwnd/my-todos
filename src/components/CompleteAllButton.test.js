import React from 'react';
import {shallow} from 'enzyme'
import {CompleteAllButton} from './CompleteAllButton'

describe('clear all completed button', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CompleteAllButton />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call clear all completed function on button click', () => {
    const completeAll = jest.fn()
    const wrapper = shallow(<CompleteAllButton completeAll={completeAll}/>)
    wrapper.find('button').simulate('click')
    expect(completeAll).toHaveBeenCalled()
  })
})