import React from "react";
import useInput from "../hooks/useInput";

import { Link } from 'react-router-dom';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={onEmailChange}
          value={email}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={onChangePassword}
          value={password}
        />
      </div>
      <button onClick={() => login({ email, password })} className="bg-[#282c34] mt-1 py-2 px-10 text-white">Login</button>
      <p className="mt-4">
        Don&apos;t have an account?
        {' '}
        <Link className="hover:underline hover:text-blue-800 text-blue-500" to="/register">Register</Link>
      </p>
    </>
  );
}
