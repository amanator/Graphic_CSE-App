import React, { useState } from 'react'
import NotificationContext from './NotificationContext'
import {REACT_APP_HOST} from '@env'

function NotificationState(props) {

  const data = [{
    _id:'123',
    date: "",
    title: "Loading...",
    description:""

  }]

  const host = REACT_APP_HOST


  const [notifications, setnotifications] = useState(data)

  const getnotification = async () => {
    try {

      let response = await fetch(`${host}/api/home/notification`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })

      const scr = await response.json();
      setnotifications(scr)
    } catch (error) {
      alert(error)
    }
  }

  const addNotification = async (data) => {
    try {
      let response = await fetch(`${host}/api/home/addNotification`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.status === 500) {
        alert(response.statusText)
      }
      const scr = await response.json();
      setnotifications(notifications.concat(scr))
    } catch (error) {
      alert(error)
    }
  }
  const deleteNotification = async (id) => {
    const response = await fetch(`${host}/api/home/deleteNotification/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if(response.status === 500)
      alert(response.statusText)
    else
    {
      const json = await response.json();
      const newNotes = notifications.filter((notifications) => { return notifications._id !== id })
      setnotifications(newNotes)
    }
  }

  return (
    <NotificationContext.Provider value={{ notifications, getnotification, deleteNotification, addNotification }}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationState