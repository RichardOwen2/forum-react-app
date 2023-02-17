import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { asyncPreloadProcess } from './states/isPreload/action';

import LoginPage from './pages/LoginPage';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

import Loading from "./components/Loading";

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return (
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-cyan-700" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
