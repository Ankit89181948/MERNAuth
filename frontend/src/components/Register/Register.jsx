import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        con_password: ""
    });

    const handleChange = (e) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value,
        });
        console.log(userdata);
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Login');
    }

    const register = (e) => {
        e.preventDefault();
        const { name, email, password, con_password } = userdata;
        if (name && email && password && (password === con_password)) {
            axios.post("http://localhost:3000/Register", userdata)
                .then(res => {
                    alert(res.data.message);
                    navigate('/Login');
                });
        } else {
            alert("Invalid input");
        }
    }

    return (
        <div>
            <div className="flex h-screen bg-indigo-900">
                <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
                    <header>
                        <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
                    </header>
                    <form onSubmit={register}>
                        <div>
                            <input
                                onChange={handleChange}
                                value={userdata.name}
                                className="w-full p-1 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="text"
                                name="name"
                                placeholder='Enter your name' />
                        </div>
                        <div>
                            <input
                                onChange={handleChange}
                                value={userdata.email}
                                className="w-full p-1 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="text"
                                name="email"
                                placeholder='Your Email' />
                        </div>
                        <div>
                            <input
                                onChange={handleChange}
                                value={userdata.password}
                                className="w-full p-1 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="password"
                                name="password"
                                placeholder='Set Password' />
                        </div>
                        <div>
                            <input
                                onChange={handleChange}
                                value={userdata.con_password}
                                className="w-full p-1 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="password"
                                name="con_password"
                                placeholder='Confirm Password' />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-3 mb-4 mt-1 rounded">Register</button>
                            <p style={{ textAlign: "center", marginBottom: "0.5rem", fontSize: "1rem" }}>or</p>
                            <button type="button" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-3 mb-4 rounded" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
