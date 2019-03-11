import React from 'react';
import {addOption} from '../actions/actions';
import {connect} from 'react-redux';
import uuid from 'uuid';

class AddOption extends React.Component {
	state = {
		error: ''
	}

	onSubmit = (e) => {
		e.preventDefault();
		const option = e.target.elements.inputOption.value.trim();
		const id = uuid();
		if(!option) {
 			this.setState(() => ({
 				error: 'Enter valid option!'
 			})) 
 		} else if (this.props.options.includes(option)) {
 			this.setState(() => ({
 				error: 'This option already exists!'
 			})) 
 		} else {
 			this.props.addOption(option, id);
 			e.target.elements.inputOption.value = '';
 			this.setState(() => ({
 				error: ''
 			})) 
 		}	
	}
	
	render(){
		return (
			<form onSubmit={this.onSubmit}>
			{this.state.error && <p className="error">{this.state.error}</p>}
				<input className="option-input" type='text' name='inputOption'/>
				<button className="btn-add-option">add option</button>
			</form>
		)
	}
}

const mapStateToPops = (state) => ({
	options: state.options.map((option) => (option.option))
})

const mapDispatchToProps = (dispatch) => ({
	addOption: (option, id) => dispatch(addOption(option, id))
})

export default connect(mapStateToPops, mapDispatchToProps)(AddOption);