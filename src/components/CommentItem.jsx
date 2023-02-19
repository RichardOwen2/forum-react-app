import React from "react";
import VoteButton from "./VoteButton";
import { postedAt } from '../utils'

export default function CommentItem({ id, content, createdAt, owner, upVotesBy, downVotesBy, authUser, voteHandler }) {
  const { name, avatar } = owner;

  return (
    <>
      <hr className="h-px my-2 bg-gray-700 border-0"></hr>

      <div className="mt-4 flex items-center">
        <div>
          <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12" />
        </div>
        <p className="ml-3">{name}</p>
        <div className="ml-auto">
          <p className="mr-5 text-gray-800">{postedAt(createdAt)}</p>
        </div>
      </div>

      <div className="mt-3 mb-1">
        <p>{content}</p>
      </div>

      <div className="flex items-center">
        <div className="ml-auto mb-3">
          <div className="flex">
            <VoteButton id={id} upVotes={upVotesBy} downVotes={downVotesBy} authUser={authUser} handler={voteHandler} />
          </div>
        </div>
      </div>
    </>
  );
}