import optionsReducer from "./optionsReducer";

describe("options reducer", () => {
  it("should add todo when state is empty", () => {
    const action = {
      type: "ADD_OPTION",
      payload: {
        option: "testing",
        id: "234"
      }
    };
    const state = optionsReducer([], action);
    expect(state).toEqual([
      {
        option: "testing",
        id: "234",
        completed: false
      }
    ]);
  });

  it("should add todo when state is not empty", () => {
    const stateBefore = [
      {
        option: "testing",
        id: "234",
        completed: false
      }
    ];
    const action = {
      type: "ADD_OPTION",
      payload: {
        option: "second option",
        id: "333"
      }
    };
    const state = optionsReducer(stateBefore, action);
    expect(state).toEqual([
      {
        option: "testing",
        id: "234",
        completed: false
      },
      {
				option: "second option",
				id: '333',
				completed: false
			}
    ]);
	});
	
	it('should remove option by id', () => {
		const action = {
			type: 'REMOVE_OPTION',
			id: '333'
		}
		const stateBefore = [
      {
        option: "testing",
        id: "234",
        completed: false
      },
      {
				option: "second option",
				id: '333',
				completed: false
			}
		]
		const state = optionsReducer(stateBefore, action)
		expect(state).toEqual([
      {
        option: "testing",
        id: "234",
        completed: false
      }])
  })
  it('should toggle completion of given option', () => {
    const stateBefore = [
      {
        option: "testing",
        id: "234",
        completed: false
      },
      {
				option: "second option",
				id: '333',
				completed: false
			}
    ]
    const action = {
      type: 'TOGGLE_COMPLETION',
      id: '234'
    }
    const state = optionsReducer(stateBefore, action)
    expect(state).toEqual([
      {
        option: "testing",
        id: "234",
        completed: true
      },
      {
				option: "second option",
				id: '333',
				completed: false
			}
    ])
  })
  it('should complete all options', () => {
    const stateBefore = [
      {
        option: "testing",
        id: "234",
        completed: false
      },
      {
				option: "second option",
				id: '333',
				completed: false
			}
    ]
    const action = {
      type: 'COMPLETE_ALL'
    }
    const state = optionsReducer(stateBefore, action)
    expect(state).toEqual([
      {
        option: "testing",
        id: "234",
        completed: true
      },
      {
				option: "second option",
				id: '333',
				completed: true
			}
    ])
  })
  it('should delete completed options', () => {
    const stateBefore = [
      {
        option: "testing",
        id: "234",
        completed: true
      },
      {
				option: "second option",
				id: '333',
				completed: false
      },
      {
				option: "third option",
				id: '444',
				completed: true
			}
    ]
    const action = {
      type: 'CLEAR_COMPLETED'
    }
    const state = optionsReducer(stateBefore, action)
    expect(state).toEqual([
      {
				option: "second option",
				id: '333',
				completed: false
      }
    ])
  })
});
