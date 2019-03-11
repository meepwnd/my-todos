import React from 'react'
import {connect} from 'react-redux'
import {completeAll} from '../actions/actions'

const CompleteAllButton = ({completeAll}) => (
    <button onClick={completeAll}>Complete All</button>
)

export default connect(null, {completeAll})(CompleteAllButton)