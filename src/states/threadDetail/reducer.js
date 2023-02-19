import { ActionType } from "./action";

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.thread;
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.concat([action.payload.vote.userId]),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.vote.userId),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.vote.userId),
        downVotesBy: threadDetail.downVotesBy.concat([action.payload.vote.userId]),
      };
    case ActionType.DELETE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.vote.userId),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.vote.userId),
      };
    case ActionType.ADD_COMMENT_THREAD:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments]
      }
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.concat([action.payload.vote.userId]),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.vote.userId),
            };
          }
          return comment;
        })
      }
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVotesBy: comment.downVotesBy.concat([action.payload.vote.userId]),
            };
          }
          return comment;
        })
      }
    case ActionType.DELETE_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.vote.userId),
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
