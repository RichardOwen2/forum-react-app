import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineInsights } from 'react-icons/md';
import VoteButton from './VoteButton';

function TrendingItem({
  id, title, insight, upVotesBy, downVotesBy, ownerProfile, authUser, width,
}) {
  const { avatar } = ownerProfile;

  const cuttedText = (text) => {
    if (width) {
      return text.length < 32 ? text : `${text.substring(0, 32)}...`;
    }
    return text;
  };

  return (
    <Link to={`/detail/${id}`}>
      <div className="m-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex">
          <div className="min-w-fit mr-3">
            <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full xl:w-12 lg:w-10 w-8" />
          </div>
          <div>
            <p className="break-all" id={`title-${id}`}>{cuttedText(title)}</p>
          </div>
        </div>
        <div className="flex mt-3 justify-end">
          <div className="flex items-center justify-center">
            <MdOutlineInsights />
            {' '}
            <p className="ml-1">
              {insight}
            </p>
          </div>
          <VoteButton
            id={id}
            upVotes={upVotesBy}
            downVotes={downVotesBy}
            authUser={authUser}
            display
          />
        </div>
      </div>
    </Link>
  );
}

TrendingItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  ownerProfile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  insight: PropTypes.number.isRequired,
  width: PropTypes.bool.isRequired,
};

TrendingItem.defaultProps = {
  authUser: null,
};

export default TrendingItem;
