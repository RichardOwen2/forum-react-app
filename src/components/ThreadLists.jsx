/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { IsEmpty, Map } from 'react-lodash';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadLists({ threadList, voteHandler }) {
  return (
    <div className="mt-6">
      <IsEmpty
        value={threadList}
        yes={() => (
          <p className="text-center lg:pb-4 pb-20">Nothing Here...</p>
        )}
        no={() => (
          <Map
            collection={threadList}
            iteratee={(thread) => (
              <ThreadItem key={thread.id} {...thread} voteHandler={voteHandler} />
            )}
          >
            {(mappedList) => (
              <>
                {mappedList}
                <p className="text-center lg:pb-4 pb-20">End Of Story..</p>
              </>
            )}
          </Map>
        )}
      />
    </div>
  );
}

ThreadLists.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    totalComments: PropTypes.number.isRequired,
    ownerProfile: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    insight: PropTypes.number.isRequired,
    authUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  })),
  voteHandler: PropTypes.shape({
    up: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    needAuth: PropTypes.func.isRequired,
  }).isRequired,
};

ThreadLists.defaultProps = {
  threadList: [],
};

export default ThreadLists;
