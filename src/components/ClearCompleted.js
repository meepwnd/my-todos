import React from 'react'
import {connect} from 'react-redux'
import {clearCompleted} from '../actions/actions'

const ClearCompletedButton = ({clearCompleted}) => (
    <button onClick={clearCompleted}>Clear completed</button>
)

export default connect(null, {clearCompleted})(ClearCompletedButton)