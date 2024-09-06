import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelectors';

export const selectContacts = state => state.contacts.items;
export const selectContactsExist = createSelector([selectContacts], contacts => contacts.length > 0);
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || String(contact.number).toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name))
);

export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsIsAdding = state => state.contacts.isAdding;
export const selectContactsIsDeleting = state => state.contacts.isDeleting;
export const selectContactsError = state => state.contacts.error;
