import {createStore, combineReducers} from 'redux';
import optionsReducer from '../reducers/optionsReducer';
import visibilityReducer from '../reducers/visibilityReducer';

const rootReducer = createStore(
	combineReducers({
		options: optionsReducer,
		filter: visibilityReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

export default rootReducer;