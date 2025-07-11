import React, { useState, useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showError, setShowError] = useState(false); 

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!agreedToTerms) {
      setShowError(true); 
      return;
    }

    let newUrl = url;
    newUrl += isRegister ? "/api/user/register" : "/api/user/login";

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsRegister(false);
        setData({ name: "", email: "", password: "" });
        setAgreedToTerms(false);
        setShowError(false); 
        onClose();
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">

        <button onClick={onClose} className="absolute top-4 right-4 text-black text-2xl">
          <RxCross2 />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isRegister ? 'Create Account' : 'Sign In'}
        </h2>

        <form className="space-y-4" onSubmit={onLogin}>
          {isRegister && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />

         
          <div className="flex flex-col text-xs text-gray-600">
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => {
                  setAgreedToTerms(!agreedToTerms);
                  if (!agreedToTerms) setShowError(false); 
                }}
              />
              <span>
                By continuing, I agree to the{" "}
                <span className="text-blue-600 underline cursor-pointer">Terms of Use</span> and{" "}
                <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
              </span>
            </label>

            {/* 🔴 Inline Error Message */}
            {showError && (
              <span className="text-red-600 mt-1 ml-6">Please agree to the Terms and Privacy Policy</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-black text-white"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        {/* Toggle */}
        <p className="mt-4 text-center text-sm">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsRegister(false);
                  setAgreedToTerms(false);
                  setShowError(false);
                }}
                className="text-blue-600 underline"
              >
                Login here
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setIsRegister(true);
                  setAgreedToTerms(false);
                  setShowError(false);
                }}
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
