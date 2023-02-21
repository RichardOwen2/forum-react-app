import { ActionCreators } from 'redux-undo';
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
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator(vote) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      vote,
    },
  };
}

function downVoteThreadActionCreator(vote) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      vote,
    },
  };
}

function deleteVoteThreadActionCreator(vote) {
  return {
    type: ActionType.DELETE_VOTE_THREAD,
    payload: {
      vote,
    },
  };
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
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(deleteVoteThreadActionCreator({ threadId, userId: id }));
    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS' }));
    }
    dispatch(hideLoading());
  };
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
};
