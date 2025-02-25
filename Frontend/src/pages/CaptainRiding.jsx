/** @format */

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);
    useGSAP(
        function () {
            if (finishRidePanel) {
                gsap.to(finishRidePanelRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(finishRidePanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [finishRidePanel]
    );

    return (
        <div className="h-screen ">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img
                    className="w-16"
                    src="https://www.svgrepo.com/show/505031/uber-driver.svg"
                    alt="logo"
                />
                <Link
                    to={"/captain-home"}
                    className="h-10 w-10 bg-white flex items-center justify-center rounded-full "
                >
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-4/5  ">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="map-image"
                />
            </div>
            <div
                onClick={() => {
                    setFinishRidePanel(true);
                }}
                className="h-1/5 relative flex items-center justify-between bg-yellow-400 p-6"
            >
                <h5 className="p-1 text-center w-[86%] absolute top-0">
                    {" "}
                    <i className="text-3xl text-gray-700 ri-arrow-up-wide-fill"></i>
                </h5>
                <h4 className="text-xl font-semibold ">
                    4 KM <span>away</span>
                </h4>
                <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
                    Start Ride
                </button>
            </div>

            <div
                ref={finishRidePanelRef}
                className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
            >
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    );
};

export default CaptainRiding;
