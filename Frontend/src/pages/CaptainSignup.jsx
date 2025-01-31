/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-5 flex flex-col justify-between h-screen">
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
                    <h3 className="text-lg w-full font-medium mb-2">
                        What's our captain's name
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

                    <h3 className="text-lg w-full font-medium mb-2">
                        What's our captain's email
                    </h3>
                    <input
                        required
                        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h3 className="text-lg w-full font-medium mb-2">
                        Enter Password
                    </h3>

                    <input
                        required
                        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Signup
                    </button>
                </form>
                <p className="text-center">
                    Already have an Account?{" "}
                    <Link to="/captain-login" className="text-blue-600">
                        Login here
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-[10px] leading-tight">
                    This site is protected by reCAPTCHA and the{" "}
                    <span className="underline">Google Privacy Policy </span>{" "}
                    and{" "}
                    <span className="underline"> Terms of Service apply</span>.
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;
