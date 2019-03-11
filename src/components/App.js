import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import RemoveButton from './RemoveButton';
import VisibilityFilters from './VisibilityFilters';
import '../styles/main.css';
import ClearCompletedButton from './ClearCompleted';
import ItemsCount from './ItemsCount'
import CompleteAllButton from './CompleteAllButton'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="heading">Indesicion App</h1>
				<RemoveButton />
				<ClearCompletedButton />
				<AddOption />
				<Options />
				<ItemsCount />
				<VisibilityFilters />
				<CompleteAllButton />
			</div>
		)
	}
}

