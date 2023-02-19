import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineInsights } from 'react-icons/md'
import VoteButton from "./VoteButton";

export default function TrendingItem({ id, title, insight, upVotesBy, downVotesBy, ownerProfile, authUser }) {
  const { avatar } = ownerProfile;

  return (
    <Link to={`/detail/${id}`}>
      <div className="m-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex">
          <div className="min-w-fit mr-3">
            <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12" />
          </div>
          <div>
            <p>{title.length < 35 ? title : (title.substring(0,35) + '...')}</p>
          </div>
        </div>
        <div className="flex mt-3 justify-end">
          <div className="flex items-center justify-center">
            <MdOutlineInsights /> <p className="ml-1">{insight}</p>
          </div>
          <VoteButton id={id} upVotes={upVotesBy} downVotes={downVotesBy} authUser={authUser} display={true} />
        </div>
      </div>
    </Link>
  );
}