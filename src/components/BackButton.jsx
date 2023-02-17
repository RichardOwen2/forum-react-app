import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb"

export default function BackButton() {
  return (
    <Link className="fixed bottom-5 right-5" to="/">
      <TbArrowBack size={35}/>
    </Link>
  );
}