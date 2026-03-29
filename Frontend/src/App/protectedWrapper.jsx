import React, { useEffect } from "react";
import { useAuth } from "../Features/Auth/Hooks/useAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProtectedWrapper = ({children}) => {
    const Navigate=useNavigate()
  const { handleGetProfile } = useAuth();
  useEffect(() => {
    handleGetProfile();
  },[]);
  const {user}=useSelector((state)=>state.auth)
  if (!user) {
    Navigate('/user-login')
  }

  return children
};

export default ProtectedWrapper;
