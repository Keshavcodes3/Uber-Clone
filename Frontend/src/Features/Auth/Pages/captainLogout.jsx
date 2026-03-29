import React, { useEffect } from 'react'
import { useAuth } from '../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const CaptainLogout = () => {
    const navigate=useNavigate()
    const {handleLogOut}=useAuth()
    useEffect(()=>{
        handleLogOut()
        navigate('/captain/login')
    })
  return (
    <div></div>
  )
}

export default CaptainLogout