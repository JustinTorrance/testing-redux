import { todosReducer } from './todosReducer'
import * as actions from '../actions'

describe('todosReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = todosReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a new todo', () => {
    const expected = [{text: 'walk dog', id: 1, completed: false}]
    const initialState = []
    const action = actions.addTodo('walk dog', 1)
    const result = todosReducer(initialState, action)
    expect(result).toEqual(expected)
  })

  it('should toggle the completed property of a todo', () => {
    const expected = [{text: 'walk dog', id: 1, completed: true}]
    const initialState = [{text: 'walk dog', id: 1, completed: false}]
    const action = actions.toggleTodo(1)
    const result = todosReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})