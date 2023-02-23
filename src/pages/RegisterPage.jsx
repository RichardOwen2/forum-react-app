import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RegisterInput from '../components/RegisterInput';
import logo from '../assets/logo.svg';

import { asyncRegisterUser } from '../states/users/action';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password })).then((message) => {
      alert(message);
      navigate('/login');
    }).catch((error) => {
      alert(error);
    });
  };

  return (
    <div className="overflow-hidden box-border lg:flex">
      <div className="bg-[#282c34] lg:min-h-[100vh] flex justify-center items-center basis-7/12">
        <img src={logo} className="App-logo lg:w-[75%] md:w-[50%]" alt="logo" />
      </div>
      <div className="lg:min-h-[100vh] lg:p-16 md:p-12 flex flex-1 flex-col justify-center">
        <h1 className="font-bold text-5xl">Forum React App</h1>
        <p className="mt-1">React is beautiful</p>
        <RegisterInput register={onRegister} />
      </div>
    </div>
  );
}
