import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboard: leaderboardReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
