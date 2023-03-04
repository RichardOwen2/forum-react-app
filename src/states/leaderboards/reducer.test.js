/** 
 * - leaderboardReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by GET_LEADERBOARDS action
*/


import leaderboardReducer from './reducer';

describe('leaderboardReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = leaderboardReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by GET_LEADERBOARDS action', () => {
    const initialState = null;
    const action = {
      type: 'GET_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };

    const nextState = leaderboardReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
