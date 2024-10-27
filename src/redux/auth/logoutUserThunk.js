import myAxios from '../axiosConfig';

export const clearUser = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  myAxios.unsetToken();
};

export const logoutUserThunk = {
  pending: state => {
    state.isLoading = true;
    state.error = false;
  },
  fulfilled: clearUser,
  rejected: clearUser,
};
