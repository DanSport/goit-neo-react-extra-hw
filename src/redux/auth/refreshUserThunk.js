import { myAxios } from '../axiosConfig';

export const refreshUserThunk = {
  pending: state => {
    state.isLoading = true;
    state.isRefreshing = true;
    state.error = false;
  },
  fulfilled: (state, { payload: { name, email } }) => {
    state.user = { name, email };
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.isLoading = false;
  },
  rejected: state => {
    state.error = true;
    state.isRefreshing = false;
    myAxios.unsetToken();
    state.isLoading = false;
  },
};
