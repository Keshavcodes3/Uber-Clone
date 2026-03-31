import React from "react";
import { MapPin, Navigation, Banknote, ShieldCheck } from "lucide-react";

const RideConfirmation = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <div className="p-6 pb-2">
        <h1 className="text-2xl font-bold text-gray-900">Confirm your ride</h1>
        <p className="text-gray-500 text-sm">Your driver is arriving soon</p>
      </div>

      {/* Driver/Vehicle Card */}
      <div className="mx-4 mt-0 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/ff/9b/25/ff9b258e8e696d0e84e891eeb4f4bbfd.jpg"
              alt="Driver"
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Harshita Patel.</h2>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-400 italic">
            2.2 km
          </div>
        </div>
      </div>

      {/* Route Details */}
      <div className="m-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1 mt-1">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-0.5 h-10 bg-gray-200" />
            <MapPin className="text-black" size={18} />
          </div>
          <div className="flex flex-col justify-between py-0.5">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
                Pickup
              </p>
              <p className="text-gray-800 font-medium">City Center</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
                Destination
              </p>
              <p className="text-gray-800 font-medium">Airport</p>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gray-100 w-full" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <Banknote className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">
                Payment
              </p>
              <p className="text-gray-800 font-bold">₹452.00</p>
            </div>
          </div>
          <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            Cash
          </div>
        </div>
      </div>

      {/* OTP Section */}
      <div className="mx-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-between">
        <div className="flex flex-col items-center gap-1 px-4">
          <div className="flex gap-5">
            <ShieldCheck className="text-amber-600" size={24} />
            <p className="text-sm font-medium text-amber-900 text-opacity-80">
              Share OTP with driver
            </p>
          </div>
          <form className="flex gap-x-4">
            <input
              type="number"
              className="w-8 pl-2 h-10 flex items-center justify-center bg-white border border-amber-200 rounded-lg font-bold text-lg text-black outline-0"
            ></input>
            <input
              type="number"
              className="w-8 pl-2 h-10 flex items-center justify-center bg-white border border-amber-200 rounded-lg font-bold text-lg text-black outline-0"
            ></input>
            <input
              type="number"
              className="w-8 pl-2 h-10 flex items-center justify-center bg-white border border-amber-200 rounded-lg font-bold text-lg text-black outline-0"
            ></input>
            <input
              type="number"
              className="w-8 pl-2 h-10 flex items-center justify-center bg-white border border-amber-200 rounded-lg font-bold text-lg text-black outline-0"
            ></input>
          </form>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-0 absolute left-0 bottom-0 w-full p-4 flex flex-col gap-3">
        <button className="w-full bg-black text-white font-bold py-4 rounded-xl text-lg transition-transform active:scale-95">
          Confirm Ride
        </button>
        <button className="w-full bg-white text-red-500 font-bold py-3 rounded-xl transition-colors hover:bg-red-50">
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default RideConfirmation;
