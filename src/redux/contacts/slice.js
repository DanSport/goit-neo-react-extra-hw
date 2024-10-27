import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logoutUser } from '../auth/operations';

const isRejectedAction = action => action.type.endsWith('rejected');
const isPendingAction = action => action.type.endsWith('pending');
const isFulfilledAction = action => action.type.endsWith('fulfilled');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    isAdding: false,
    isDeleting: [],
  },
  reducers: {
    clearContacts: state => {
      state.items = [];
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isAdding = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isAdding = false;
      })
      .addCase(addContact.rejected, state => {
        state.isAdding = false;
      })
      .addCase(deleteContact.pending, (state, { meta }) => {
        state.isDeleting.push(meta.arg);
      })
      .addCase(deleteContact.fulfilled, (state, { payload: curId }) => {
        state.items = state.items.filter(contact => contact.id != curId);
        state.isDeleting = state.isDeleting.filter(id => id != curId);
      })
      .addCase(deleteContact.rejected, (state, { meta: { arg: curId } }) => {
        state.isDeleting = state.isDeleting.filter(id => id != curId);
      })
      .addCase(logoutUser.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(isPendingAction, state => {
        state.error = false;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isFulfilledAction, state => {
        state.isLoading = false;
        state.error = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { clearContacts } = contactsSlice.actions;
