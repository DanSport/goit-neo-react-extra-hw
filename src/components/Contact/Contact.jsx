import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt, FaSpinner } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContactsIsDeleting } from '../../redux/contacts/';

export default function Contact({ contact }) {
  const dispatcher = useDispatch();
  const isDeleting = useSelector(selectContactsIsDeleting);
  const isDeletingThis = isDeleting.some(id => String(id) === String(contact.id));

  const onDelete = e => {
    e.preventDefault();
    dispatcher(deleteContact(contact.id));
  };

  return (
    <IconContext.Provider value={{ style: { margin: '0 10px 0 0' } }}>
      <div className={css.contact}>
        <div className={css.data}>
          <p className={css.name}>
            <FaUser />
            {contact.name}
          </p>
          <p className={css.number}>
            <FaPhoneAlt />
            {contact.number}
          </p>
        </div>
        <button className={css.btn} onClick={onDelete} disabled={isDeletingThis}>
          {isDeletingThis ? <FaSpinner className={css.spinner} /> : 'Delete'}
        </button>
      </div>
    </IconContext.Provider>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
