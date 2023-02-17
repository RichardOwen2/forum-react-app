import React, { useEffect } from "react";
import useInput from "../hooks/useInput";

export default function AddThread({ titleChange }) {
  const [titleInput, onTitleInputChange] = useInput('');

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
      let text = document.getElementById('body');
      function resize() {
        text.style.height = 'auto';
        if (text.scrollHeight < 80) {
          text.style.height = '80px';
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

  return (
    <div className="w-full shadow-md bg-white rounded-lg pt-2 pb-2 flex">
      <input
        type="text"
        className="form-control flex-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ml-2"
        value={titleInput}
        onChange={(e) => { titleChange(e), onTitleInputChange(e) }}
        placeholder="Add Thread..."
      />
      <button
        className="mx-2 px-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        +
      </button>
    </div>

  );
}
