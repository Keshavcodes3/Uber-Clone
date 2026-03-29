import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCaptain } from "../Hooks/useCaptain";
const CaptainLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { handleLogin } = useCaptain();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await handleLogin(form);

    if (data?.success) {
      navigate("/captain/home"); 
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">
          Welcome back
        </h1>
        <p className="text-gray-500 text-sm mb-6">Log in to continue driving</p>

        {/* Card */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Forgot */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-black transition"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
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

          {/* Register CTA */}
          <Link to="/captain/signup">
            <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Sign up as Captain 🚗
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Not a captain?{" "}
          <Link to="/user/signup" className="text-black font-medium underline">
            Sign up as User
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainLogin;
