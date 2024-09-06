import { contactsReducer } from './slice';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  selectContacts,
  selectContactsExist,
  selectFilteredContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectContactsIsAdding,
  selectContactsIsDeleting,
} from './selectors';

export {
  contactsReducer,
  fetchContacts,
  addContact,
  deleteContact,
  selectContacts,
  selectContactsExist,
  selectFilteredContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectContactsIsAdding,
  selectContactsIsDeleting,
};
