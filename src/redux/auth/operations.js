import { createAsyncThunk } from '@reduxjs/toolkit';
import myAxios from '../axiosConfig';

const baseURLPrefix = '/users';

export const registerUser = createAsyncThunk('auth/register', async (userData, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/signup`, userData, { headers: { 'Content-Type': 'application/json' } });
    const { token } = res.data;
    myAxios.setToken(token);
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/login`, { email, password });
    const { token } = res.data;
    myAxios.setToken(token); 
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/logout`);
    myAxios.unsetToken(); 
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, ThunkAPI) => {
  const state = ThunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return ThunkAPI.rejectWithValue('No token available');
  }

  try {
    myAxios.setToken(persistedToken);
    const res = await myAxios.get('/users/current');
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error authenticating');
  }
});