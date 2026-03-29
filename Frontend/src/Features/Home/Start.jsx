import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/cf/23/2b/cf232b30c638dd252ad6074ebd2c851c.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 p-6">
        <img
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt="Uber"
          className="w-24"
        />
      </div>

      {/* Bottom Sheet */}
      <div className="relative z-10 bg-white rounded-t-3xl p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Get started with Uber
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Ride, drive, and earn with ease
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          {/* Continue Button */}
          <button
            onClick={() => navigate("/user-signup")}
            className="w-full flex items-center justify-between bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Continue
            <ArrowRight size={20} />
          </button>

          {/* Captain CTA */}
          <button
            onClick={() => navigate("/captain-signup")}
            className="w-full flex items-center justify-between border border-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Continue as Captain 🚗
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
