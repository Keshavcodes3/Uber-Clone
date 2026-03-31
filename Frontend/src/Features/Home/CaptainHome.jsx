import React from "react";
import { Assets } from "../../Assets/Assets";
import { Clock, IndianRupee, Star, LogOut } from "lucide-react";
import RidePopUp from "./Components/Captain/RidePopUp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaptainHome = () => {
  const [isOnline, setisOnline] = useState(false);
  const [expanded, setexpanded] = useState(true);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/captain/profile");
  };

  return (
    <>
      <div className="h-screen w-full relative bg-gray-100">
        {/* 🗺️ Top Map Section */}
        <div className="h-[52%] w-full">
          <img
            src={Assets[1].image}
            alt="map"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleProfileClick}
            className="h-7 w-7 absolute top-2 right-2 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition"
          >
            <h1 className="right-3 top-1">
              <LogOut size={21} />
            </h1>
          </button>
        </div>

        {/* 🚗 Bottom Sheet */}
        {expanded && (
          <div className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-lg p-5 flex flex-col gap-5">
            {/* Handle (like Uber) */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto"></div>

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

            {/* Ride Popup */}
            <RidePopUp expanded={expanded} setexpanded={setexpanded} />
          </div>
        )}

        {/* Navigate to profile when not expanded */}
        {!expanded && handleProfileClick()}
      </div>
    </>
  );
};

export default CaptainHome;
