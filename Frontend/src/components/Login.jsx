import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Log in to Exclusive
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your details below
          </p>
          <form className="mt-6 space-y-5">
            <input
              type="text"
              name="emailOrNumber"
              id="emailOrNumber"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
              placeholder="Email or Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Log In
              </button>
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm font-medium">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
