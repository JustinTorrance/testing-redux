import { AddTodoForm, mapStateToProps, mapDispatchToProps } from './AddTodoForm'
import { addTodo } from '../actions'

describe('AddTodoForm', () => {
  describe('AddTodoForm', () => {
    //you know how to write these tests
  })

  describe('mapStateToProps', () => {
    it('should return an object with a todos array', () => {
      const text = 'conquer testing'
      const id = 1
      const mockState = {
        todos: [{text, id, completed: false}],
        filter: 'SHOW_ALL'
      } //sufficient as long as mockState has more properties than MSTP. No need to do elaborate mockstates
      const expected = {
        todos: [{text, id, completed: false}]
      }
      const mappedProps = mapStateToProps(mockState)
      // console.log(mappedProps)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = addTodo('lets party', 1)
      const mappedProps = mapDispatchToProps(mockDispatch)
      console.log(mappedProps)
      mappedProps.handleSubmit('lets party', 1)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})