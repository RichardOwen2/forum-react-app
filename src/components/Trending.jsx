import React, { useState } from "react";
import { ImFire } from 'react-icons/im'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import TrendingItem from "./TrendingItem";

export default function Trending({ threadList, width }) {
  const [hidden, setHidden] = useState(true);

  const toggleClass = () => {
    setHidden(!hidden)
  };

  if (width) {
    return (
      <div className="w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-auto lg:h-52 md:h-40">
        <div className="text-base font-medium ml-1 justify-center flex items-center pt-2  mb-3 sticky top-0 bg-white">
          <ImFire className="mr-1" />
          <p>Trending Threads</p>
        </div>
        <div>
          {threadList.map((thread) => (
            <TrendingItem key={thread.id} {...thread} width={width} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={"w-full shadow-md bg-white rounded-lg pb-2 overflow-y-auto " + (hidden ? "h-10" : "h-full")}>
      <div className="text-base font-medium ml-1 justify-center flex items-center pt-2 sticky top-0 bg-white">
        <button 
        className="flex items-center rounded-lg"
        onClick={() => toggleClass()}
        >
          <ImFire className="mr-1" />
          <p className="mr-1">Trending Threads</p>
          {hidden ? <AiOutlineDown /> : <AiOutlineUp />}
        </button>
      </div>
      <div className={hidden ? "hidden" : null}>
        {threadList.map((thread) => (
          <TrendingItem key={thread.id} {...thread} width={width} />
        ))}
      </div>
    </div>
  );
}