import React from 'react';
import logo from '../assets/logo.svg';

export default function NotFoundPage() {
  return (
    <div className="bg-[#282c34] min-h-[100vh] flex justify-center items-center">
      <img src={logo} className="App-logo w-[25%]" alt="logo" />
      <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold text-white">404: Not Found</h1>
    </div>
  );
}
