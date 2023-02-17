import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  ADD_THREAD: 'ADD_THREAD',
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  DELETE_VOTE_THREAD: 'DELETE_VOTE_THREAD',
};

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  }
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  }
}

function upVoteThreadActionCreator(vote) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      vote,
    }
  }
}

function downVoteThreadActionCreator(vote) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      vote,
    }
  }
}

function deleteVoteThreadActionCreator(vote) {
  return {
    type: ActionType.DELETE_VOTE_THREAD,
    payload: {
      vote,
    }
  }
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
}

function asyncUpVoteThread(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.upVoteThread(id);
      dispatch(upVoteThreadActionCreator(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
}

function asyncDownVoteThread(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.downVoteThread(id);
      dispatch(downVoteThreadActionCreator(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
}

function asyncDeleteVoteThread(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.neutralVoteThread(id);
      dispatch(deleteVoteThreadActionCreator(vote));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
}

export {
  ActionType,
  addThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  deleteVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncDeleteVoteThread,
}
