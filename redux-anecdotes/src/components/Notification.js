import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const timeout = useRef(null)

  useEffect(() => {
    if (notification) {
      window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => {
        dispatch(removeNotification())
      }, notification.time * 1000);
    }
  }, [notification, dispatch])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification) {
    return (
      <div style={style}>
        {notification.message}
      </div>
    )
  }
  else {
    return (null)
  }
  
}

export default Notification