/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useCaptain } from "../Features/Auth/Hooks/useCaptain";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { handleGetProfile } = useCaptain();

  useEffect(() => {
    
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/captain/login");
        return;
      }

      try {
        await handleGetProfile();
      } catch (err) {
        // token invalid / expired
        localStorage.removeItem("token");
        navigate("/captain/login");
      }
    };

    checkAuth();
  }, []);

  return children;
};

export default CaptainProtectedWrapper;
