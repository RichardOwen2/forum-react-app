import React from "react";

export default function LeaderBoardsItem({ user, score, index }) {
  const { avatar, name } = user;

  return (
    <div className="flex m-3 p-3 bg-white border border-gray-200 rounded-lg">
      <p className="mr-3">{index + 1}{'.'}</p>
      <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-7" />
      <p className="ml-2">{name.length < 17 ? name : (name.substring(0, 15) + '...')}</p>
      <p className="flex-1 text-right">{score}</p>
    </div>
  );
}