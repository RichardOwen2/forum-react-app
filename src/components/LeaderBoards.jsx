import React from "react";
import { MdLeaderboard } from 'react-icons/md';
import LeaderBoardsItem from "./LeaderBoardsItem";

export default function LeaderBoards({ leaderboard }) {
  return (
    <div className="w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-scroll h-64">
      <p className="text-base font-medium ml-1 flex items-center pl-[30%] mb-3 sticky top-0 bg-white pt-2"><MdLeaderboard className="mr-1" /> LeaderBoards</p>
      { leaderboard.map((data, index) => (
        <LeaderBoardsItem key={`leader-${index}`} {...data} index={index} />
      ))}
    </div>
  );
}