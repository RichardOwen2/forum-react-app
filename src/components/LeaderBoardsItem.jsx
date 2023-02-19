import React from "react";

export default function LeaderBoardsItem({ user, score, index, width }) {
  const { avatar, name } = user;

  const cuttedText = (text) => {
    if (width) {
      return text.length < 17 ? text : text.substring(0,15) + '...';
    }
    return text;
  }

  return (
    <div className="flex m-3 p-3 bg-white border border-gray-200 rounded-lg">
      <p className="mr-3">{index + 1}{'.'}</p>
      <div className="min-w-fit">
        <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-7" />
      </div>
      <p className="ml-2 text-sm">{cuttedText(name)}</p>
      <p className="flex-1 text-right">{score}</p>
    </div>
  );
}