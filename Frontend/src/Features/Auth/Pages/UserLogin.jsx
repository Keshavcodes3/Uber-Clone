import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UserLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth();
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = form;
    const user = await handleLogin(userData);

    if (user?.success) {
      console.log(user);
      setForm({ ...form, [e.target.name]: " " });
      navigate("/");
    }else{
        navigate('/user-login')
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">
          Welcome back
        </h1>
        <p className="text-gray-500 text-sm mb-6">Login to continue</p>

        {/* Card */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition">
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Captain Login */}
          <Link to="/captain-login">
            <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Login as Captain 🚗
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New here?{" "}
          <Link
            to="/user-signup"
            className="text-grayp-600 font-medium underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
