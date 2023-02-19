import React from "react";
import CommentItem from "./CommentItem";

export default function CommentList({ comments, authUser, voteHandler }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="mt-6">
        <p className="text-center">Nothing Here...</p>
      </div>
    );
  }

  return (
    <div className="m-2">
      <p className="text-xl mb-7">{comments.length}{' '}Replies...</p>
      {
        comments.map((comment) => (
          <CommentItem key={comment.id} voteHandler={voteHandler} authUser={authUser} {...comment} />
        ))
      }
      <hr className="h-px my-2 bg-gray-700 border-0"></hr>
      <p className="text-center mt-4">End Of Comment Section...</p>
    </div>
  );
}