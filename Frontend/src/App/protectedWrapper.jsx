/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useAuth } from "../Features/Auth/Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { handleGetProfile } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/user/login");
        return;
      }

      try {
        await handleGetProfile();
      } catch (err) {
        // token invalid / expired
        localStorage.removeItem("token");
        navigate("/user/login");
      }
    };

    checkAuth();
  }, []);

  return children;
};

export default ProtectedWrapper;
