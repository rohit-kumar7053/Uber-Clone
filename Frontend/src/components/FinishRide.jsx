/** @format */

import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setFinishRidePanel(false);
                }}
                className="p-1 text-center w-[93%] absolute top-0"
            >
                {" "}
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
            <div className="flex items-center justify-between p-4  border-2 border-yellow-400 rounded-lg mt-4">
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

                <div className="mt-10 w-full">
                    <Link
                        to={"/captain-home"}
                        className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold text-lg p-3 rounded-lg"
                    >
                        Finish Ride
                    </Link>
                    <p className="text-red-500 text-center mt-10 text-xs font-semibold ">
                        Note : Please click on finish ride button if you have
                        completed the payment
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinishRide;
