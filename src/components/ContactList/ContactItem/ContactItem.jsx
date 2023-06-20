import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/thunk';
import {
  StyledButton,
  StyledItem,
  StyledText,
  StyledTextWrapper,
} from './StyledContactItem';

const ContactItem = ({ id, name, phone }) => {
  const { loading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const deleteContactFromList = () => dispatch(deleteContact(id));
  return (
    <StyledItem key={id}>
      <StyledTextWrapper>
        <StyledText>{name}:</StyledText>
        <StyledText>{phone}</StyledText>
      </StyledTextWrapper>
      <StyledButton
        type="button"
        disabled={loading}
        onClick={deleteContactFromList}
      >
        Delete
      </StyledButton>
    </StyledItem>
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
