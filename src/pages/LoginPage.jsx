import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginInput from "../components/LoginInput";
import BackButton from "../components/BackButton";
import logo from '../assets/logo.svg';

import { asyncSetAuthUser } from "../states/authUser/action";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ username, email , password }) => {
    dispatch(asyncSetAuthUser({ username, email , password }));
    navigate('/');
  };

  return (
    <>
      <div className="overflow-hidden box-border flex">
        <div className="bg-[#282c34] min-h-[100vh] flex justify-center items-center basis-7/12">
          <img src={logo} className="App-logo w-[75%]" alt="logo" />
        </div>
        <div className="min-h-[100vh] p-16 flex flex-1 flex-col justify-center">
          <h1 className="font-bold text-5xl">Forum React App</h1>
          <p className="mt-1">React is beautiful</p>
          <LoginInput login={onLogin}/>
        </div>
      </div>
      <BackButton />
    </>
  );
}