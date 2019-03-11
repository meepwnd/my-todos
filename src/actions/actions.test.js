import * as actions from './actions';

describe('testing action creators', () => {
	it('testing add option', () => {
		expect(actions.addOption('test action', '123')).toEqual({
			type: 'ADD_OPTION',
			payload: {
				option: 'test action',
				id: '123'
			}
		})
	} );
	it('testing toggle option', () => {
		expect(actions.toggleCompletion('123')).toEqual({
			type: 'TOGGLE_COMPLETION',
			id: '123'
		})
	});
	it('testing remove options', () => {
		expect(actions.removeAll()).toEqual({
			type: 'REMOVE_ALL',
		});
	});
	it('testing remove single option', () => {
		expect(actions.removeOption('123')).toEqual({
			type: 'REMOVE_OPTION',
			id: '123'
		});
	});
	it('testing setting fisibility filters', () => {
		expect(actions.setVisibilityFilters('TEST_FILTER')).toEqual({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'TEST_FILTER'
		});
	});
	
})