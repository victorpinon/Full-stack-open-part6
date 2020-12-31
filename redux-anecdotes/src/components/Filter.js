import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => { 
  const handleChange = (event) => {
    event.preventDefault()
    const filterText = event.target.value
    props.filterChange(filterText)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(
  null, 
  { filterChange }
)(Filter)