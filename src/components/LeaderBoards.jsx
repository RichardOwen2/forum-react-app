import React, { useState } from "react";
import { MdLeaderboard } from 'react-icons/md';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import LeaderBoardsItem from "./LeaderBoardsItem";

export default function LeaderBoards({ leaderboard, width }) {
  const [hidden, setHidden] = useState(true);

  const toggleClass = () => {
    setHidden(!hidden)
  };

  if (width) {
    return (
      <div className="w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-scroll lg:h-64">
        <div className="text-base font-medium ml-1 flex items-center justify-center mb-3 sticky top-0 bg-white pt-2"><MdLeaderboard className="mr-1" /> LeaderBoards</div>
        <div>
          {leaderboard.map((data, index) => (
            <LeaderBoardsItem key={`leader-${index}`} {...data} index={index} width={width} />
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className={"w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-scroll lg:h-64 " + (hidden ? "h-10" : "h-full")}>
      <div className="text-base font-medium ml-1 flex items-center justify-center mb-3 sticky top-0 bg-white pt-2">
        <button
          className="flex items-center rounded-lg"
          onClick={() => toggleClass()}
        >
          <MdLeaderboard className="mr-1" />
          <p>LeaderBoards</p>
          {hidden ? <AiOutlineDown /> : <AiOutlineUp />}
        </button>
      </div>
      <div>
        {leaderboard.map((data, index) => (
          <LeaderBoardsItem key={`leader-${index}`} {...data} index={index} width={width} />
        ))}
      </div>
    </div>
  );
}