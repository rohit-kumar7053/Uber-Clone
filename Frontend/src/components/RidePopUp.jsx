/** @format */

import React from "react";

const RidePopUp = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setRidePopupPanel(false);
                }}
                className="p-1 text-center w-[93%] absolute top-0"
            >
                {" "}
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">
                New Ride Available !
            </h3>
            <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://randomuser.me/api/portraits/women/76.jpg"
                        alt="Cab Driver"
                    />
                    <h2 className="text-lg font-medium">Angel Priya</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>
            <div className="flex  flex-col justify-between items-center gap-2">
                <div className="w-full mt-5 ">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className=" text-lg ri-map-pin-range-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Jahangir Puri, Delhi{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className=" text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Adarsh Nagar, Delhi{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className=" text-lg ri-bank-card-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹ 193.20</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Cash Cash
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mt-5 ">
                    <button
                        onClick={() => {
                            props.setRidePopupPanel(false);
                        }}
                        className="mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
                    >
                        Ignore
                    </button>

                    <button
                        onClick={() => {
                            props.setConfirmRidePopupPanel(true);
                        }}
                        className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};
export default RidePopUp;
