import React from 'react';
import {connect} from 'react-redux';
import {removeAll} from '../actions/actions';

const RemoveButton = (props) => (
	<button className="btn" onClick={props.removeAll}>Remove all</button>
)

const mapDispatchToProps = (dispatch) => ({
	removeAll: () => dispatch(removeAll())
})

export default connect(null, mapDispatchToProps)(RemoveButton);