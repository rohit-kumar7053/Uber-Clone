/** @format */

import React from "react";

const LocationSearchPanel = (props) => {
    console.log(props);

    // smaple array for location

    const location = [
        " Shop No202 Plotno 4, Vardhaman Plz, Sector 5, Dwarika",
        " New Bandhan Lane, 35 Abheschand Gandhi Marg, Mandvi",
        "Ground Flr, Vaibhav Co Opp Society, S K Bole Marg, Dadar (west)",
        " 84/906, 9th Floor, Barton Center, M G Road",
    ];

    return (
        <div>
            {/* this is just a sample data */}
            {location.map(function (elem, idx) {
                return (
                    <div
                        key={idx}
                        onClick={() => {
                            props.setVehiclePanel(true);
                            props.setPanelOpen(false);
                        }}
                        className="flex items-center justify-start gap-4 border-2 border-gray-50 active:border-black rounded-xl p-3 my-2"
                    >
                        <h2 className="bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full ">
                            <i className="ri-map-pin-line text-xl"></i>
                        </h2>
                        <h4 className="font-medium">{elem}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default LocationSearchPanel;
