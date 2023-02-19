import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HeaderApp from "../components/HeaderApp";
import ThreadDetail from "../components/ThreadDetail";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncDeleteVoteThreadDetail,
  asyncAddCommentThread,
  asyncUpVoteCommentThread,
  asyncDownVoteCommentThread,
  asyncDeleteVoteCommentThread,
} from "../states/threadDetail/action"

export default function DetailPage() {
  const {
    authUser = null,
    threadDetail = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch])

  const voteThreadHandler = {
    up: (e, id) => { e.stopPropagation(); dispatch(asyncUpVoteThreadDetail(id)) },
    down: (e, id) => { e.stopPropagation(); dispatch(asyncDownVoteThreadDetail(id)) },
    delete: (e, id) => { e.stopPropagation(); dispatch(asyncDeleteVoteThreadDetail(id)) },
    needAuth: () => { navigate('/login') },
  }

  const voteCommentHandler = {
    up: (e, commentId) => { e.stopPropagation(); dispatch(asyncUpVoteCommentThread({ threadId: id, commentId })) },
    down: (e, commentId) => { e.stopPropagation(); dispatch(asyncDownVoteCommentThread({ threadId: id, commentId })) },
    delete: (e, commentId) => { e.stopPropagation(); dispatch(asyncDeleteVoteCommentThread({ threadId: id, commentId })) },
    needAuth: () => { navigate('/login') },
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const addComment = ({ content }) => {
    dispatch(asyncAddCommentThread({ id, content }));
  }

  if (!threadDetail) {
    return null;
  }

  if (threadDetail === 'Not Found') {
    navigate('/NotFound')
  }

  return (
    <div className="bg-[#282c34]/10 min-h-screen">
      <HeaderApp user={authUser} signout={onSignOut} />
      <main className="md:mx-[15%] p-8 bg-white min-h-screen shadow-md">
        <ThreadDetail voteHandler={voteThreadHandler} authUser={authUser} {...threadDetail} />
        <hr className="h-px my-6 bg-gray-700 border-0"></hr>
        <CommentInput authUser={authUser} addComment={addComment} />
        <hr className="h-px mb-6 mt-3 bg-gray-700 border-0"></hr>
        <CommentList comments={threadDetail.comments} authUser={authUser} voteHandler={voteCommentHandler} />
      </main>
    </div>
  );
}