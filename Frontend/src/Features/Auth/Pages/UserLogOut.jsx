import React, { useEffect } from 'react'
import { useAuth } from '../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const UserLogOut = () => {
    const navigate=useNavigate()
    const {handleLogOut}=useAuth()
    useEffect(()=>{
        handleLogOut()
        navigate('/user/login')
    },[])
  return (
    <div>

    </div>
  )
}

export default UserLogOut