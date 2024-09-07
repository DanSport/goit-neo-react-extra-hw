import { myAxios } from '../axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURLPrefix = '/users';

export const registerUser = createAsyncThunk('auth/register', async (userData, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/signup`, userData, { headers: { 'Content-Type': 'application/json' } });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/login`, { email, password });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/logout`);
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, ThunkAPI) => {
  const state = ThunkAPI.getState();
  const persistedToken = state.auth.token;

  try {
    myAxios.setToken(persistedToken);
    const res = await myAxios.get(`${baseURLPrefix}/current`);
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});
