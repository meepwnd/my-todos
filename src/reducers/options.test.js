import optionsReducer from './optionsReducer';

describe('options reducer', () => {
	it('testing add option when state is empty', () => {
		const action = {
			type: 'ADD_OPTION',
			payload: {
				option: 'testing',
				id: '234'
			}
		};
		expect(optionsReducer([], action)).toEqual([{
			option: 'testing',
			id: '234',
			completed: false
		}])
	});
	it('testing add option when state has items', () => {
		const initialState = [{
			option: 'testing',
			id: '234',
			completed: false
		}];
		const action = {
			type: 'ADD_OPTION',
			payload: {
				option: 'testing testing',
				id: '345'
			}
		};
		expect(optionsReducer(initialState, action)).toEqual([{
			option: 'testing',
			id: '234',
			completed: false
		},
		{
			option: 'testing testing',
			id: '345',
			completed: false
		}
		]);
	});
	it('testing remove all action', () => {
		const initialState = [{
			option: 'testing',
			id: '234',
			completed: false
		},
		{
			option: 'testing testing',
			id: '345',
			completed: false
		}
		];
		const action = {type: 'REMOVE_ALL'};
		expect(optionsReducer(initialState, action)).toEqual([]);
	});
	it('testing remove option', () => {
		const initialState = [{
			option: 'testing',
			id: '234',
			completed: false
		},
		{
			option: 'testing testing',
			id: '345',
			completed: false
		}
		];
		const action = {
			type: 'REMOVE_OPTION',
			id: '234'
		};
		expect(optionsReducer(initialState, action)).toEqual([{
			option: 'testing testing',
			id: '345',
			completed: false
		}]);
	});
	it('testing toggle completion', () => {
		const initialState = [{
			option: 'testing',
			id: '234',
			completed: false
		}];
		const action = {
			type: 'TOGGLE_COMPLETION',
			id: '234'
		};
		expect(optionsReducer(initialState, action)).toEqual([{
			option: 'testing',
			id: '234',
			completed: true
		}]);
	});
});