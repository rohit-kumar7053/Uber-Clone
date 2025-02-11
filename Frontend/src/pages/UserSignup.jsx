/** @format */

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/register`,
            newUser
        );

        if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem("token", data.token);
            navigate("/home");
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img
                    className="w-20 mb-3"
                    src="https://www.svgrepo.com/show/505031/uber-driver.svg"
                    alt="logo"
                />
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                >
                    <h3 className="text-lg font-medium mb-2">
                        What's your name
                    </h3>
                    <div className="flex gap-4 mb-6">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">
                        What's your email
                    </h3>
                    <input
                        required
                        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>

                    <input
                        required
                        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Create account
                    </button>
                </form>
                <p className="text-center">
                    Already have an Account?{" "}
                    <Link to="/login" className="text-blue-600">
                        Login here
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-[10px] leading-4">
                    By proceeding, you consent to get calls, WhatsApp or SMS
                    messages, including by automated means, from Uber and its
                    affiliates to the number provided
                </p>
            </div>
        </div>
    );
};

export default UserSignup;
