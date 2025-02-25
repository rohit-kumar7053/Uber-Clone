/** @format */

import React from "react";

const CaptainDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-3">
                    <img
                        className="h-10 w-10 rounded-full object-cover "
                        src="https://t4.ftcdn.net/jpg/04/62/40/55/360_F_462405552_OKCZsIPaFydzpsyR8RUlMhqhMCqUWkqR.jpg"
                        alt=""
                    />
                    <h4 className="text-lg font-medium">Rohit Kumar</h4>
                </div>
                <div>
                    <h4 className="text-xl font-semibold ">₹295.40</h4>
                    <p className="text-sm text-gray-600">Earned</p>
                </div>
            </div>
            <div className="flex items-start justify-center gap-5 p-3 mt-8 bg-gray-100 rounded-xl">
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-todo-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours online</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;
