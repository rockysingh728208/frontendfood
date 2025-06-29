import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(true); 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">

      
        <button onClick={onClose} className="absolute top-4 right-4 text-black text-2xl">
          <RxCross2 />
        </button>

      
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isRegister ? 'Create Account' : 'Sign In'}
        </h2>

        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

      
        <p className="mt-4 text-center text-sm">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-blue-600 underline"
              >
                Click here
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-600 underline"
              >
                Create Account
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
