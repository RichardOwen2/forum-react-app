import React from "react";
import { BsFillChatFill } from 'react-icons/bs'

import VoteButton from "./VoteButton";
import { postedAt } from '../utils'

export default function ThreadDetail({ id, title, body, category, createdAt, owner, upVotesBy, downVotesBy, comments, authUser, voteHandler }) {
  const { name, avatar } = owner;

  return (
    <>
      <div className="flex items-center">
        <div>
          <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12" />
        </div>
        <p className="ml-2">{name}</p>
        <div className="ml-auto">
          <p className="mr-5 text-gray-800">{postedAt(createdAt)}</p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-xl">{title}{' #'}{category}</h1>
        <p className="mt-3 text-base">{body}</p>
      </div>

      <div className="flex mt-8">
        <div className="flex items-center">
          <BsFillChatFill />
          <p className="ml-2">{comments.length}{' '}Replies</p>
        </div>
        <div className="ml-auto flex">
          <VoteButton id={id} upVotes={upVotesBy} downVotes={downVotesBy} authUser={authUser} handler={voteHandler} />
        </div>
      </div>
    </>
  );
}