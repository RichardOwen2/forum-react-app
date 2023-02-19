import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

function VoteButton({
  id, upVotes, downVotes, authUser, handler, display,
}) {
  const vote = (user) => {
    const up = upVotes.includes(user);
    const down = downVotes.includes(user);

    if (up) {
      return 1;
    }

    if (down) {
      return -1;
    }

    return 0;
  };

  if (authUser === null) {
    return (
      <>
        <button
          type="button"
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={() => handler.needAuth()}
        >
          <FaAngleUp />
          <p>{upVotes.length}</p>
        </button>
        <button
          type="button"
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
    );
  }

  if (authUserVote === 1) {
    return (
      <>
        <button
          type="button"
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.delete(e, id)}
        >
          <FaAngleUp style={{ color: 'green' }} />
          <p>{upVotes.length}</p>
        </button>
        <button
          type="button"
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
          type="button"
          className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
          onClick={(e) => handler.up(e, id)}
        >
          <FaAngleUp />
          <p>{upVotes.length}</p>
        </button>
        <button
          type="button"
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
        type="button"
        className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
        onClick={(e) => handler.up(e, id)}
      >
        <FaAngleUp />
        <p>{upVotes.length}</p>
      </button>
      <button
        type="button"
        className="flex items-center px-1 hover:bg-gray-100 rounded-lg active:bg-gray-300"
        onClick={(e) => handler.down(e, id)}
      >
        <FaAngleDown />
        <p>{downVotes.length}</p>
      </button>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  handler: PropTypes.shape({
    up: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    needAuth: PropTypes.func.isRequired,
  }),
  display: PropTypes.bool,
};

VoteButton.defaultProps = {
  display: false,
  authUser: null,
  handler: null,
};

export default VoteButton;
