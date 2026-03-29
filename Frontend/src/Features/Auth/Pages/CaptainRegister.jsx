import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainRegister = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    color: "",
    plate: "",
    capacity: "",
    vehicleType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      fullname: {
        firstname: form.firstname,
        lastname: form.lastname,
      },
      email: form.email,
      password: form.password,
      vehicle: {
        color: form.color,
        plate: form.plate,
        capacity: form.capacity,
        vehicleType: form.vehicleType,
      },
    };

    console.log(payload);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-4">

      <div className="w-full max-w-md">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">
          Become a Captain
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Step {step} of 2
        </p>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded mb-6">
          <div
            className={`h-1 bg-black rounded transition-all duration-300 ${
              step === 1 ? "w-1/2" : "w-full"
            }`}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input
                name="firstname"
                placeholder="First name"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                name="lastname"
                placeholder="Last name"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Continue
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input
                name="color"
                placeholder="Vehicle color"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
              />

              <input
                name="plate"
                placeholder="Plate number"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
              />

              <input
                name="capacity"
                placeholder="Capacity"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
              />

              <select
                name="vehicleType"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
              >
                <option value="">Vehicle type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
                >
                  Register
                </button>
              </div>
            </>
          )}
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already a captain?{" "}
          <Link to="/captain-login" className="text-black font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;