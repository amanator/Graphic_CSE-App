import React, { useState } from 'react'
import AdminContext from './AdminContext'

function AdminState(props){

  const [admin, setadmin] = useState(true)

    const login = async(data)=>{
        if(data.username === 'admin' && data.password==="gehuadmin")
        {
            setadmin(true);
        }
        else
        {
            alert("Wrong Credentials")
        }
    }
    const logout = async(data)=>{
      setadmin(false)
    }
    
    return (
        <AdminContext.Provider value={{ admin, login, logout }}>
          {props.children}
        </AdminContext.Provider>
      )
}

export default AdminState