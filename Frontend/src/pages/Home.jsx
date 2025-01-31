/** @format */

import React from "react";
import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <div className="bg-cover bg-right-bottom bg-[url(https://w0.peakpx.com/wallpaper/688/139/HD-wallpaper-taxi-app-development-taxi-app-taxi-business-uber-clone-startup-business-app-development.jpg)] h-screen pt-8 flex justify-between flex-col w-full">
                <img
                    className="w-20 ml-5"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png"
                    alt="logo"
                />
                <div className="bg-white pb-7 py-4 px-4">
                    <h2 className="text-[30px] font-semibold">
                        Get Started with Uber
                    </h2>
                    <Link
                        to="/login"
                        className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
