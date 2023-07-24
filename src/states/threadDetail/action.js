import { ActionCreators } from 'redux-undo';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  DELETE_VOTE_THREAD_DETAIL: 'DELETE_VOTE_THREAD_DETAIL',
  ADD_COMMENT_THREAD: 'ADD_COMMENT_THREAD',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  DELETE_VOTE_COMMENT: 'DELETE_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      thread,
    },
  };
}

function upVoteThreadDetailActionCreator(vote) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}

function downVoteThreadDetailActionCreator(vote) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}

function deleteVoteThreadDetailActionCreator(vote) {
  return {
    type: ActionType.DELETE_VOTE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}

function addCommentThread(comment) {
  return {
    type: ActionType.ADD_COMMENT_THREAD,
    payload: {
      comment,
    },
  };
}

function upVoteComment(vote) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function downVoteComment(vote) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function deleteVoteComment(vote) {
  return {
    type: ActionType.DELETE_VOTE_COMMENT,
    payload: {
      vote,
    },
  };
}

function asyncReceiveThreadDetail(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.getDetailThreads(id);
      dispatch(receiveThreadDetailActionCreator(thread));
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator('Not Found'));
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(upVoteThreadDetailActionCreator({ threadId, userId: id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(downVoteThreadDetailActionCreator({ threadId, userId: id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(deleteVoteThreadDetailActionCreator({ threadId, userId: id }));
    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

function asyncAddCommentThread({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ id: threadId, content });
      dispatch(addCommentThread(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteCommentThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(upVoteComment({ userId: id, commentId }));
    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteCommentThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(downVoteComment({ userId: id, commentId }));
    try {
      await api.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteVoteCommentThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser: { id } } = getState();
    dispatch(deleteVoteComment({ userId: id, commentId }));
    try {
      await api.neutralVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(ActionCreators.jump(-1, { name: 'THREADS_DETAIL' }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  deleteVoteThreadDetailActionCreator,
  upVoteComment,
  downVoteComment,
  deleteVoteComment,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncDeleteVoteThreadDetail,
  asyncAddCommentThread,
  asyncUpVoteCommentThread,
  asyncDownVoteCommentThread,
  asyncDeleteVoteCommentThread,
};
