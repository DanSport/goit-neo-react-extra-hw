import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';
import { selectContactsExist, selectContactsError } from '../../redux/contacts';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const error = useSelector(selectContactsError);
  const contactsExist = useSelector(selectContactsExist);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <div className={css.app}>
        <h1>Phonebook</h1>

        <div className={css.card}>
          <ContactForm />
        </div>

        {error && (
          <div className={css.card}>
            <p className={css.error}>An error has occured</p>
            <p className={css.subError}>{error}</p>
          </div>
        )}

        {contactsExist && (
          <div className={css.card}>
            <SearchBox />
          </div>
        )}

        <div className={css.list}>
          <ContactList />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
