import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../hooks/useInput'

import { asyncUnsetAuthUser } from "../states/authUser/action";
import asyncPopulateUsersAndThreads from "../states/shared/action"
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";
import {
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncDeleteVoteThread,
} from "../states/threads/action"

import HeaderApp from "../components/HeaderApp"
import NavBar from "../components/NavBar"
import Trending from "../components/Trending";
import LeaderBoards from "../components/LeaderBoards";
import AddThread from "../components/AddThread";
import AddThreadModal from "../components/AddThreadModal";
import ThreadLists from "../components/ThreadLists";

export default function HomePage() {
  const {
    authUser,
    threads,
    users,
    leaderboard,
  } = useSelector((states) => states);

  const [title, onTitleHandler] = useInput('');
  const [homeNav, setHomeNav] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch])

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const addThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  }

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  const onHomeNavChangeHandler = (condition) => {
    if (authUser) {
      setHomeNav(condition);
    } else {
      if (condition) {
        setHomeNav(true);
      } else {
        navigate('/login')
      }
    }
  }

  const voteThreadHandler = {
    up: (e, id) => { e.stopPropagation(); dispatch(asyncUpVoteThread(id)) },
    down: (e, id) => { e.stopPropagation(); dispatch(asyncDownVoteThread(id)) },
    delete: (e, id) => { e.stopPropagation(); dispatch(asyncDeleteVoteThread(id)) },
    needAuth: () => { navigate('/login') },
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerProfile: users.find((user) => user.id === thread.ownerId),
    insight: thread.upVotesBy.length + thread.downVotesBy.length + thread.totalComments,
    authUser,
  }))

  const trendingThreadList = threadList.slice(0).sort((previous, current) => {
    return current.insight > previous.insight ? 1 : -1;
  }).slice(0, 3)

  let filteredThreadList

  if (homeNav) {
    filteredThreadList = threadList.slice(0).filter((thread) => {
      return thread.title.toLowerCase().includes(keyword.toLowerCase());
    })
  } else {
    filteredThreadList = threadList.slice(0).filter((thread) => {
      return thread.title.toLowerCase().includes(keyword.toLowerCase()) && thread.ownerId === authUser.id;
    })
  }

  return (
    <div className="bg-[#282c34]/10 min-h-screen">
      <HeaderApp user={authUser} signout={onSignOut} keyword={keyword} keywordChange={onKeywordChangeHandler}/>
      <main>
        <aside className="w-[25%] pl-9 pr-7 pt-5 fixed">
          <NavBar nav={homeNav} navChange={onHomeNavChangeHandler}/>
          <Trending threadList={trendingThreadList} />
          <LeaderBoards leaderboard={leaderboard} />
        </aside>
        <div className="ml-[25%] pt-5 pr-6 z-40">
          <AddThread titleChange={onTitleHandler} />
          <ThreadLists threadList={filteredThreadList} voteHandler={voteThreadHandler} />
        </div>
      </main>
      <AddThreadModal title={title} titleChange={onTitleHandler} addHandler={addThread} />
    </div>
  )
}
