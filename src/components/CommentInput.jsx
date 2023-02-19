import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsFillChatFill } from 'react-icons/bs';
import useInput from '../hooks/useInput';

function CommentInput({ authUser, addComment }) {
  const [content, onContentChange] = useInput('');
  const [height, setHeight] = useState(80);

  if (!authUser) {
    return (
      <div className="p-3 text-center">
        <Link to="/login">
          <p className="hover:text-blue-600 hover:underline">Login to reply the thread!</p>
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const height = document.getElementById('content').scrollHeight;
    if (height > 80) {
      setHeight(height);
    } else {
      setHeight(80);
    }
  });

  const { name, avatar } = authUser;

  return (
    <div>
      <div className="flex items-center">
        <div>
          <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full w-12" />
        </div>
        <div className="mx-3 flex-1">
          <textarea
            type="content"
            id="content"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 overflow-hidden resize-none"
            style={{ height: `${height}px` }}
            placeholder={`Reply as ${name}`}
            value={content}
            onChange={onContentChange}
          />
        </div>
      </div>
      <button
        type="button"
        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg active:bg-gray-300 ml-auto mt-3"
        onClick={() => addComment({ content })}
      >
        <BsFillChatFill />
        <p className="ml-2">Add Comments</p>
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  addComment: PropTypes.func.isRequired,
};

CommentInput.defaultProps = {
  authUser: null,
};

export default CommentInput;
