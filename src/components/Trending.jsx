import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImFire } from 'react-icons/im';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import TrendingItem from './TrendingItem';

function Trending({ threadList, width }) {
  const [hidden, setHidden] = useState(true);

  const toggleClass = () => {
    setHidden(!hidden);
  };

  if (width) {
    return (
      <div className="w-full mt-6 shadow-md bg-white rounded-lg pb-2 overflow-y-auto lg:h-52 md:h-40">
        <div className="text-base font-medium ml-1 justify-center flex items-center pt-2  mb-3 sticky top-0 bg-white">
          <ImFire className="mr-1" />
          <p>Trending Threads</p>
        </div>
        <div>
          {threadList.map((thread) => (
            <TrendingItem key={thread.id} {...thread} width={width} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full shadow-md bg-white rounded-lg pb-2 overflow-y-auto ${hidden ? 'h-10' : 'h-full'}`}>
      <div className="text-base font-medium ml-1 justify-center flex items-center pt-2 sticky top-0 bg-white">
        <button
          type="button"
          className="flex items-center rounded-lg"
          onClick={() => toggleClass()}
        >
          <ImFire className="mr-1" />
          <p className="mr-1">Trending Threads</p>
          {hidden ? <AiOutlineDown /> : <AiOutlineUp />}
        </button>
      </div>
      <div className={hidden ? 'hidden' : null}>
        {threadList.map((thread) => (
          <TrendingItem key={thread.id} {...thread} width={width} />
        ))}
      </div>
    </div>
  );
}

Trending.propTypes = {
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
  width: PropTypes.bool.isRequired,
};

Trending.defaultProps = {
  threadList: [],
};

export default Trending;
