import visibilityReducer from './visibilityReducer';

describe('testing visibility reducer', () => {
	it('should set visibility filter', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'test'
    }
    const state = visibilityReducer('', action)
    expect(state).toBe('test')
  })
});