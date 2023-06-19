import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts);
  return (
    <>
      {contacts.length === 0 ? (
        <h6>You don't hame contact with this name</h6>
      ) : (
        <ul className={styles.list}>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  contacts: [],
};
