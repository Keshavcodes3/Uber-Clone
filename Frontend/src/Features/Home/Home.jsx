import React, { useState } from "react";
import { Assets } from "../../Assets/Assets";
import LocationSearchPanel from "./Components/LocationSearchPanel";
import { MapPin } from "lucide-react";

const Locations = ({ val }) => (
  <div className="flex mt-4 p-3 border border-gray-200 active:border-gray-700 rounded-2xl gap-x-2 cursor-pointer">
    <div className="h-7 w-7 rounded-full bg-gray-200 flex justify-center items-center">
      <MapPin size={18} color="green" />
    </div>
    <h2 className="text-black font-semibold text-sm">{val}</h2>
  </div>
);

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const LocationsData = [
    "248A, Near Kapoor's Cafe, Bhopal",
    "208D, Near Malhotra's Cafe, Bhopal",
    "195C, Near Sharma's Cafe, Bhopal",
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Logo */}
      <img
        src={Assets[0].image}
        alt={Assets[0].alt}
        className="w-16 absolute left-5 top-5 z-20"
      />

      {/* Background */}
      <img
        src={Assets[1].image}
        alt="map"
        className="h-full w-full object-cover"
      />

      {/* Bottom Sheet */}
      <div
        className={`absolute w-full bg-white rounded-t-3xl p-5 shadow-xl z-20 transition-all duration-500 ease-in-out
        ${expanded ? "bottom-0 h-[90%]" : "bottom-0 h-[45%]"}`}
      >
        {/* Handle */}
        <div
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4 cursor-pointer"
        ></div>

        {/* 🔥 CONDITIONAL CONTENT */}
        {vehiclePanel ? (
          <LocationSearchPanel setVehiclePanel={setVehiclePanel} />
        ) : (
          <>
            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">Find a trip</h2>

            {/* Inputs */}
            <div className="space-y-3">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
                <span className="w-2 h-2 bg-green-500 mr-3"></span>
                <input
                  type="text"
                  placeholder="Add a pickup location"
                  className="bg-transparent w-full outline-none text-sm"
                />
              </div>

              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
                <span className="w-2 h-2 bg-red-500 mr-3"></span>
                <input
                  type="text"
                  placeholder="Enter your destination"
                  className="bg-transparent w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg mt-4 font-medium">
              Search Ride
            </button>

            {/* Locations List */}
            {expanded && (
              <div className="mt-4 overflow-auto">
                {LocationsData.map((val, idx) => (
                  <div key={idx} onClick={() => setVehiclePanel(true)}>
                    <Locations val={val} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
