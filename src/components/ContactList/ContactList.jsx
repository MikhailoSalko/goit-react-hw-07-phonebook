import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { StyledList } from './StyledContactList';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      {contacts.length === 0 ? (
        <p>You don't hame contact with this name</p>
      ) : (
        <StyledList>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))}
        </StyledList>
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
