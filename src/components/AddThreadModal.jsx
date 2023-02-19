import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsFillChatFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import useInput from '../hooks/useInput';

function AddModal({ title, titleChange, addHandler }) {
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [height, setHeight] = useState(80);

  useEffect(() => {
    const height = document.getElementById('body').scrollHeight;
    if (height > 80) {
      setHeight(height);
    } else {
      setHeight(80);
    }
  });

  return (
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="addModal" tabIndex="-1" aria-labelledby="add-new-thread" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="modal-title">
              Add New Thread
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body relative p-4">
            <div className="mb-6">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
              <input
                type="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="Title Thread"
                value={title}
                onChange={titleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900">Body</label>
              <textarea
                type="body"
                id="body"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 overflow-hidden resize-none"
                style={{ height: `${height}px` }}
                placeholder="What Do You Think?"
                value={body}
                onChange={onBodyChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
              <input
                type="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2"
                placeholder="Category?"
                value={category}
                onChange={onCategoryChange}
              />
            </div>
          </div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <div className="flex">
              <button
                type="button"
                className="flex items-center px-4 py-2 hover:bg-red-100 rounded-lg active:bg-red-300"
                data-bs-dismiss="modal"
              >
                <MdCancel />
                <p className="ml-2">Cancel</p>
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 hover:bg-green-100 rounded-lg active:bg-green-300"
                data-bs-dismiss="modal"
                onClick={() => addHandler({ title, body, category })}
              >
                <BsFillChatFill />
                <p className="ml-2">Add Thread</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AddModal.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
};

export default AddModal;
