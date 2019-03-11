import visibilityReducer from './visibilityReducer';

describe('testing visibility reducer', () => {
	it('should return filter', () => {
		const initialState = 'SHOW_ALL';
		const action = {
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		}
		const state = visibilityReducer(initialState, action);
		expect(state).toBe('SHOW_COMPLETED')
	});
});