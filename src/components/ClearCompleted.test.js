import React from 'react';
import {shallow} from 'enzyme'
import {ClearCompletedButton} from './ClearCompleted'

describe('clear completed button', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ClearCompletedButton />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call clear completed function after button click', () => {
    const clearCompletedSpy = jest.fn()
    const wrapper = shallow(<ClearCompletedButton clearCompleted={clearCompletedSpy}/>)
    wrapper.find('button').simulate('click')
    expect(clearCompletedSpy).toHaveBeenCalled()
  })
})