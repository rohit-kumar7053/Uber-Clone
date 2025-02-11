/** @format */

import { useState, useContext } from "react";
import { Link } from "react-router";
import axios from "axios";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password,
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/login`,
            userData
        );

        if (response.status === 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem("token", data.token);
            navigate("/home");
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img
                    className="w-20 mb-10"
                    src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                    alt="logo"
                    srcSet=""
                />
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                >
                    <h3 className="text-lg font-medium mb-2">
                        What's your email
                    </h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@gmail.com"
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>

                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="Password"
                    />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Login
                    </button>
                </form>
                <p className="text-center">
                    New Here?{" "}
                    <Link to="/signup" className="text-blue-600">
                        Create new Account
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to="/captain-login"
                    className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                >
                    Sign in as captain
                </Link>
            </div>
        </div>
    );
};

export default UserLogin;
