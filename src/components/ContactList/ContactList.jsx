import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContactsExist, selectFilteredContacts, selectContactsIsLoading } from '../../redux/contacts';

export default function ContactList() {
  const contactsExist = useSelector(selectContactsExist);
  const isLoading = useSelector(selectContactsIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}

      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        !isLoading && (
          contactsExist ?
            <div className={css.card}>No contacts found</div> :
            <div className={css.card}>Phonebook is empty</div>
        )
      )}
    </>
  );
}
