import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {  
  return (
    <div>
      {props.anecdotes
        .sort((a1, a2 ) => a2.votes - a1.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                props.voteAnecdote(anecdote)
                props.setNotification(`you voted '${anecdote.content}'`, 5)
              }}>vote</button>
            </div>
          </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())) }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

// export default AnecdoteList