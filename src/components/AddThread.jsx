import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function AddThread({ titleChange, authUser }) {
  const [titleInput, onTitleInputChange] = useInput('');
  const navigate = useNavigate();

  if (!authUser) {
    return (
      <div className="w-full shadow-md bg-white rounded-lg pt-2 pb-2 flex">
        <input
          type="text"
          className="form-control flex-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ml-2"
          value={titleInput}
          onChange={(e) => { titleChange(e); onTitleInputChange(e); }}
          placeholder="Add Thread..."
        />
        <button
          type="button"
          className="mx-2 px-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg"
          onClick={() => navigate('/login')}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className="w-full shadow-md bg-white rounded-lg pt-2 pb-2 flex">
      <input
        type="text"
        className="form-control flex-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ml-2"
        value={titleInput}
        onChange={(e) => { titleChange(e); onTitleInputChange(e); }}
        placeholder="Add Thread..."
      />
      <button
        type="button"
        className="mx-2 px-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        +
      </button>
    </div>
  );
}

AddThread.propTypes = {
  titleChange: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

AddThread.defaultProps = {
  authUser: null,
};

export default AddThread;
