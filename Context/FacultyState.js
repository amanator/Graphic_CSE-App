import React, { useState } from 'react'
import FacultyContext from './FacultyContext'

function FacultyState(props){
    const data = [
        {
            _id:"23232",
            name:"Dr. Mahantesh Pattanshetti",
            position:"Professor",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/Image-Galleries/faculty/cse/Dr.%20Mahantesh%20Pattanshetti.jpg"
        },
        {
            _id:"23232ss",
            name:"Rahul",
            position:"Head Master",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/home/gehu-dehradun.jpg"
        },
        {
            _id:"2323w2",
            name:"Anirudh",
            position:"Head Master",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/home/gehu-dehradun.jpg"
        },
        {
            _id:"a23232",
            name:"Anirudh",
            position:"Head Master",
            urlToImage:"https://www.gehu.ac.in/content/dam/gehu/home/gehu-dehradun.jpg"
        },
    ]
    const [article, setarticle] = useState(data)
    
    const getfaculty = async()=>{
        try {
            
            let response = await fetch("http://localhost:9000/getfaculty",{
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

    const addFaculty = async(data) =>{
        console.log(data)
    }
    
    const deleteFaculty = async(id) =>{
        console.log(id)
    }

    
    return (
        <FacultyContext.Provider value={{article, getfaculty, addFaculty, deleteFaculty }}>
          {props.children}
        </FacultyContext.Provider>
      )
}

export default FacultyState