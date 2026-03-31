import React from "react";
import { Assets, Vehicles } from "../../../../Assets/Assets";
import { House, MapPin, Navigation, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
const Riding = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col font-sans w-screen">
      {/* Home Button Overlay */}
      <div className="fixed top-5 left-5 z-10 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
        <Link to={'/'} className="">
          <House size={20} className="text-gray-800" />
        </Link>
      </div>

      {/* Map Section (Top 50%) */}
      <div className="h-[40%] w-full relative">
        <img
          src={Assets[1].image}
          alt="Map"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info & Payment Section (Bottom 50%) */}
      <div className="h-1/2 bg-white rounded-t-3xl -mt-8 relative z-20 px-6 py-8 flex flex-col justify-between shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
        {/* Driver & Vehicle Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="relative">
            <img
              src={Vehicles[0].image}
              alt="Car"
              className="w-24 object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              Sarthak
            </h1>
            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">
              MP05 6DW
            </h2>
            <h3 className="text-sm text-gray-500 font-medium">
              Maruti Suzuki Swift
            </h3>
          </div>
        </div>

        {/* Trip Details */}
        <div className="space-y-6 mt-0.5">
          <div className="flex items-start gap-4">
            <MapPin className="text-gray-400 mt-1" size={20} />
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                Pickup
              </p>
              <p className="text-gray-800 font-medium">
                562/11-A, Silver Oak Lane
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Navigation className="text-blue-600 mt-1" size={20} />
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                Destination
              </p>
              <p className="text-gray-800 font-medium">
                Nexus Mall, Koramangala
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Wallet className="text-green-600" size={22} />
              <p className="font-bold text-gray-800 text-lg">₹ 192.50</p>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Cash Payment
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform mt-4">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
