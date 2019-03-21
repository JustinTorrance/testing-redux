import * as actions from './index'

describe('actions', () => {
  //setup
  it('should return a type of Add_TODO with a todo', () => {
    const text = 'learn redux'
    const id = 1
    const expected = {
      type: 'ADD_TODO',
      text,
      id
    }
    //execution
    const result = actions.addTodo(text,id)
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return a type of TOGGLE_TODO with an id', () => {
    const id = 1
    const expected = {
      type: 'TOGGLE_TODO',
      id
    }
    const result = actions.toggleTodo(id)
    expect(result).toEqual(expected)
  })

  it('should return a type of SET_FILTER', () => {
    const filter = 'SHOW_ALL'
    const expected = {
      type: 'SET_FILTER',
      filter
    }
    const result = actions.setFilter(filter)
    expect(result).toEqual(expected)

  })
})

