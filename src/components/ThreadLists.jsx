import React from "react";
import ThreadItem from "./ThreadItem";

export default function ThreadLists({ threadList, voteHandler }) {
  if (!threadList || threadList.length === 0) {
    return (
      <div className="mt-6">
        <p className="text-center lg:pb-4 pb-20">Nothing Here...</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      { threadList.map((thread) => (
        <ThreadItem key={thread.id} {...thread} voteHandler={voteHandler} />
      )) }
      <p className="text-center lg:pb-4 pb-20">End Of Story..</p>
    </div>
  );
}