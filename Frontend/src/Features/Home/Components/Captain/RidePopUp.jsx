import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RideConfirmation from "./ConfirmRide";
const RidePopUp = ({ expanded, setexpanded }) => {
  const [confirmPageOpen, setconfirmPageOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {confirmPageOpen ? (
        <RideConfirmation/>
      ) : (
        <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
          <h2 className="font-semibold">New Ride Request</h2>

          <div className="flex justify-between items-center">
            <img
              src="https://i.pinimg.com/736x/ff/9b/25/ff9b258e8e696d0e84e891eeb4f4bbfd.jpg"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Harshita Patel</h1>
              <h1 className="text-md">2.2Km</h1>
            </div>
          </div>

          <p className="text-sm text-gray-500">Pickup: City Center</p>
          <p className="text-sm text-gray-500">Drop: Airport</p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setconfirmPageOpen(true)}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg"
            >
              Accept
            </button>

            <button
              onClick={() => setexpanded(false)}
              className="flex-1 border py-2 rounded-lg"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RidePopUp;
