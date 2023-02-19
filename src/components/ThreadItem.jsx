import React from "react";
import { Link } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs'
import VoteButton from "./VoteButton";
import { postedAt } from "../utils";

export default function ThreadItem({
  id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, ownerProfile, authUser, voteHandler
}) {

  const { avatar, name } = ownerProfile;
  return (
    <div className="w-full mb-5 shadow-md bg-white rounded-lg p-3">
      <Link to={`/detail/${id}`}><h3 className="text-xl font-medium">{title}</h3></Link>
      <div className="flex mt-3">
        <div className="flex">
          <div className="min-w-fit">
            <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12 mr-3" />
          </div>
          <div>
            <p>{name}</p>
            <p className="text-gray-700 text-sm">{postedAt(createdAt)}</p>
          </div>
        </div>
        <div className="ml-auto mr-5 items-center align-center flex">
          <p className="border-2 border-dotted rounded-lg p-1 text-sm bg-gray-100" style={{ borderColor: '#282c34' }}>#{category}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>{body.length < 650 ? body : (body.substring(0,600) + '...')}</p>
      </div>
      <div className="flex mt-3">
        <Link to={`/detail/${id}`} className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
          <BsFillChatFill />
          <p className="ml-2">{totalComments}{' '}Replies</p>
        </Link>
        <div className="ml-auto flex mr-3">
          <VoteButton id={id} upVotes={upVotesBy} downVotes={downVotesBy} authUser={authUser} handler={voteHandler} />
        </div>
      </div>
    </div>
  );
}