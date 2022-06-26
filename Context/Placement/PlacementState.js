import React, { useState } from 'react'
import placementContext from './PlacementContext'

function PlacementState(props){
 
    const data1 = [
        {
            _id:"asasas",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/top-recruiter/adobe.jpg"
        },
        {
            _id:"asasa2s",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/top-recruiter/amazon.jpg"
        },
        
    ]
    const [article, setarticle] = useState([])
    const getplacement = async()=>{
        try {
            
            let response = await fetch("http://localhost:9000/getplacement",{
                method:'GET',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            
            const scr = await response.json();
            setarticle(scr)
        } catch (error) {
            alert(error)
        }
    }

    const addPlacement = async(data)=>{
        console.log(data)
    }
    const addRecruiter = async(data)=>{
        console.log(data)
    }
    const deletePlacement = async(id)=>{
        console.log(id)
    }
    const deleteRecruiter = async(id)=>{
        console.log(id)
    }
    
    const [place, setplace] = useState(data1)
    return (
        <placementContext.Provider value={{article, place, getplacement, deletePlacement, addPlacement, addRecruiter,deleteRecruiter }}>
          {props.children}
        </placementContext.Provider>
      )
}

export default PlacementState