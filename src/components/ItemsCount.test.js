import React from 'react';
import {shallow} from 'enzyme'
import {ItemsCount} from './ItemsCount'

describe('itemscout component with no items', () => {
  it ('should render correctly', () => {
    const wrapper = shallow(<ItemsCount />)
    expect(wrapper).toMatchSnapshot()
  })

  it ('should render correctly when 1 item left', () => {
    const completedTodosCount = 2;
    const todosCount = 3;
    const wrapper = shallow(<ItemsCount completedTodosCount={completedTodosCount} todosCount={todosCount}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it ('should render correctly when 2 items left', () => {
    const completedTodosCount = 2;
    const todosCount = 4;
    const wrapper = shallow(<ItemsCount completedTodosCount={completedTodosCount} todosCount={todosCount}/>)
    expect(wrapper).toMatchSnapshot()
  })
})