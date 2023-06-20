import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { addContact } from 'redux/thunk';
import {
  StyledFomrLabel,
  StyledForm,
  StyledFormInput,
  StyledSubmitButton,
} from './ContactForm';

const initialState = {
  name: '',
  phone: '',
};

function ContactForm() {
  const [state, setState] = useState({
    ...initialState,
  });
  const { name, phone } = state;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    addNewContact({ ...state });
    setState({
      ...initialState,
    });
  };

  const addNewContact = ({ name, phone }) => {
    if (checkContactExist(name)) {
      Notify.failure(`${name} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        phone,
      })
    );
  };

  const checkContactExist = name => {
    const normalizadName = name.toLowerCase().trim();
    const foundContact = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizadName
    );
    return Boolean(foundContact);
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledFomrLabel htmlFor="name">Name</StyledFomrLabel>
      <StyledFormInput
        autoFocus
        onChange={handleInputChange}
        value={name}
        type="text"
        id="name"
        name="name"
        placeholder="Enter contact name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adriafn, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledFomrLabel htmlFor="phone">Phone</StyledFomrLabel>
      <StyledFormInput
        onChange={handleInputChange}
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        placeholder="Enter contact number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledSubmitButton type="submit">Add Contact</StyledSubmitButton>
    </StyledForm>
  );
}

export default ContactForm;
