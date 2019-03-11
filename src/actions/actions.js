import * as a from './actionTypes';

export const addOption = (option, id) => ({
	type: a.ADD_OPTION,
	payload: {
		option, 
		id
	}
});
export const toggleCompletion = (id) => ({
	type: a.TOGGLE_COMPLETION,
	id
});
export const removeAll = () => ({
	type: a.REMOVE_ALL
});
export const removeOption = (id) => ({
	type: a.REMOVE_OPTION,
	id
});
export const setVisibilityFilters = (filter) => ({
	type: a.SET_VISIBILITY_FILTER,
	filter
});
export const clearCompleted = () => ({
	type: a.CLEAR_COMPLETED
})

export const completeAll = () => ({
	type: a.COMPLETE_ALL
})
