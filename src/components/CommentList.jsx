import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentList({ comments, authUser, voteHandler }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="mt-6">
        <p className="text-center">Nothing Here...</p>
      </div>
    );
  }

  return (
    <div className="m-2">
      <p className="text-xl mb-7">
        {comments.length}
        {' '}
        Replies...
      </p>
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            voteHandler={voteHandler}
            authUser={authUser}
            {...comment}
          />
        ))
      }
      <hr className="h-px my-2 bg-gray-700 border-0" />
      <p className="text-center mt-4">End Of Comment Section...</p>
    </div>
  );
}

CommentList.propTypes = {
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
};

CommentList.defaultProps = {
  comments: [],
  authUser: null,
};

export default CommentList;
