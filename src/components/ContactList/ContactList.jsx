import styles from './ContactList.module.css';
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
        <ul className={styles.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={styles.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && (contactsExist ? <div className={styles.contactItem}>No contacts found</div> : <div className={styles.contactItem}>Phonebook is empty</div>)
      )}
    </>
  );
}
