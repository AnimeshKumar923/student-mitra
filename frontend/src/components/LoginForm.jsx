import React from 'react';

const LoginForm = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Log-in to your account</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail address
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter your e-mail address"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-teal-700"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        New to us? <a href="#" className="text-teal-600 hover:text-teal-700">Sign Up</a>
      </p>
    </div>
  </div>
);

export default LoginForm;
