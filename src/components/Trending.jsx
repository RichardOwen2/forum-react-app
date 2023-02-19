import React from "react";
import { ImFire } from 'react-icons/im'
import TrendingItem from "./TrendingItem";

export default function Trending({ threadList }) {
  return (
    <div className="w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-auto h-52">
      <p className="text-base font-medium ml-1 flex items-center pt-2 pl-[23%] mb-3 sticky top-0 bg-white"><ImFire className="mr-1" />Trending Threads</p>
      {threadList.map((thread) => (
        <TrendingItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}