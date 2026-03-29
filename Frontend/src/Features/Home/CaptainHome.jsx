import React, { useState } from "react";
import { Assets } from "../../Assets/Assets";

const CaptainHome = () => {
  const [expanded, setExpanded] = useState(false);
  const [location, setlocation] = useState("");
  const [destination, setdestination] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      location: location,
      destination: destination,
    };
    setlocation("");
    setdestination("");
  };

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
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`absolute w-full bg-white rounded-t-3xl p-5 shadow-xl z-20 transition-all duration-500 ease-in-out
        ${expanded ? "bottom-0 h-[90%]" : "bottom-0 h-[45%]"}`}
      >
        {/* Handle */}
        <div
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"
        ></div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Find a trip</h2>

        {/* Form */}
        <form className="space-y-3">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            <input
              type="text"
              onChange={(e) => setlocation(e.target.value)}
              placeholder="Add a pickup location"
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            <input
              type="text"
              onChange={(e) => setdestination(e.target.value)}
              placeholder="Enter your destination"
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>
        </form>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg mt-4 font-medium">
          Search Ride
        </button>
      </form>
    </div>
  );
};

export default CaptainHome;
