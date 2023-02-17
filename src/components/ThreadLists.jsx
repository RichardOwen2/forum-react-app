import React from "react";
import ThreadItem from "./ThreadItem";

export default function ThreadLists({ threadList, voteHandler }) {
  if (!threadList) {
    return (
      <div className="mt-6">
        <p className="text-center">Nothing Here...</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      { threadList.map((thread) => (
        <ThreadItem key={thread.id} {...thread} voteHandler={voteHandler} />
      )) }
      <p className="text-center pb-4">End Of Story..</p>
    </div>
  );
}