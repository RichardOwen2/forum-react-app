/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { IsEmpty, Map } from 'react-lodash';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentList({ comments, authUser, voteHandler }) {
  return (
    <IsEmpty
      value={comments}
      yes={() => (
        <div className="mt-6">
          <p className="text-center">Nothing Here...</p>
        </div>
      )}
      no={() => (
        <Map
          collection={comments}
          iteratee={(comment) => (
            <CommentItem
              key={comment.id}
              voteHandler={voteHandler}
              authUser={authUser}
              {...comment}
            />
          )}
        >
          {(mappedList) => (
            <div className="m-2">
              {mappedList}
              <hr className="h-px my-2 bg-gray-700 border-0" />
              <p className="text-center mt-4">End Of Comment Section...</p>
            </div>
          )}
        </Map>
      )}
    />
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
