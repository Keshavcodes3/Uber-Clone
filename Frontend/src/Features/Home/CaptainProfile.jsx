import React, { useState } from "react";
import { Vehicles } from "../../Assets/Assets";
import { Clock, IndianRupee, Star, LogOut, ArrowLeft } from "lucide-react";
import RidePopUp from "./Components/Captain/RidePopUp";
import { Link } from "react-router-dom";

const CaptainProfile = () => {
  const [isOnline, setisOnline] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-100 p-4 flex flex-col gap-4">
      {/* 🔝 Top Bar */}
      <div className="flex justify-between items-center">
        {/* Back */}
        <Link to={'/captain/home'} className="p-2 bg-white rounded-full shadow hover:shadow-md transition">
          <ArrowLeft size={18} />
        </Link>

        {/* Logout */}
        <Link to={'/captain/login'} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition">
          <LogOut size={16} />
          <span className="text-sm">Logout</span>
        </Link>
      </div>

      {/* 🔝 Profile Section */}
      <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={Vehicles[0].image}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-lg font-semibold">Keshav Chetri</h1>
            <p className="text-sm text-gray-500">Driver</p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-lg font-bold">₹1,240</h2>
          <p className="text-xs text-gray-500">Today's Earnings</p>
        </div>
      </div>

      {/* 📊 Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-3 shadow flex flex-col items-center">
          <Clock className="text-gray-600 mb-1" />
          <h2 className="font-semibold">10.2</h2>
          <p className="text-xs text-gray-500">Hours Online</p>
        </div>

        <div className="bg-white rounded-2xl p-3 shadow flex flex-col items-center">
          <IndianRupee className="text-gray-600 mb-1" />
          <h2 className="font-semibold">₹3200</h2>
          <p className="text-xs text-gray-500">Total Earnings</p>
        </div>

        <div className="bg-white rounded-2xl p-3 shadow flex flex-col items-center">
          <Star className="text-yellow-500 mb-1" />
          <h2 className="font-semibold">4.8</h2>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
      </div>

      {/* 🚗 Status Card */}
      <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Current Status</h2>

        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            You are {isOnline ? "Online" : "Offline"}
          </p>

          {/* Toggle (UI only) */}
          <button
            onClick={() => setisOnline(!isOnline)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
              isOnline ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isOnline ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>


    </div>
  );
};

export default CaptainProfile   ;
