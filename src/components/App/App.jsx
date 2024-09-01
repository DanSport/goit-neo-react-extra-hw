import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts, selectContactsExist, selectError } from '../../redux/contacts';

export default function App() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const contactsExist = useSelector(selectContactsExist);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
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
  );
}
