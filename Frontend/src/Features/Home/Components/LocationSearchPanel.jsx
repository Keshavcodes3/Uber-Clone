import React from "react";
import { MapPin } from "lucide-react";
import { Vehicles } from "../../../Assets/Assets";

const CarDetailBox = () => (
  <>
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border hover:shadow-md transition cursor-pointer">
      {/* Left: Image */}
      <img
        src={Vehicles[0].image}
        alt="car"
        className="w-25 h-14 object-contain"
      />

      {/* Middle: Info */}
      <div className="flex-1">
        <div className="flex items-center gap-x-1.5">
          <h4 className="font-semibold text-gray-900">Uber Go</h4>
          <span className="text-sm text-gray-500">5 mins</span>
        </div>

        <p className="text-sm text-gray-500">Affordable, compact rides</p>
      </div>

      {/* Right: Price */}
      <h2 className="font-semibold text-lg text-gray-900">₹193</h2>
    </div>
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border hover:shadow-md transition cursor-pointer">
      {/* Left: Image */}
      <img
        src={Vehicles[1].image}
        alt="car"
        className="w-25 h-14 object-contain"
      />

      {/* Middle: Info */}
      <div className="flex-1">
        <div className="flex items-center gap-x-1.5">
          <h4 className="font-semibold text-gray-900">Uber Moto</h4>
          <span className="text-sm text-gray-500">15 mins</span>
        </div>

        <p className="text-sm text-gray-500">Affordable Motor cycle Rides</p>
      </div>

      {/* Right: Price */}
      <h2 className="font-semibold text-lg text-gray-900">₹350</h2>
    </div>
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border hover:shadow-md transition cursor-pointer">
      {/* Left: Image */}
      <img
        src={Vehicles[2].image}
        alt="car"
        className="w-25 h-14 object-contain"
      />

      {/* Middle: Info */}
      <div className="flex-1">
        <div className="flex items-center gap-x-1.5">
          <h4 className="font-semibold text-gray-900">Uber Auto</h4>
          <span className="text-sm text-gray-500">10 mins</span>
        </div>

        <p className="text-sm text-gray-500">Affordable Motor cycle Rides</p>
      </div>

      {/* Right: Price */}
      <h2 className="font-semibold text-lg text-gray-900">₹230</h2>
    </div>
  </>
);

const LocationSearchPanel = ({ setVehiclePanel }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      {/* Back Button */}
      <button
        onClick={() => setVehiclePanel(false)}
        className="text-sm text-gray-500"
      >
        ← Back
      </button>

      <h1 className="text-xl font-semibold">Choose a Vehicle</h1>

      <CarDetailBox />
    </div>
  );
};

export default LocationSearchPanel;
