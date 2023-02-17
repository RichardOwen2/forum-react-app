import { ActionType } from "./action";

function threadsReducer(threads = [], action= {}) {
  switch(action.type) {
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.concat([action.payload.vote.userId]),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.vote.userId),
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.vote.userId),
            downVotesBy: thread.downVotesBy.concat([action.payload.vote.userId]),
          };
        }
        return thread;
      });
    case ActionType.DELETE_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.vote.userId),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.vote.userId),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
