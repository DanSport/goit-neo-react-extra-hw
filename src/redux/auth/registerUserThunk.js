import { myAxios } from '../axiosConfig';

export const registerUserThunk = {
  pending: state => {
    state.isLoading = true;
    state.error = false;
  },
  fulfilled: (state, { payload: { user, token } }) => {
    state.isLoading = false;
    state.user = user;
    state.token = token;
    state.isLoggedIn = true;
    state.isLoading = false;
    myAxios.setToken(token);
  },
  rejected: state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isLoading = false;
    state.error = true;
    myAxios.unsetToken();
  },
};
