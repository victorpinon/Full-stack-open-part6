import deepFreeze from 'deep-freeze'
import anecdoteReducer from '../reducers/anecdoteReducer'

describe('anecdote reducer', () => {
  const initialState = [
    {
      content: 'anecdote 1',
      id: 0,
      votes: 0
    },
    {
      content: 'anecdote 2',
      id: 1,
      votes: 0
    }
  ]

  test('an anecdote is voted', () => {
    const action = {
      type: 'VOTE',
      data: {id: 0}
    }
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState.find(a => a.id === 0).votes).toEqual(1)
  })

  test('a new anecdote is added', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      data: {content: 'This is a new anecdote'}
    }
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toHaveLength(3)
    expect(newState).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          content: 'This is a new anecdote'
        })
      ])
    )
  })
})