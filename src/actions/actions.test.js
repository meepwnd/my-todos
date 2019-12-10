import * as actions from './actions';

describe('testing action creators', () => {
	it('should setup add option action object', () => {
		expect(actions.addOption('test action')).toEqual({
			type: 'ADD_OPTION',
			payload: {
				option: 'test action',
				id: expect.any(String)
			}
		})
	} );
	it('should setup should toggle completion action object', () => {
		expect(actions.toggleCompletion('123')).toEqual({
			type: 'TOGGLE_COMPLETION',
			id: '123'
		})
	});
	it('should should setup remove option action object', () => {
		expect(actions.removeOption('123')).toEqual({
			type: 'REMOVE_OPTION',
			id: '123'
		});
	});
	it('should should setup fisibility filter action object', () => {
		expect(actions.setVisibilityFilters('TEST_FILTER')).toEqual({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'TEST_FILTER'
		});
	});
	
})