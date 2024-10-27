import myAxios from '../axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURLPrefix = '';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, ThunkAPI) => {
  try {
    return (await myAxios.get(`${baseURLPrefix}/contacts`)).data;
  } catch {
    return ThunkAPI.rejectWithValue('Error fetching contacts');
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, ThunkAPI) => {
  try {
    return (await myAxios.post(`${baseURLPrefix}/contacts`, contact)).data;
  } catch {
    return ThunkAPI.rejectWithValue('Error adding contact');
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, ThunkAPI) => {
  try {
    await myAxios.delete(`${baseURLPrefix}contacts/` + id);
    return id;
  } catch {
    return ThunkAPI.rejectWithValue('Error deleting contact');
  }
});
