import React from 'react';
import PropTypes from 'prop-types';
import { BsFillChatFill } from 'react-icons/bs';

import VoteButton from './VoteButton';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  voteHandler,
}) {
  const { name, avatar } = owner;

  return (
    <>
      <div className="flex items-center">
        <div>
          <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12" />
        </div>
        <p className="ml-2">{name}</p>
        <div className="ml-auto">
          <p className="md:mr-5 text-gray-800">{postedAt(createdAt)}</p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-xl">
          {title}
          {' #'}
          {category}
        </h1>
        <p className="mt-3 text-base">{body}</p>
      </div>

      <div className="flex mt-8">
        <div className="flex items-center">
          <BsFillChatFill />
          <p className="ml-2">
            {comments.length}
            {' '}
            Replies
          </p>
        </div>
        <div className="ml-auto flex">
          <VoteButton
            id={id}
            upVotes={upVotesBy}
            downVotes={downVotesBy}
            authUser={authUser}
            handler={voteHandler}
          />
        </div>
      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  voteHandler: PropTypes.shape({
    up: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    needAuth: PropTypes.func.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
  })),
};

ThreadDetail.defaultProps = {
  authUser: null,
  comments: [],
};

export default ThreadDetail;
