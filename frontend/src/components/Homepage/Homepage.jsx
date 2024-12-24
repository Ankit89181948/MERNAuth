import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    setLoginUser({});
   
    navigate('/Login');
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-indigo-900">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl text-indigo-700 font-bold mb-4">Welcome to the Homepage</h1>
        <p className="text-lg text-gray-700 mb-6">You are logged in!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
