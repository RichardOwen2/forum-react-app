import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
} from './action';

const fakeProfileResponse = {
  id: "id",
  name: "name",
  email: "email",
  avatar: "avatar",
};

const fakeLoginResponse = {
  token: "token",
}

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('authUser', () => {
  beforeEach(() => {
    api._putAccessToken = api.putAccessToken;
    api._getOwnProfile = api.getOwnProfile;
    api._login = api.login;
  });

  afterEach(() => {
    api.putAccessToken = api._putAccessToken;
    api.getOwnProfile = api._getOwnProfile;
    api.login = api._login;

    delete api._putAccessToken;
    delete api._getOwnProfile;
    delete api._login;
  });

  describe('asyncSetAuthUser thunk', () => {
    it('should dispatch action correctly when data fetching success', async () => {
      api.login = () => Promise.resolve(fakeLoginResponse);
      api.getOwnProfile = () => Promise.resolve(fakeProfileResponse)
      api.putAccessToken = () => null;

      const dispatch = jest.fn()

      await asyncSetAuthUser({ email: "email", password: "password" })(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeProfileResponse));
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action and return error.message correctly when data fetching failed', async () => {
      api.login = () => Promise.reject(fakeErrorResponse);
      api.getOwnProfile = () => Promise.reject(fakeErrorResponse)
      api.putAccessToken = () => null;

      const dispatch = jest.fn();

      window.alert = jest.fn();

      await asyncSetAuthUser({ email: "email", password: "password" })(dispatch).catch((error) => alert(error));

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
  });

  describe('asyncUnsetAuthUser', () => {
    it('should dispatch action correctly when data fetching success', async () => {
      api.putAccessToken = () => null;

      const dispatch = jest.fn();

      asyncUnsetAuthUser()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
  })
});
