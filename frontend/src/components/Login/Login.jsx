import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = ({ setLoginUser }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    }

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/Register');
    }

    const login = () => {
        axios.post("http://localhost:3000/Login", data)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.data);
                navigate('/');
            });
    }

    return (
        <div>
            <div className="flex h-screen bg-indigo-900">
                <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
                    <header>
                        <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
                    </header>
                    <form>
                        <div>
                            <label className="block mb-2 text-indigo-500">Email</label>
                            <input
                                value={data.email}
                                onChange={handleChange}
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="email"
                                name="email"
                                placeholder='Enter Email' />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500">Password</label>
                            <input
                                value={data.password}
                                onChange={handleChange}
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="password"
                                name="password"
                                placeholder='Enter Password' />
                        </div>
                        <div>
                            <button type="button" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-3 mb-4 rounded" onClick={login}>Login</button>
                            <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>or</p>
                            <button type="button" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-3 mb-4 rounded" onClick={handleRegister}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
