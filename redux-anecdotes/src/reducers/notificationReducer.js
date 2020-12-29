const notificationReducer = (state = 'Hello world', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    default: return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: { content }
  }
}

export default notificationReducer