import { contactsReducer } from './contactsSlice';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import {
  selectContacts,
  selectContactsExist,
  selectFilteredContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectContactsIsAdding,
  selectContactsIsDeleting,
} from './contactsSelectors';

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
