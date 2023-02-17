import React from "react";
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

export default function VoteButton({ id, upVotes, downVotes, authUser, handler, display = false }) {
  if (upVotes === undefined || downVotes === undefined) {
    return null;
  }

  const vote = (user) => {
    const up = upVotes.includes(user);
    const down = downVotes.includes(user);

    if (up) {
      return 1;
    } else if (down) {
      return -1;
    } else {
      return 0;
    }
  };

  if (authUser === null) {
    return (
      <>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={() => handler.needAuth()}
        >
          <FaAngleUp />
          <p>{upVotes.length}</p>
        </button>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={() => handler.needAuth()}
        >
          <FaAngleDown />
          <p>{downVotes.length}</p>
        </button>
      </>
    );
  }

  const authUserVote = vote(authUser.id);

  if (display) {
    return (
      <>
        <div
          className="flex items-center px-1 rounded-lg"
        >
          {authUserVote === 1 ? <FaAngleUp style={{ color: 'green' }} /> : <FaAngleUp />}
          <p>{upVotes.length}</p>
        </div>
        <div
          className="flex items-center px-1 rounded-lg"
        >
          {authUserVote === -1 ? <FaAngleDown style={{ color: 'red' }} /> : <FaAngleDown />}
          <p>{downVotes.length}</p>
        </div>
      </>
    )
  }

  if (authUserVote === 1) {
    return (
      <>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.delete(e, id)}
        >
          <FaAngleUp style={{ color: 'green' }} />
          <p>{upVotes.length}</p>
        </button>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.down(e, id)}
        >
          <FaAngleDown />
          <p>{downVotes.length}</p>
        </button>
      </>
    );
  }

  if (authUserVote === -1) {
    return (
      <>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.up(e, id)}
        >
          <FaAngleUp />
          <p>{upVotes.length}</p>
        </button>
        <button
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.delete(e, id)}
        >
          <FaAngleDown style={{ color: 'red' }} />
          <p>{downVotes.length}</p>
        </button>
      </>
    );
  }

  return (
    <>
      <button
        className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
        onClick={(e) => handler.up(e, id)}
      >
        <FaAngleUp />
        <p>{upVotes.length}</p>
      </button>
      <button
        className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
        onClick={(e) => handler.down(e, id)}
      >
        <FaAngleDown />
        <p>{downVotes.length}</p>
      </button>
    </>
  );
}