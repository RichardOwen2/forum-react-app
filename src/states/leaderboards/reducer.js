import { ActionType } from "./action";

function leaderboardReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardReducer;
