import React, { useState } from 'react'
import NotificationContext from './NotificationContext'

function NotificationState(props){

  const data = [
    {
      _id:23232,
      date:"20/6/2022",
      title: "Mini Project",
      description: "Submission data 1 July"
    }
  ]

  const [notifications, setnotifications] = useState(data)

    const addNotification = async(data)=>{
      console.log(data)
    }
    const deleteNotification = async(id)=>{
      console.log(id)
    }
    
    return (
        <NotificationContext.Provider value={{ notifications, deleteNotification, addNotification }}>
          {props.children}
        </NotificationContext.Provider>
      )
}

export default NotificationState