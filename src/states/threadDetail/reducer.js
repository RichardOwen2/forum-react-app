import { ActionType } from "./action";

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.thread;
    case ActionType.UP_VOTE_THREADS:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.concat([action.payload.userId]),
        downVoteBy: downVoteBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.filter((id) => id !== action.payload.userId),
        downVoteBy: downVoteBy.concat([action.payload.userId]),
      };
    case ActionType.DELETE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.filter((id) => id !== action.payload.userId),
        downVoteBy: downVoteBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.concat([action.payload.userId]),
              downVoteBy: downVoteBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        })
      }
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.filter((id) => id !== action.payload.userId),
              downVoteBy: downVoteBy.concat([action.payload.userId]),
            };
          }
          return comment;
        })
      }
    case ActionType.DELETE_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.filter((id) => id !== action.payload.userId),
              downVoteBy: downVoteBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        })
      }
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
