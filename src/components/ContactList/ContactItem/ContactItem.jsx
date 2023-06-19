import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/thunk';

const ContactItem = ({ id, name, phone }) => {
  const { loading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const deleteContactFromList = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={styles.item}>
      <p className={styles.itemText}>
        {name}: {phone}
      </p>
      <button
        type="button"
        disabled={loading}
        className={styles.itemButton}
        onClick={deleteContactFromList}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
