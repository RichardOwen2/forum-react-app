import { ActionType } from "./action";

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.thread;
    case ActionType.UP_VOTE_THREADS:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.concat([action.payload.vote.userId]),
        downVoteBy: downVoteBy.filter((id) => id !== action.payload.vote.userId),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.filter((id) => id !== action.payload.vote.userId),
        downVoteBy: downVoteBy.concat([action.payload.vote.userId]),
      };
    case ActionType.DELETE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVoteBy: upVoteBy.filter((id) => id !== action.payload.vote.userId),
        downVoteBy: downVoteBy.filter((id) => id !== action.payload.vote.userId),
      };
    case ActionType.ADD_COMMENT_THREAD:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...thread.comments]
      }
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.concat([action.payload.vote.userId]),
              downVoteBy: downVoteBy.filter((id) => id !== action.payload.vote.userId),
            };
          }
          return comment;
        })
      }
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVoteBy: downVoteBy.concat([action.payload.vote.userId]),
            };
          }
          return comment;
        })
      }
    case ActionType.DELETE_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVoteBy: downVoteBy.filter((id) => id !== action.payload.vote.userId),
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
