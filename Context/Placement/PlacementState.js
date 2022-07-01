import React, { useState, useContext } from 'react'
import placementContext from './PlacementContext'
import {REACT_APP_HOST} from '@env'
import adminContext from '../Admin/AdminContext'

function PlacementState(props) {

    const host = REACT_APP_HOST

    const context = useContext(adminContext)
    let {setloading} = context
    
    const [article, setarticle] = useState([])
    const [place, setplace] = useState([])
    const getplacement = async () => {
        setloading(true)
        try {

            let response = await fetch(`${host}/api/placement/getplacement`, {
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
    const getrecruiter = async () => {
        try {

            let response = await fetch(`${host}/api/placement/getRecruiter`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            const scr = await response.json();
            setplace(scr)
            // console.log(place)
        } catch (error) {
            alert(error)
        }
    }

    const addPlacement = async (data) => {
        try {

            let response = await fetch(`${host}/api/placement/addPlacement`, {
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
    const addRecruiter = async (data) => {
        try {

            let response = await fetch(`${host}/api/placement/addRecruiter`, {
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
            setplace(place.concat(scr))
        } catch (error) {
            alert(error)
        }
    }
    const deletePlacement = async (id) => {
        const response = await fetch(`${host}/api/placement/deletePlacement/${id}`, {
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
            const newNotes = article.filter((article) => { return article._id !== id })
            setarticle(newNotes)
          }
    }
    const deleteRecruiter = async (id) => {
        const response = await fetch(`${host}/api/placement/deleteRecruiter/${id}`, {
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
            const newNotes = place.filter((place) => { return place._id !== id })
            setplace(newNotes)
          }
    }


    return (
        <placementContext.Provider value={{ article, place, getplacement, deletePlacement, addPlacement, addRecruiter, deleteRecruiter, getrecruiter }}>
            {props.children}
        </placementContext.Provider>
    )
}

export default PlacementState