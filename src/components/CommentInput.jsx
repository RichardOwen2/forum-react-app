import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs'
import useInput from "../hooks/useInput";

export default function CommentInput({ authUser, addComment }) {
  const [content, onContentChange] = useInput('');

  useEffect(() => {
    let observe;
    if (window.attachEvent) {
      observe = function (element, event, handler) {
        element.attachEvent('on' + event, handler);
      };
    }
    else {
      observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
      };
    }

    function init() {
      let text = document.getElementById('content');
      function resize() {
        text.style.height = 'auto';
        if (text.scrollHeight < 80) {
          text.style.height = '60px';
        } else {
          text.style.height = text.scrollHeight + 'px';
        }
      }
      function delayedResize() {
        window.setTimeout(resize, 0);
      }
      observe(text, 'change', resize);
      observe(text, 'cut', delayedResize);
      observe(text, 'paste', delayedResize);
      observe(text, 'drop', delayedResize);
      observe(text, 'keydown', delayedResize);

      text.focus();

      resize();
    }

    init()
  }, [])

  if (!authUser) {
    return (
      <div className="p-3 text-center">
        <Link to={'/login'}>
          <p className="hover:text-blue-600 hover:underline">Login to reply the thread!</p>
        </Link>
      </div>
    );
  }

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
            placeholder={`Reply as ${name}`}
            value={content}
            onChange={onContentChange}
          />
        </div>
      </div>
      <button
        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg active:bg-gray-300 ml-auto mt-3"
        onClick={() => addComment({ content })}
      >
        <BsFillChatFill />
        <p className="ml-2">Add Comments</p>
      </button>
    </div>
  );
}