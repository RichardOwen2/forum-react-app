import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginInput from '../components/LoginInput';
import BackButton from '../components/BackButton';
import logo from '../assets/logo.svg';

import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ username, email, password }) => {
    dispatch(asyncSetAuthUser({ username, email, password })).then(() => {
      navigate('/');
    }).catch((error) => {
      alert(error);
    });
  };

  return (
    <>
      <div className="overflow-hidden box-border lg:flex">
        <div className="bg-[#282c34] lg:min-h-[100vh] flex justify-center items-center basis-7/12">
          <img src={logo} className="App-logo lg:w-[75%] md:w-[50%]" alt="logo" />
        </div>
        <div className="lg:min-h-[100vh] lg:p-16 md:p-12 flex flex-1 flex-col justify-center">
          <h1 className="font-bold text-5xl">Forum React App</h1>
          <p className="mt-1">React is beautiful</p>
          <LoginInput login={onLogin} />
        </div>
      </div>
      <BackButton />
    </>
  );
}
