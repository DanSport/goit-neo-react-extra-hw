import { createSlice } from '@reduxjs/toolkit';

import { registerUser, loginUser, logoutUser, refreshUser } from './authOperations';
import { registerUserThunk } from './registerUserThunk';
import { loginUserThunk } from './loginUserThunk';
import { logoutUserThunk } from './logoutUserThunk';
import { refreshUserThunk } from './refreshUserThunk';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, registerUserThunk.pending)
      .addCase(registerUser.fulfilled, registerUserThunk.fulfilled)
      .addCase(registerUser.rejected, registerUserThunk.rejected)
      .addCase(loginUser.pending, loginUserThunk.pending)
      .addCase(loginUser.fulfilled, loginUserThunk.fulfilled)
      .addCase(loginUser.rejected, loginUserThunk.rejected)
      .addCase(logoutUser.pending, logoutUserThunk.pending)
      .addCase(logoutUser.fulfilled, logoutUserThunk.fulfilled)
      .addCase(logoutUser.rejected, logoutUserThunk.rejected)
      .addCase(refreshUser.pending, refreshUserThunk.pending)
      .addCase(refreshUser.fulfilled, refreshUserThunk.fulfilled)
      .addCase(refreshUser.rejected, refreshUserThunk.rejected);
  },
});

export const authReducer = authSlice.reducer;
