/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
const UserSignup = () => {
    const navigate=useNavigate()
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { handleRegister } = useAuth();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userData = {
      fullname: {
        firstname: form.firstname,
        lastname: form.lastname,
      },
      email: form.email,
      password: form.password,
    };

    console.log(userData);
    const user=await handleRegister(userData)
    navigate('/home')
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">
          Create account
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Start your journey with us
        </p>

        {/* Card */}
        <div className="border rounded-2xl p-6 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex gap-3">
              <input
                name="firstname"
                placeholder="First name"
                onChange={handleChange}
                className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                name="lastname"
                placeholder="Last name"
                onChange={handleChange}
                className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

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
              Sign up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Captain CTA */}
          <Link to="/captain-signup">
            <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Sign up as Captain 🚗
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/user-login" className="text-gray-600 font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;