import React, { useState, useContext } from 'react'
import FacultyContext from './FacultyContext'
import {REACT_APP_HOST} from '@env'
import adminContext from '../Admin/AdminContext'

function FacultyState(props) {
    const host = REACT_APP_HOST
   
    const [article, setarticle] = useState([])
    const context = useContext(adminContext)
    let {setloading} = context

    const getfaculty = async () => {
        setloading(true)
        try {
            let response = await fetch(`${host}/api/faculty/getfaculty`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            const scr = await response.json();
            setarticle(scr)
        } catch (error) {
            alert(error)
        }
        setloading(false)
    }

    const addFaculty = async (data) => {
        try {

            let response = await fetch(`${host}/api/faculty/addFaculty`, {
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
            setarticle(article.concat(scr))
        } catch (error) {
            alert(error)
        }
    }

    const deleteFaculty = async (id) => {
        const response = await fetch(`${host}/api/faculty/deleteFaculty/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // "auth-token": localStorage.getItem('token')
            }
          });
          if(response.status === 500)
          {
            alert(response.statusText)
          }
          else
          {
            const json = await response.json();
            // console.log(json)
            const newNotes = article.filter((article) => { return article._id !== id })
            setarticle(newNotes)
          }
    }


    return (
        <FacultyContext.Provider value={{ article, getfaculty, addFaculty, deleteFaculty }}>
            {props.children}
        </FacultyContext.Provider>
    )
}

export default FacultyState