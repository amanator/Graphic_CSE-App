import React, { useState } from 'react'
import AdminContext from './AdminContext'
import {REACT_APP_HOST} from '@env'

function AdminState(props) {
  const host = REACT_APP_HOST

  const [admin, setadmin] = useState(false)
  const [loading, setloading] = useState(false)

  const login = async (data) => {
    if (data.username === 'admin' && data.password === "gehuadmin")
      setadmin(true);
    else
      alert("Wrong Credentials")
  }
  const logout = async (data) => {
    setadmin(false)
  }

  const [contact, setcontact] = useState([])

  const getContact = async () => {
    try {

      let response = await fetch(`${host}/api/contact/getContact`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })

      const scr = await response.json();
      setcontact(scr)
    } catch (error) {
      alert(error)
    }
  }

  const addContact = async(data) =>{
    try {
      let response = await fetch(`${host}/api/contact/addContact`, {
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
      setcontact(contact.concat(scr))
      alert("Submitted")
    } catch (error) {
      alert(error)
    }
  }

  const deleteContact = async (id) => {
    const response = await fetch(`${host}/api/contact/deleteContact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // "auth-token": localStorage.getItem('token')
        }
      });
      if(response.status === 500)
        alert(response.statusText)
      else{
        const json = await response.json();
        const newNotes = contact.filter((contact) => { return contact._id !== id })
        setcontact(newNotes)
      }
}

  return (
    <AdminContext.Provider value={{ admin, login, logout, addContact, getContact, contact, deleteContact, loading, setloading }}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminState