import { myAxios } from '../axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const baseURLPrefix = '';
const baseURLPrefix = '/users';

export const registerUser = createAsyncThunk('auth/register', async (_, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/signup`);
    console.log('registerUser', { data: res.data, res });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error fetching contacts');
  }
});

export const loginUser = createAsyncThunk('auth/login', async (contact, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/login`, contact);
    console.log('loginUser', { data: res.data, res });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error adding contact');
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const res = await myAxios.post(`${baseURLPrefix}/logout`);
    console.log('logoutUser', { data: res.data, res });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error fetching contacts');
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, ThunkAPI) => {
  try {
    const res = await myAxios.get(`${baseURLPrefix}/current`);
    console.log('refreshUser', { data: res.data, res });
    return res.data;
  } catch {
    return ThunkAPI.rejectWithValue('Error fetching contacts');
  }
});
